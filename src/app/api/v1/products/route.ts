//connect to database for recolection the service

import { DBConnect } from "app/lib/DBConnect";

(async function () {
  await DBConnect();
})();

export async function GET(req) {
  return getAllProducts(req);
}

export async function POST(req) {
  return createProduct(req);
}
