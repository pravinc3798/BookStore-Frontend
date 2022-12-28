import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  DeleteFromWishlist,
  GetBookById,
} from "../../backend-services/DataServices";
import { useDispatch } from "react-redux";
import { Rerender } from "../../redux/Action";

export default function WishlistBook(props) {
  const [book, setBook] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    GetBookById(props.wishlistBook.bookId)
      .then((response) => setBook(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteBook = (id) => {
    DeleteFromWishlist(id)
      .then((response) => {
        dispatch(Rerender());
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box display="flex" border="1px solid #E4E4E4" p="20px">
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
            <h4 style={{ margin: "5px" }}>Rs. {book.discountedPrice}</h4>
            <s style={{ color: "#878787" }}>
              <h5 style={{ color: "#a4a3a3", margin: "0 1rem" }}>
                Rs. {book.originalPrice}
              </h5>
            </s>
          </Box>
        </Box>
      </Box>
      <DeleteIcon
        onClick={() => deleteBook(props.wishlistBook.wishlistId)}
        sx={{ mt: "2rem", cursor: "pointer" }}
      />
    </Box>
  );
}
