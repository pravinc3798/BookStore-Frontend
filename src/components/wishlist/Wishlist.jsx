import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "./../home-page/Header";
import { GetWishlist } from "../../backend-services/DataServices";
import WishlistBook from "./WishlistBook";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const change = useSelector((state) => state.Rerender);
  const navigate = useNavigate();

  useEffect(() => {
    GetWishlist()
      .then((response) => {
        setWishlist(response.data.data);
        console.log(response);
      })
      .catch(error => setWishlist([]));
  }, [change]);

  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="column" ml="15vw">
        <Box display="flex" flexDirection="column" width="60vw">
          <Box display="flex">
            <h5
              style={{ color: "#a4a3a3", fontWeight: "500", cursor: "pointer" }}
              onClick={() => navigate("/home")}
            >
              Home /
            </h5>
            <h5 style={{ fontWeight: "500" }}>My Wishlist</h5>
          </Box>
          <Box border="1px solid #E4E4E4" bgcolor="#F5F5F5">
            <h3 style={{ fontWeight: "600", marginLeft: "2rem" }}>
              My Wishlist
            </h3>
          </Box>
        </Box>
        <Box width="60vw">
          {wishlist.map((wishlistData) => (
            <WishlistBook
              key={wishlistData.wishlistId}
              wishlistBook={wishlistData}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
