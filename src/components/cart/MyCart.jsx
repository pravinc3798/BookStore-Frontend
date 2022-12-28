import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CartItem from "./CartItem";
import Button from "@mui/material/Button";
import {
  GetAddress,
  GetCart,
  GetUser,
  PlaceOrder,
} from "../../backend-services/DataServices";
import Header from "../home-page/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Address from "./Address";
import OrderSummary from "./OrderSummary";
import { wait } from "@testing-library/user-event/dist/utils";
import { Rerender } from "../../redux/Action";
import Origin from "../home-page/Origin";

export default function MyCart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const change = useSelector((state) => state.Rerender);
  const [order, setOrder] = useState({
    placeOrder: false,
    continue: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    GetCart()
      .then((response) => {
        setCart(response.data.data.filter((item) => !item.isOrdered));
      })
      .catch((error) => console.log(error));
  }, [change]);

  const [user, setUser] = useState([]);

  useEffect(() => {
    GetUser()
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const placeOrder = () => {
    cart.forEach((item) => {
      let cartModel = {
        cartId: item.cartId,
      };
      PlaceOrder(cartModel)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      wait(250);
    });

    dispatch(Rerender());
    setOrder({
      ...order,
      placeOrder: false,
      continue: false,
    });
    navigate("/orderplaced");
  };

  return (
    <Box>
      <Header />
      <Origin currentPage={"My Cart"} />
      <Box
        border="1px solid lightgray"
        width="50vw"
        borderRadius="5px"
        ml="15vw"
      >
        <Box display="flex" justifyContent="space-around" gap="15vw" mt="1rem">
          <h3>My Cart (5)</h3>
          <Box
            display="flex"
            alignItems="center"
            border="1px solid #DCDCDC"
            width="18vw"
            height="3rem"
            mt="0.5rem"
          >
            <LocationOnIcon
              fontSize="small"
              style={{
                color: "#A03037",
                marginRight: "8px",
                marginLeft: "5px",
              }}
            />
            <p>Use current location</p>
            <ArrowDropDownIcon sx={{ ml: "5vw", color: "#DCDCDC" }} />
          </Box>
        </Box>
        {cart.map((item) => (
          <CartItem key={item.cartId} cartBook={item} />
        ))}
        {cart.length > 0 &&
        <Box textAlign="right" mr="2.5vw">
          <p>
            <Button
              variant="contained"
              size="large"
              onClick={() => setOrder({ ...order, placeOrder: true })}
            >
              Place Order
            </Button>
          </p>
        </Box>
        }
        {order.placeOrder ? (
          <Box borderTop="1px solid lightgray" borderRadius="5px">
            <Address user={user} />
            <Box textAlign="right" mr="2.5vw">
              <p>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setOrder({ ...order, continue: true })}
                >
                  Continue
                </Button>
              </p>
            </Box>
          </Box>
        ) : (
          <br />
        )}
        {order.continue ? (
          <Box border="1px solid #E4E4E4">
            <h3 style={{ marginLeft: "2vw" }}>Order Summary</h3>
            {cart
              .filter((item) => !item.isOrdered)
              .map((item) => (
                <OrderSummary key={item.cartId} book={item} />
              ))}
            <Box textAlign="right" mr="2.5vw">
              <p>
                <Button variant="contained" size="large" onClick={placeOrder}>
                  CheckOut
                </Button>
              </p>
            </Box>
          </Box>
        ) : (
          <br />
        )}
      </Box>
    </Box>
  );
}
