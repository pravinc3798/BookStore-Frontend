import { Box } from "@mui/material";
import React from "react";
import Login from "./Login";
import acc from "./../../images/Account.png";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";

export default function LoginPage() {
  const selectedPane = useSelector((state) => state.LoginOrRegister);
  return (
    <div style={{ backgroundColor: "#cccccc" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "4vw",
          fontSize: "1vw",
        }}
      >
        <Box
          sx={{
            border: "1px solid #E4E4E4",
            boxShadow: "0px 5px 15px #00000029",
            borderRadius: "15px",
            p: 5,
            backgroundColor: "#F5F5F5",
          }}
        >
          <img
            src={acc}
            alt="sdafsdaf"
            style={{
              width: "15vw",
              height: "15vw",
              borderRadius: "50%",
              marginBottom: "2rem",
            }}
          />
          <h3>ONLINE BOOK SHOPPING</h3>
        </Box>
        <Box>{selectedPane === "login" ? <Login /> : <SignUp />}</Box>
      </Box>
    </div>
  );
}
