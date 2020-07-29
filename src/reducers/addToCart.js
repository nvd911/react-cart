import { ADD_TO_CART } from "./../constants/Types";

var initialState = {
  id: "",
  name: "",
  image: "",
  rating: 1,
  description: "",
  price: 0,
  invenrory: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return action.product;
    default:
      return state;
  }
}
