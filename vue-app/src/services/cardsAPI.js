import axios from "axios";
import { PRODUCTS_API } from "../config";

function findAll() {
  return axios
    .get(PRODUCTS_API)
    .then(response => response.data["hydra:member"]);
}

function deleteProduct(id) {
  return axios.delete(PRODUCTS_API + "/" + id);
}

function find(id) {
  return axios.get(PRODUCTS_API + "/" + id).then(response => response.data);
}

function update(id, product) {
  return axios.put(PRODUCTS_API + "/" + id, {
    ...product,
    category: `/categories/${product.category}`
  });
}

function create(product) {
  return axios.post(PRODUCTS_API, {
    ...product,
    category: `/categories/${product.category}`
  });
}

export default {
  findAll,
  find,
  create,
  update,
  delete: deleteProduct
};
