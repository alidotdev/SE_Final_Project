import * as api from "../api";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//get Sub Categories
export const getSubCatPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSubCatPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
//get Collection
export const getCollection = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCollection();
    dispatch({ type: "FETCH_COLLECTION", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
//Create Products
export const createProducts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createProducts(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//get Products
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: "FETCH_PRODUCTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
//delete Products
export const deleteProducts = (id) => async (dispatch) => {
  try {
    console.log(id);
    await api.deleteProducts(id);
    dispatch({ type: "DELETE_PRODUCTS", payload: id });
  } catch {}
};
//Update Products
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: "UPDATE_PRODUCTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
