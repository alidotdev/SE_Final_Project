import * as api from "../api";


export const getCart = (userName) => async (dispatch) => {
  try{
    const { data } = await api.fetchCartData(userName);
    dispatch({type: "Get_Cart_Data_By_User_Name", payload: data});
  }
  catch(error){
    console.log(error.message);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};




export const fetchProductsbyIDS = (ids) =>  async (dispatch) => {
  try {
    const { data } = await api.fetchProductsbyIDS (ids);
    dispatch ({ type: "FETCH_PRODUCTS_BY_ID", payload: data });
  } catch (error) {
    console.log (error);
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


//get Products by Collection
export const getProductsByCol = (collection,category,sub_category) => async (dispatch) => {
  try{
    const { data } = await api.fetchProductsByCollection(collection,category,sub_category);
    console.log("In action folder ",data)
    dispatch({ type: "FETCH_PRODUCTS_BY_COLLECTION", payload: data });
  }
  catch(error){
    console.log(error.message);
  }

}
//get Product By Id
export const getProductsById = (Id) => async (dispatch) => {
  try{
    const { data } = await api.fetchProductsById(Id);
    console.log("In action folder ",data)
    dispatch({ type: "FETCH_PRODUCTS_BY_ID", payload: data });
  }
  catch(error){
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
