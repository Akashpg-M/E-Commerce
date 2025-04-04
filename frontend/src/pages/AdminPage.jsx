import React from "react";
import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import ProductsList from "../components/ProductsList";
import CreateProductsForm from "../components/CreateProductForm";
import {useProductStore} from "../store/useProductStore";
import {useEffect} from "react";

const tabs = [
  { id: "create", label: "Create Products", icon: PlusCircle },
  { id: "products", label: "Products", icon: ShoppingBasket },
  { id: "analytics", label: "Analytics", icon: BarChart },
];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("create");
  const {fetchAllProducts } = useProductStore();

  useEffect(() => {
    fetchAllProducts();
  },[fetchAllProducts]);

  return (
    <div>
      <div>
        <motion.h1
          className="text-4xl font-bold mb-8 text-emerald-400 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Admin Dashboard
        </motion.h1>

        <div className="flex justify-center mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 mx-2 rounded-md  ${
                activeTab === tab.id
                  ? "bg-emerald-600 text-black"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {React.createElement(tab.icon, { className: "mr-2 h-5 w-5" })}
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "create" && <CreateProductsForm />}
        {activeTab === "products" && <ProductsList />}
      </div>
    </div>
  );
};

export default AdminPage;
