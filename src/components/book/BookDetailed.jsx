import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import {
  AddToCart,
  AddToWishlist,
  GetBookById,
} from "../../backend-services/DataServices";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Header from "../home-page/Header";
import Origin from "../home-page/Origin";

export default function BookDetailed() {
  const bookId = useSelector((state) => state.BookToOpen);
  const [book, setBook] = useState([]);
  const [added, setAdded] = useState({
    wishlist: false,
    cart: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    GetBookById(bookId)
      .then((response) => {
        setBook(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToCart = (id) => {
    let model = {
      bookId: id,
      cartQty: 1,
    };
    AddToCart(model)
      .then((response) => {
        console.log(response);
        setAdded({
          ...added,
          cart: true,
        });
      })
      .catch((error) => console.log(error));
  };

  const addToWishlist = (id) => {
    AddToWishlist(id)
      .then((response) => {
        console.log(response);
        setAdded({
          ...added,
          wishlist: true,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box>
      <Header />
      <Origin currentPage={`Book ${book.bookId}`} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Box width="30vw" marginLeft="15vw">
          <Box display="flex" gap="3px">
            <img
              src={book.image}
              alt=""
              width="44px"
              height="54px"
              style={{ border: "1px solid #7C1E1E" }}
            />
            <img
              src={book.image}
              alt=""
              width="361px"
              height="413px"
              style={{ border: "1px solid #D1D1D1" }}
            />
          </Box>
          <Box display="flex" gap="2vw" width="79%" ml="50px" mt="2rem">
            {!added.cart ? (
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  backgroundColor: "#A03037",
                  "&:hover": { backgroundColor: "#A03037" },
                }}
                onClick={() => addToCart(book.bookId)}
              >
                <ShoppingBagIcon sx={{ mr: 2 }} />
                ADD TO BAG
              </Button>
            ) : (
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  backgroundColor: "#388E3C",
                  "&:hover": { backgroundColor: "#388E3C" },
                }}
                onClick={() => navigate("/cart")}
              >
                <ShoppingBagIcon sx={{ mr: 2 }} />
                GO TO CART
              </Button>
            )}
            {!added.wishlist ? (
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  backgroundColor: "#333333",
                  "&:hover": { backgroundColor: "#333333" },
                }}
                onClick={() => addToWishlist(book.bookId)}
              >
                <FavoriteIcon sx={{ mr: 2 }} /> WISHLIST
              </Button>
            ) : (
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  backgroundColor: "#388E3C",
                  "&:hover": { backgroundColor: "#388E3C" },
                }}
                onClick={() => navigate("/wishlist")}
              >
                <FavoriteIcon sx={{ mr: 2 }} />
                GO TO Wish
              </Button>
            )}
          </Box>
        </Box>
        <Box width="30vw">
          <h2 style={{ margin: "0 0 5px 0" }}>{book.bookName}</h2>
          <h5
            style={{ margin: "0 0 5px 0", color: "#a4a3a3", fontWeight: "500" }}
          >
            by {book.authorName}
          </h5>
          <Box
            display="flex"
            alignItems="center"
            color="white"
            justifyContent="center"
            gap="2px"
            sx={{ background: "#388E3C 0% 0% no-repeat padding-box" }}
            width="55px"
            height="25px"
            margin="0 0 5px 0"
          >
            <p style={{ fontWeight: "bold" }}>{book.ratings}</p>
            <StarIcon fontSize="smaller" />
          </Box>
          <Box display="flex" flexDirection="column">
            <Box style={{ display: "flex" }}>
              <h3 style={{ margin: "0 0 5px 0" }}>
                Rs. {book.discountedPrice}
              </h3>
              <s style={{ color: "#a4a3a3" }}>
                <h4
                  style={{
                    margin: "0 0 0 15px",
                    color: "#a4a3a3",
                    fontWeight: "500",
                  }}
                >
                  Rs. {book.originalPrice}
                </h4>
              </s>
            </Box>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                paddingTop: "5%",
                borderTop: "1px solid #d6d5d5",
                marginTop: "3%",
                gap: "10px",
                width: "100%",
              }}
            >
              <h4 style={{ margin: "0", color: "#a4a3a3", fontWeight: "1000" }}>
                Book Details
              </h4>
              <h5
                style={{
                  margin: "0",
                  textAlign: "start",
                  color: "#a4a3a3",
                  fontWeight: "500",
                }}
              >
                {book.description}
              </h5>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  paddingTop: "5%",
                  borderTop: "1px solid #d6d5d5",
                  marginTop: "3%",
                  gap: "10px",
                }}
              >
                <h4 style={{ margin: "0", fontWeight: "600" }}>
                  Customer Feedback
                </h4>
                <Box bgcolor="#F5F5F5" p="1rem" width="93%">
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#a4a3a3",
                      margin: "0 0 10px 4px",
                    }}
                  >
                    Overall rating
                  </p>
                  <Rating name="simple-controlled" />
                  <TextField
                    className="inputqv"
                    label="Write your review"
                    multiline
                    fullWidth
                    maxRows={4}
                    sx={{ margin: "10px 0", background: "white" }}
                  />
                  <Box textAlign="right">
                    <p>
                      <Button variant="contained" size="small">
                        Submit
                      </Button>
                    </p>
                  </Box>
                </Box>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </Box>
  );
}
