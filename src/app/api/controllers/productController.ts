import Product from "@/models/productModel";
import { errorHandlerResponse, ErrorApi } from "./errorController";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      throw new ErrorApi(404, "no se ha encontrado el recurso necesitado");
    }
    return Response.json({ status: "success", data: products });
  } catch (error) {
    errorHandlerResponse(error.status, error.message, req, res);
  }
};

export const getOneProduct = async (req) => {
  try {
    const productById = await Product.findById(req.query.id);
    if (!productById)
      throw new ErrorApi(404, "not found a product with that id");

    return Response.json({ status: "succcess", data: { productById } });
  } catch (error) {
    errorHandlerResponse(error, req);
  }
};

export const getAllProductsView = async () => {
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const { image, images } = req.body;
    if (image || images) {
      return new ErrorApi(
        400,
        `${req.url} para subir imagenes del producto debes ir a upload/productsImages`,
        res
      );
    }

    const objectModel = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      data: { objectModel },
    });
  } catch (error) {
    new ErrorApi(500, error.message, res);
  }
};

export const uploadProduct = async (req, res) => {
  try {
    const document = await Product.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!document) return new ErrorApi(404, "not found a product with that id");

    res.status(200).json({ status: "success", data: { document } });
  } catch (error) {
    new ErrorApi(500, error.message, res);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const delProduct = await Product.findByIdAndDelete(req.query.id);
    if (!delProduct)
      return new ErrorApi(404, "not found a product with that id", res);
    res.status(204).json({ status: "successfully" });
  } catch (error) {
    new ErrorApi(404, error.message, res);
  }
};
