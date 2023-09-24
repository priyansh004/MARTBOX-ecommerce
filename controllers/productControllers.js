import products from "../models/productModels.js";


export const createProduct = async (req, res,next) => {
    
    const product = await products.create(req.body);

    res.status(201).json({
        success: true,
        product,
    });
}

// to get All product
export const getProductController = async (req, res) => {
  try {
    const product = await products
      .find()
    res.status(200).send({
      success: true,
      totalCount: product.length,
      message: "Products fetched successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching products",
      error,
    });
  }
};
