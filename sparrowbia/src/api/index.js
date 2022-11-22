import axios from 'axios';
const url = 'http://localhost:8000/post';
const url1 = 'http://localhost:8000/subcat'
const url2 = 'http://localhost:8000/product'
const url3 = 'http://localhost:8000/collection'
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url,newPost);
export const fetchSubCatPosts = () => axios.get(url1);
export const fetchProducts = () => axios.get(url2);
export const createProducts = (newPost) => axios.post(url2,newPost);
export const deleteProducts = (id) => axios.delete(`${url2}/${id}`);
export const updatePost = (id, updatedPost) => axios.patch(`${url2}/${id}`, updatedPost);
export const fetchCollection = () => axios.get(url3);
