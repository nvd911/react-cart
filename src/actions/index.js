import { ADD_TO_CART } from "./../constants/Types";

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    product,
  });
};
