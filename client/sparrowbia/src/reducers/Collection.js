export default (collection = [], action) => {
  switch (action.type) {
    case "FETCH_COLLECTION":
      return [action.payload];
    default:
      return collection;
  }
};
