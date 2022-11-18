export default (products = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return [action.payload];
    case "CREATE":
      return [...products, action.payload];
    case "DELETE_PRODUCTS":
      return products.filter((product) => product._id !== action.payload);
    case "UPDATE_PRODUCTS":
      return products.map((product) => (product._id === action.payload._id ? action.payload : product));
    default:
      return products;
  }
};
