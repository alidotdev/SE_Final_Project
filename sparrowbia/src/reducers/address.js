// eslint-disable-next-line import/no-anonymous-default-export
export default (address = [], action) => {
    console.log("action >>>>", action);
    switch (action.type) {
      case "SET_ADDRESS":
        return [...address, action.payload];
      default:
        return address;
    }
  };
  