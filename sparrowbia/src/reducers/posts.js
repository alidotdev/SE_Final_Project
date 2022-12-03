// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
    case "FETCH_ALL_SUB":
      return [action.payload];
    case "CREATE":
      return [...posts, action.payload];
    case "FETCH_USERS":
      return [action.payload];
    default:
      return posts;
  }
};
