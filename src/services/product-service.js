import axios from "axios";

export function createProduct(product) {
  return axios
    .post("http://localhost:3000/produtos", product)
    .then((response) => response.data.dados);
}

export function updateProduct(product) {
  return axios
    .put("http://localhost:3000/produtos/" + product.id, product)
    .then((response) => response.data.dados);
}

export function getProduct() {
  return axios
    .get("http://localhost:3000/produtos")
    .then((response) => response.data)
    .then((list) => list);
}

export function getProductById(id) {
  return axios
    .get("http://localhost:3000/produtos/" + id)
    .then((response) => response.data)
    .then((list) => list);
}

export function deleteProduct(id) {
  return axios
    .delete("http://localhost:3000/produtos/" + id)
    .then((response) => response.data.dados);
}
