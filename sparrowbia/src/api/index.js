import axios from 'axios';
const url = 'http://localhost:8000/post';
const url1 = 'http://localhost:8000/subcat'
const url2 = 'http://localhost:8000/product'
const url3 = 'http://localhost:8000/collection'
const cartURL = 'http://localhost:8000/cart'

export const fetchCartData = (userName) => axios.get(cartURL + '/' + userName);
export const updateCart = (cartData) => axios.post(cartURL + '/', cartData);

export const fetchPosts = () => axios.get(url);
export const fetchUsersByEmail = (email) => axios.get(url + "/" + email)
export const fetchProductsbyIDS = (ids) => axios.get(url2 + "/" + ids);
export const createPost = (newPost) => axios.post(url,newPost);
export const fetchSubCatPosts = () => axios.get(url1);
export const fetchProducts = () => axios.get(url2);
export const createProducts = (newPost) => axios.post(url2,newPost);
export const deleteProducts = (id) => axios.delete(`${url2}/${id}`);
export const updatePost = (id, updatedPost) => axios.patch(`${url2}/${id}`, updatedPost);
export const fetchCollection = () => axios.get(url3);
export const fetchProductsByCollection = (Collection,Category,SubCategory) => axios.get(`${url2}/${Collection}/${Category}/${SubCategory}`)
export const fetchProductsById = (Id) => axios.get(`${url2}/${Id}`)
