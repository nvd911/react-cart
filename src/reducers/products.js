var initialState = [
  {
    id: 1,
    name: "Iphone 6s Plus",
    image: "",
    rating: 4,
    description: "Sản phẩm do Apple Sản xuất",
    price: 15,
    invenrory: 10,
  },
  {
    id: 2,
    name: "Sam Sung S9",
    image: "",
    rating: 5,
    description: "Sản phẩm do SamSung Sản xuất",
    price: 25,
    invenrory: 14,
  },
  {
    id: 3,
    name: "Redmi K20 Pro",
    image: "",
    rating: 3,
    description: "Sản phẩm do Trung Quốc Sản xuất",
    price: 13,
    invenrory: 9,
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
