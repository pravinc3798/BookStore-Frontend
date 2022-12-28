import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { GetBookById } from "../../backend-services/DataServices";

export default function OrderSummary(props) {
  const [book, setBook] = useState([]);

  useEffect(() => {
    GetBookById(props.book.bookId)
      .then((response) => {
        console.log(response);
        setBook(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box display="flex" p="20px">
      <Box display="flex" gap="3rem" width="50vw">
        <Box>
          <img width="120px" height="120px" src={book.image} />
        </Box>
        <Box>
          <h2 style={{ margin: "5px" }}>{book.bookName}</h2>
          <h4 style={{ margin: "5px", color: "#a4a3a3", fontWeight: "500" }}>
            by {book.authorName}
          </h4>
          <Box display="flex" alignItems="center">
            <h5 style={{ margin: "5px", fontWeight: "600" }}>
              Rs. {book.discountedPrice}
            </h5>
            <s style={{ color: "#878787" }}>
              <h5 style={{ color: "#a4a3a3", margin: "0 1rem" }}>
                Rs. {book.originalPrice}
              </h5>
            </s>
            <h5 style={{ margin: "5px", fontWeight: "600" }}>
              Qty : {props.book.cartQty}
            </h5>
          </Box>
          <h4 style={{ margin: "5px" }}>
            Total Price : Rs. {book.discountedPrice * props.book.cartQty} /-
          </h4>
        </Box>
      </Box>
    </Box>
  );
}
