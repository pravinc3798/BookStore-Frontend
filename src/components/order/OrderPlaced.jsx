import React from "react";
import Header from "../home-page/Header";
import Button from "@mui/material/Button";
import OrderPlaced from "../../images/OrderPlaced.png";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function OrderPlacedPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="3rem"
        gap="1rem"
      >
        <img
          src={OrderPlaced}
          width="35%"
          height="35%"
          style={{ borderRadius: "3%" }}
        />
        <h2 style={{ color: "#333232" }}>hurray! your order is confirmed</h2>

        <div
          style={{
            width: "50%",
            border: "1px solid #DCDCDC",
            background: "#FAFAFA",
            fontWeight: "600",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              justifyContent: "space-evenly",
              borderBottom: "1px solid #DCDCDC",
            }}
          >
            <p>Email us</p>
            <p>Contact us</p>
            <p>Address</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            <p>admin@bookstore.com</p>
            <p>+91 9876543210</p>
            <p>14th, Bangalore 560034</p>
          </div>
        </div>

        <div>
          <Button
            variant="contained"
            size="large"
            sx={{ textTransform: "none", fontSize: "18px", mt: "1rem" }}
            onClick={() => navigate("/home")}
          >
            Continue Shopping
          </Button>
        </div>
      </Box>
    </div>
  );
}
