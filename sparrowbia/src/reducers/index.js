import { combineReducers } from "redux";
import posts from './posts'
import products from './Products'
import collection from "./Collection";
export default combineReducers({posts,products,collection});