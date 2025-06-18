import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";

export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async({name, email, password, confirmPassword}) => {
    set({ loading: true });
    if(password !== confirmPassword){
      set({ loading: false});
      return toast.error("Password do not match");
    }

    try{
      const res = await axios.post("/auth/signup", {name, email, password});
      set({user: res.data, loading:false});
    }catch(error){
      set({loading:false});
      toast.error(error.response.data.message || "An error occured");

    }
  },

  login: async (email, password) => {
    set({ loading: true });

    try {
      const res = await axios.post("/auth/login", { email, password });
      console.log("user is here", res.data);
      set({ user: res.data, loading: false });
      return res.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred during login";
      set({ loading: false });
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  },

  logout: async() => {
    try{
      await axios.post("/auth/logout");
      set({ user: null})
    }catch(error){
      toast.error(error.response?.data?.message || "An error occured during logout");
    }
  },

  checkAuth: async() => {
    set({ checkingAuth: true});
    try{
      const response = await axios.get("/auth/profile");
      set({user:response.data, checkingAuth: false});
    }catch(error){
      set({checkingAuth: false, user: null});
    }
  },

  refreshToken: async () => {
		// Prevent multiple simultaneous refresh attempts
		if (get().checkingAuth) return;

		set({ checkingAuth: true });
		try {
			const response = await axios.post("/auth/refresh-token");
			set({ checkingAuth: false });
			return response.data;
		} catch (error) {
			set({ user: null, checkingAuth: false });
			throw error;
		}
	},
}));

//to prevent multiple login uisng interceptors concept

let refreshPromise = null;

axios.interceptors.response.use(
  (response) => response, // If response is successful, return it
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      console.warn(" Access token expired, refreshing...");
      originalRequest._retry = true;

      try {
        if (refreshPromise) {
          const newToken = await refreshPromise;
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
          return axios(originalRequest);
        }

        refreshPromise = useUserStore.getState().refreshToken();
        const newToken = await refreshPromise;
        refreshPromise = null;

        console.log(" New token received:", newToken);
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        console.error(" Token refresh failed:", refreshError);
        useUserStore.getState().logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);


