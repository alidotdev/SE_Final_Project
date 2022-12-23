// eslint-disable-next-line import/no-anonymous-default-export
export default (cart = [], action) => {
    switch (action.type) {
      case "Get_Cart_Data_By_User_Name":
        return action.payload;
      case "Update_Cart":
        return [action.payload];
      default:
        return cart;
    }
  };
  