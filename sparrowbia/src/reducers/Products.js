// eslint-disable-next-line import/no-anonymous-default-export
export default (products = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return [action.payload];
    case "CREATE":
      return [...products, action.payload];
    case "DELETE_PRODUCTS":
      return products.filter((product) => product._id !== action.payload);
    case "UPDATE_PRODUCTS":
      return products.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
    case "FETCH_PRODUCTS_BY_COLLECTION":
      console.log("In reducers ", action.payload);
      return [action.payload];
    case "FETCH_PRODUCTS_BY_ID":
      return [action.payload];
    default:
      return products;
  }
};
