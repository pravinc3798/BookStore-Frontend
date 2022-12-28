import { Box } from "@mui/system";
import React, { useState } from "react";
import icon from "./../../images/BookLogo.png";
import InputLabel from "@mui/material/InputLabel";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { ResetApi } from "../../backend-services/UserServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SelectLoginOrRegister } from "../../redux/Action";

export default function ForgetPasswordPage() {
  const [resetModel, setResetModel] = useState({
    userPassword: "",
    confirmPassword: "",
  });

  const fieldUpdate = (field, value) => {
    setResetModel({
      ...resetModel,
      [field]: value,
    });
  };

  const submit = () => {
    ResetApi(resetModel)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const navigate = useNavigate();

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
          <h2>Reset Your Password</h2>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "6px",
            border: "1px solid #E4E4E4",
            alignItems: "center",
            gap: "1rem",
            p: "2rem 4rem 3rem 4rem",
            width: "60%",
          }}
        >
          <p style={{ color: "#878787" }}>Enter new password.</p>
          <InputLabel style={{ fontSize: "small", alignSelf: "flex-start" }}>
            Password
          </InputLabel>
          <TextField
            variant="outlined"
            type="text"
            size="small"
            fullWidth
            onChange={(event) =>
              fieldUpdate("userPassword", event.target.value)
            }
          />
          <InputLabel style={{ fontSize: "small", alignSelf: "flex-start" }}>
            Confirm Password
          </InputLabel>
          <TextField
            variant="outlined"
            type="text"
            size="small"
            fullWidth
            onChange={(event) =>
              fieldUpdate("confirmPassword", event.target.value)
            }
          />
          <Button
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#A03037",
              marginTop: 20,
            }}
            onClick={submit}
          >
            Reset Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
