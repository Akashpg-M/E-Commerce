import Product from "../models/product.model.js";

export const getAllProduct = async (req, res) => {
  try{
    const products = await Product.find({}); //get everything
    res.json({products});
  }catch(error){
    console.log("Error in getAllProduct controller", error.message);
    res.status(500).json({message: "Server error ", error: error.message});
  }
}