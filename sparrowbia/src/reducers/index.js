import { combineReducers } from "redux";
import posts from './posts'
import products from './Products'
import collection from "./Collection";
import cart from "./cart"
import address from "./address";
export default combineReducers({posts,products,collection, cart, address});