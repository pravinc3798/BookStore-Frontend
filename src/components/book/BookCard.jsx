import { Box } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { OpenBook } from "../../redux/Action";
import { useNavigate } from "react-router-dom";

export default function BookCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box
      border="1px solid #cfcece"
      borderRadius="3px"
      backgroundColor="#eae9e9"
      width="227px"
      height="275px"
      sx={{ "&:hover": { boxShadow: "0 0 5px #202124" }, cursor: "pointer" }}
      onClick={() => {
        dispatch(OpenBook(props.bookData.bookId));
        navigate("/book");
      }}
    >
      <Box>
        <img
          src={props.bookData.image}
          alt="bookimg"
          width="227px"
          height="195px"
        />
        {/* <Box marginTop='-80px' marginBottom='18px' textAlign='center'>
            <h3 style={{border:'1px solid black'}}>Out of stock</h3>
        </Box> */}
      </Box>
      <Box padding="0px 0px 0px 10px">
        <h4 style={{ margin: "1px", fontWeight: "500" }}>
          {props.bookData.bookName}
        </h4>
        <h6 style={{ color: "#878787", margin: "1px", fontWeight: "lighter" }}>
          by {props.bookData.authorName}
        </h6>
        <Box display="flex" alignItems="center" gap="0.5rem">
          <Rating
            name="read-only"
            value={props.bookData.ratings}
            readOnly
            size="small"
          />
          <h6 style={{ color: "#878787", margin: "0" }}>
            ({props.bookData.reviews})
          </h6>
        </Box>
        <Box display="flex" alignItems="center" gap="0.5rem" margin="1px">
          <h5 style={{ margin: "0" }}>Rs. {props.bookData.discountedPrice}</h5>
          <s style={{ color: "#878787" }}>
            <h6 style={{ color: "#a4a3a3", margin: "0" }}>
              Rs. {props.bookData.originalPrice}
            </h6>
          </s>
        </Box>
      </Box>
    </Box>
  );
}
