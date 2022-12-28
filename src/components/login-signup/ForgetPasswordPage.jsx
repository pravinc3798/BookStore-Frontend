import { Box } from "@mui/system";
import React, { useState } from "react";
import icon from "./../../images/BookLogo.png";
import InputLabel from "@mui/material/InputLabel";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { ForgetApi, ResetApi } from "../../backend-services/UserServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SelectLoginOrRegister } from "../../redux/Action";

export default function ForgetPasswordPage() {
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fieldUpdate = (event) => {
    setEmailId(event.target.value);
  };

  const submit = () => {
    ForgetApi(emailId)
      .then((response) => {
        console.log(response);
        localStorage.setItem("Token", response.data.data);
        navigate("/resetpassword");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box>
      <Box
        sx={{
          background: "#A03037",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img
          src={icon}
          alt="Book Logo"
          style={{
            width: "28px",
            height: "23px",
            marginLeft: "15vw",
            cursor: "pointer",
          }}
          onClick={() => navigate("/account")}
        />
        <h3
          style={{ fontWeight: "500", color: "white", cursor: "pointer" }}
          onClick={() => navigate("/account")}
        >
          BookStore
        </h3>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "4rem 0 3rem 33vw",
          alignItems: "center",
          width: "33vw",
        }}
      >
        <Box>
          <h2>Forgot Your Password?</h2>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "6px",
            border: "1px solid #E4E4E4",
            alignItems: "center",
            gap: "1rem",
            p: "2rem 4rem 2rem 4rem",
          }}
        >
          <p style={{ color: "#878787" }}>
            Enter your email address and we'll send you a link to reset
            password.
          </p>
          <InputLabel style={{ fontSize: "small", alignSelf: "flex-start" }}>
            Email ID
          </InputLabel>
          <TextField
            variant="outlined"
            type="email"
            size="small"
            fullWidth
            onChange={fieldUpdate}
          />
          <Button
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#A03037",
            }}
            onClick={submit}
          >
            Reset Password
          </Button>
        </Box>
        <Box
          sx={{
            border: "1px solid #E4E4E4",
            background: " #F9F9F8",
            width: "99.5%",
            textAlign: "center",
            p: "1.5rem 0",
            cursor: "pointer",
            mt: -1,
          }}
          onClick={() => {
            dispatch(SelectLoginOrRegister("signup"));
            navigate("/account");
          }}
        >
          CREATE ACCOUNT
        </Box>
      </Box>
    </Box>
  );
}
