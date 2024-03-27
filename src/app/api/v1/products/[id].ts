import { NextRequest } from "next/server";
import {
  getOneProduct,
  uploadProduct,
  deleteProduct,
} from "../../controllers/productController";

export default function handler(req: Request, res: Response) {
  const { method } = req;
  if (method === "GET") return getOneProduct(req, res);
  if (method === "PATCH") return uploadProduct(req, res);
  if (method === "DELETE") return deleteProduct(req, res);
}
