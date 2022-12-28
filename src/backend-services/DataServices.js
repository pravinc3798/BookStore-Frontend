import axios from "axios";

let header = {
  headers: {
    Authorization: "Bearer" + " " + localStorage.getItem("Token"),
  },
};

export const GetAllBooks = () => {
  let response = axios.get("http://localhost:38281/api/Book/AllBooks");
  return response;
};

export const GetBookById = (bookId) => {
  let response = axios.get(
    `http://localhost:38281/api/Book/GetABook?bookId=${bookId}`
  );
  return response;
};

export const AddToCart = (cartModel) => {
  let response = axios.post(
    `http://localhost:38281/api/Cart/Add?bookId=${cartModel.bookId}&cartQty=${cartModel.cartQty}`,
    cartModel,
    header
  );
  return response;
};

export const GetCart = () => {
  let response = axios.get("http://localhost:38281/api/Cart/View", header);
  return response;
};

export const DeleteFromCart = (cartId) => {
  let response = axios.delete(
    `http://localhost:38281/api/Cart/Delete?cartId=${cartId}`,
    header
  );
  return response;
};

export const GetQty = (bookId) => {
  let response = axios.get(
    `http://localhost:38281/api/Cart/GetQty?bookId=${bookId}`,
    header
  );
  return response;
};

export const UpdateCartQty = (model) => {
  let response = axios.put(
    `http://localhost:38281/api/Cart/Update?cartId=${model.cartId}&cartQty=${model.cartQty}`,
    model,
    header
  );
  return response;
};

export const GetWishlist = () => {
  let response = axios.get("http://localhost:38281/api/Wishlist/View", header);
  return response;
};

export const AddToWishlist = (bookId) => {
  let response = axios.post(
    `http://localhost:38281/api/Wishlist/Add?bookId=${bookId}`,
    null,
    header
  );
  return response;
};

export const DeleteFromWishlist = (wishlistId) => {
  let response = axios.delete(
    `http://localhost:38281/api/Wishlist/Delete?wishlistId=${wishlistId}`,
    header
  );
  return response;
};

export const AddAddress = (addressModel) => {
  let response = axios.post(
    `http://localhost:38281/api/Address/Add`,
    addressModel,
    header
  );
  return response;
};

export const GetAddress = () => {
  let response = axios.get(
    `http://localhost:38281/api/Address/ViewAll`,
    header
  );
  return response;
};

export const GetUser = () => {
  let response = axios.get(
    `http://localhost:38281/api/User/UserDetails`,
    header
  );
  return response;
};

export const PlaceOrder = (orderModel) => {
  let response = axios.post(
    "http://localhost:38281/api/Order/Add",
    orderModel,
    header
  );
  return response;
};

export const GetBookUsingCartId = (cartId) => {
  let response = axios.get(
    `http://localhost:38281/api/Order/GetBookFromCartId?cartId=${cartId}`,
    header
  );
  return response;
};

export const GetAllOrders = () => {
  let response = axios.get(`http://localhost:38281/api/Order/View`, header);
  return response;
};


