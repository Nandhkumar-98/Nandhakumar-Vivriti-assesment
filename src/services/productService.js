import { client } from "../../src/client";
import { backendurl as url, productUrl } from "../../src/constant";


export async function getProductDetails() {

  let Config = {
    url: url + productUrl.getProducts,
    headers: {
      "content-type": "application/json",
    },
    method: "get"
  };

  let response = await client(Config);
  return response;
}

export async function getCategories() {

  let Config = {
    url: url + productUrl.getCategories,
    headers: {
      "content-type": "application/json",
    },
    method: "get"
  };

  let response = await client(Config);
  return response;
}


export async function searchBycategory(category) {

  let Config = {
    url: url + productUrl.searchBycategory + category,
    headers: {
      "content-type": "application/json",
    },
    method: "get"
  };

  let response = await client(Config);
  return response;
}

export async function searchByProduct(product) {

  let Config = {
    url: url + productUrl.searchByProduct + product,
    headers: {
      "content-type": "application/json",
    },
    method: "get"
  };

  let response = await client(Config);
  return response;
}

