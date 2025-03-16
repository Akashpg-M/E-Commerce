import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, ArrowRight, Loader} from "lucide-react";
import { motion } from "framer-motion";

import { useUserStore } from "../store/useUserStore.js"
const SignUpPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {signup, loading} = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signup(formData);
  }
  
  return (
    <div>
      <motion.div>
        <h2>Create Your Account</h2>
      </motion.div>

      <motion.div>
        <div>
          <form onSubmit = {handleSubmit}>

            {/* name */}
            <div>
              <label htmlFor='name'>
                Full name
              </label>

              <div>
                <div>
                  <UserPlus aria-hidden='true'/>
                </div>
                <input
                  id='name'
                  type='text'
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder='John Doe'
                />
              </div>
            </div>

            {/* E-mail component */}
            <div>
              <label htmlFor='email'>
                Email Address
              </label>

              <div>
                <div>
                  <Mail aria-hidden='true'/>
                </div>
                <input
                  id='email'
                  type='email'
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder='your-email@example.com'
                />
              </div>
            </div>
            
            {/* Password */}
            <div>
              <label htmlFor='password'>
                Password
              </label>

              <div>
                <div>
                  <Lock aria-hidden='true'/>
                </div>
                <input
                  id='password'
                  type='password'
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder='******'
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor='confirmPassword'>
                Confirm Password
              </label>

              <div>
                <div>
                  <Lock aria-hidden='true'/>
                </div>
                <input
                  id='confirmPassword'
                  type='password'
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder='password'
                />
              </div>
            </div>
            
            <button
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader aria-hidden='true'/>
                  Loading...
                </>
              ):(
                <>
                  <UserPlus aria-hidden='true' />
                  Sign up
                </>
              )}
            </button>
          </form>

          <p>
            Already have an Account?{" "}
            <Link to='/login'>
              Login here <ArrowRight />
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default SignUpPage;