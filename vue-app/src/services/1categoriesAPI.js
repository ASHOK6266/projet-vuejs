import axios from "axios";
import Cache from "./cache";
import { CATEGORIES_API } from "../config";

async function findAll() {
  const cachedCategories = await Cache.get("categories");

  if (cachedCategories) return cachedCategories;

  return axios.get(CATEGORIES_API).then(response => {
    const categories = response.data["hydra:member"];
    Cache.set("categories", categories);
    return categories;
  });
}

async function find(id) {
  const cachedCategorie = await Cache.get("categories." + id);

  if (cachedCategorie) return cachedCategorie;

  return axios.get(CATEGORIES_API + "/" + id).then(response => {
    const categorie = response.data;

    Cache.set("categories." + id, categorie);

    return categorie;
  });
}

function deleteCategorie(id) {
  return axios.delete(CATEGORIES_API + "/" + id).then(async response => {
    const cachedCategories = await Cache.get("categories");

    if (cachedCategories) {
      Cache.set("categories", cachedCategories.filter(c => c.id !== id));
    }

    return response;
  });
}

function update(id, categorie) {
  return axios.put(CATEGORIES_API + "/" + id, categorie).then(async response => {
    const cachedCategories = await Cache.get("categories");
    const cachedCategorie = await Cache.get("categories." + id);

    if (cachedCategorie) {
      Cache.set("categories." + id, response.data);
    }

    if (cachedCategories) {
      const index = cachedCategories.findIndex(c => c.id === +id);
      cachedCategories[index] = response.data;
    }

    return response;
  });
}

function create(categorie) {
  return axios.post(CATEGORIES_API, categorie).then(async response => {
    const cachedCategories = await Cache.get("categories");

    if (cachedCategories) {
      Cache.set("categories", [...cachedCategories, response.data]);
    }

    return response;
  });
}

export default {
  findAll,
  find,
  create,
  update,
  delete: deleteCategorie
};
