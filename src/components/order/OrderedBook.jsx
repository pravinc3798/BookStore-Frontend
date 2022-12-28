import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { waitFor } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  GetBookById,
  GetBookUsingCartId,
} from "../../backend-services/DataServices";

export default function CartItem(props) {
  const [orderedBooks, setOrderedBooks] = useState([]);

  useEffect(() => {
    GetBookUsingCartId(props.order.cartId).then((response) =>
      GetBookById(response.data.data)
        .then((response) => {
          console.log(response);
          setOrderedBooks(response.data.data);
        })
        .catch((error) => console.log(error))
    );
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="68vw"
      border="1px solid #E4E4E4"
      p="10px"
      m="1rem 0"
    >
      <Box display="flex" gap="1rem" ml="1vw" m="1rem 0">
        <Box>
          <img src={orderedBooks.image} alt="" width="120px" height="100px" />
        </Box>
        <Box>
          <h3 style={{ margin: "5px" }}>{orderedBooks.bookName}</h3>
          <h6 style={{ margin: "5px", color: "#a4a3a3", fontWeight: "400" }}>
            by {orderedBooks.authorName}
          </h6>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5 style={{ margin: "5px" }}>
              Rs. {orderedBooks.discountedPrice}
            </h5>
            <s style={{ color: "#878787" }}>
              <h6 style={{ color: "#a4a3a3", margin: "0" }}>
                Rs. {orderedBooks.originalPrice}
              </h6>
            </s>
          </div>
        </Box>
      </Box>
      <Box
        display="flex"
        gap="5px"
        mt="2rem"
        mb="1rem"
        alignItems="center"
        mr="2vw"
      >
        <FiberManualRecordIcon
          fontSize="small"
          color="success"
          sx={{ width: "10px" }}
        />
        <p
          style={{
            fontSize: "14px",
            color: "gray",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Ordered On : {new Date(props.order.orderDate).toDateString()}
        </p>
      </Box>
    </Box>
  );
}
