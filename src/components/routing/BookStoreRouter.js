import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../login-signup/LoginPage";

import React from "react";
import ForgetPasswordPage from "../login-signup/ForgetPasswordPage";
import ResetPasswordPage from "../login-signup/ResetPasswordPage";
import HomePage from "../home-page/HomePage";
import BookDetailed from "../book/BookDetailed";
import MyCart from "../cart/MyCart";
import Wishlist from "../wishlist/Wishlist";
import OrderPlacedPage from "../order/OrderPlaced";
import MyOrder from "../order/MyOrder";
import ProfilePage from "../profile/ProfilePage";

export default function BookStoreRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/logout" element={<LoginPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
        <Route path="/book" element={<BookDetailed />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orderplaced" element={<OrderPlacedPage />} />
        <Route path="/my orders" element={<MyOrder />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
