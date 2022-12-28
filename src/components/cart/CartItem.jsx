import { border, Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteFromCart,
  GetBookById,
  UpdateCartQty,
} from "../../backend-services/DataServices";
import { Rerender } from "../../redux/Action";

export default function CartItem(props) {
  const [cartBook, setCartBook] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    GetBookById(props.cartBook.bookId)
      .then((response) => {
        console.log(response);
        setCartBook(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteItem = (id) => {
    DeleteFromCart(id)
      .then((response) => {
        console.log(response);
        dispatch(Rerender());
      })
      .catch((error) => console.log(error));
  };

  const updateQty = (id, qty) => {
    let model = {
      cartId: id,
      cartQty: qty,
    };

    UpdateCartQty(model)
      .then((response) => {
        console.log(response);
        dispatch(Rerender());
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box display="flex" gap="1rem" ml="1vw" mt="2rem">
      <Box>
        <img src={cartBook.image} alt="" width="120px" height="100px" />
      </Box>
      <Box>
        <h3 style={{ margin: "5px" }}>{cartBook.bookName}</h3>
        <h6 style={{ margin: "5px", color: "#a4a3a3", fontWeight: "400" }}>
          by {cartBook.authorName}
        </h6>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h5 style={{ margin: "5px" }}>Rs. {cartBook.discountedPrice}</h5>
          <s style={{ color: "#878787" }}>
            <h6 style={{ color: "#a4a3a3", margin: "0" }}>
              Rs. {cartBook.originalPrice}
            </h6>
          </s>
        </div>
        <Box display="flex" gap="5px" mt="2rem" mb="1rem" alignItems="center">
          <button
            style={{
              borderRadius: "50%",
              border: "1px solid #DBDBDB",
              cursor: "pointer",
            }}
            onClick={
              props.cartBook.cartQty != 1
                ? () =>
                    updateQty(props.cartBook.cartId, props.cartBook.cartQty - 1)
                : () => console.log("nope")
            }
          >
            -
          </button>
          <div
            style={{
              border: "1px solid #DBDBDB",
              width: "41px",
              textAlign: "center",
              color: "#333232",
            }}
          >
            {props.cartBook.cartQty}
          </div>
          <button
            style={{
              borderRadius: "50%",
              border: "1px solid #DBDBDB",
              cursor: "pointer",
            }}
            onClick={() =>
              updateQty(props.cartBook.cartId, props.cartBook.cartQty + 1)
            }
          >
            +
          </button>
          <div onClick={() => deleteItem(props.cartBook.cartId)}>
            <span
              style={{
                marginLeft: "2vw",
                fontSize: "12px",
                color: "gray",
                cursor: "pointer",
              }}
            >
              Remove
            </span>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
