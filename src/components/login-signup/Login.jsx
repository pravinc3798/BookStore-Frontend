import { Box, FormControl } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import zIndex from "@mui/material/styles/zIndex";
import { useDispatch } from "react-redux";
import { SelectLoginOrRegister } from "../../redux/Action";
import FormHelperText from "@mui/material/FormHelperText";
import { LoginApi } from "../../backend-services/UserServices";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginModel, setLoginModel] = useState({
    emailId: "",
    userPassword: "",
    emailError: false,
    passwordError: false,
    showPassword: false,
  });

  const fieldUpdate = (field, value) => {
    setLoginModel({
      ...loginModel,
      [field]: value,
    });
  };

  const navigate = useNavigate();

  const validate = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    const userPasswordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

    let emailTest = emailRegex.test(loginModel.emailId);
    let passwordTest = userPasswordRegex.test(loginModel.userPassword);

    setLoginModel({
      ...loginModel,
      emailError: emailTest ? false : true,
      passwordError: passwordTest ? false : true,
    });

    if (emailTest && passwordTest) {
      LoginApi(loginModel)
        .then((response) => {
          console.log(response);
          localStorage.setItem("Token", response.data.data);
          navigate("/home");
        })
        .catch((error) => console.log(error));
    }
  };

  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: "20vw",
        height: "32.5rem",
        padding: "1vw 5vw 2vw 5vw",
        display: "flex",
        flexDirection: "column",
        gap: "2vw",
        border: "1px solid #E4E4E4",
        boxShadow: "0px 5px 15px #00000029",
        borderRadius: "12px",
        backgroundColor: "#F5F5F5",
        zIndex: 1200,
        fontSize: "1vw",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ cursor: "pointer" }}>LOGIN</h2>
        <h2
          style={{ color: "#878787", cursor: "pointer" }}
          onClick={() => dispatch(SelectLoginOrRegister("signup"))}
        >
          SIGNUP
        </h2>
      </Box>
      <Box>
        <FormControl fullWidth sx={{ mb: 1.5 }}>
          <InputLabel htmlFor="email">Email Id</InputLabel>
          <OutlinedInput
            id="email"
            label="Email Id"
            variant="outlined"
            size="medium"
            fullWidth
            onChange={(event) => fieldUpdate("emailId", event.target.value)}
            error={loginModel.emailError}
          />
          {!!loginModel.emailError && (
            <FormHelperText error>Please enter a valid email id</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="Password">Password</InputLabel>
          <OutlinedInput
            label="Password"
            id="Password"
            type={loginModel.showPassword ? "text" : "password"}
            size="medium"
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    fieldUpdate("showPassword", !loginModel.showPassword)
                  }
                  edge="end"
                >
                  {loginModel.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(event) =>
              fieldUpdate("userPassword", event.target.value)
            }
            error={loginModel.passwordError}
          />
          {!!loginModel.passwordError && (
            <FormHelperText error>Please enter a valid password</FormHelperText>
          )}
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            color: "#9D9D9D",
            mb: -3,
          }}
        >
          <p
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/forgetpassword")}
          >
            Forgot Password ?{" "}
          </p>
        </Box>
      </Box>
      <Box>
        <Box>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              backgroundColor: "#A03037",
              "&:hover": { backgroundColor: "#A03037" },
            }}
            onClick={validate}
          >
            Login
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1, mb: 1 }}>
          <p>----- OR -----</p>
        </Box>
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{
              backgroundColor: "#4266B2",
              "&:hover": { backgroundColor: "#4266B2" },
            }}
          >
            Facebook
          </Button>
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{
              backgroundColor: "#F5F5F5",
              color: "#0A0102",
              "&:hover": { backgroundColor: "#F5F5F5" },
            }}
          >
            Google
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
