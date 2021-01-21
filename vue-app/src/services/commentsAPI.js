import axios from "axios";
import { COMMENTS_API } from "../config";

function findAll() {
  return axios
    .get(COMMENTS_API)
    .then(response => response.data["hydra:member"]);
}

function deleteComment(id) {
  return axios.delete(COMMENTS_API + "/" + id);
}

function find(id) {
  return axios.get(COMMENTS_API + "/" + id).then(response => response.data);
}

function update(id, comment) {
  return axios.put(COMMENTS_API + "/" + id, {
    ...comment,
    product: `/products/${comment.product}`
  });
}

function create(comment) {
  return axios.post(COMMENTS_API, {
    ...comment,
    product: `/products/${comment.product}`
  });
}

export default {
  findAll,
  find,
  create,
  update,
  delete: deleteComment
};
