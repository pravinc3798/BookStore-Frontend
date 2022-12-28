import { Box, FormControl } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SelectLoginOrRegister } from "../../redux/Action";
import { RegisterApi } from "../../backend-services/UserServices";

export default function SignUp() {
  const [signupModel, setSignupModel] = useState({
    fullName: "",
    emailId: "",
    userPassword: "",
    contactNumber: "",
    nameError: false,
    emailError: false,
    passwordError: false,
    numberError: false,
    showPassword: false,
  });

  const fieldUpdate = (field, value) => {
    setSignupModel({
      ...signupModel,
      [field]: value,
    });
  };

  const validate = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    const userPasswordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
    const nameRegex = /^[A-Z]{1,}[a-z \\s A-Z]{2,}$/;
    const numberRegex = /^[0-9]{10}$/;

    let nameTest = nameRegex.test(signupModel.fullName);
    let emailTest = emailRegex.test(signupModel.emailId);
    let passwordTest = userPasswordRegex.test(signupModel.userPassword);
    let numberTest = numberRegex.test(signupModel.contactNumber);

    console.log(nameTest);

    setSignupModel({
      ...signupModel,
      nameError: nameTest ? false : true,
      emailError: emailTest ? false : true,
      passwordError: passwordTest ? false : true,
      numberError: numberTest ? false : true,
    });

    if (nameTest && emailTest && passwordTest && numberTest) {
      RegisterApi(signupModel)
        .then((response) => console.log(response))
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
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: -3 }}>
        <h2
          style={{ color: "#878787", cursor: "pointer" }}
          onClick={() => dispatch(SelectLoginOrRegister("login"))}
        >
          LOGIN
        </h2>
        <h2 style={{ cursor: "pointer" }}>SIGNUP</h2>
      </Box>
      <Box>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="fullname">Full Name</InputLabel>
          <OutlinedInput
            id="full name"
            label="Full Name"
            variant="outlined"
            size="medium"
            fullWidth
            onChange={(event) => fieldUpdate("fullName", event.target.value)}
            error={signupModel.nameError}
          />
          {!!signupModel.nameError && (
            <FormHelperText error>Please enter a valid name</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="email">Email Id</InputLabel>
          <OutlinedInput
            id="email"
            label="Email Id"
            variant="outlined"
            size="medium"
            fullWidth
            onChange={(event) => fieldUpdate("emailId", event.target.value)}
            error={signupModel.emailError}
          />
          {!!signupModel.emailError && (
            <FormHelperText error>Please enter a valid email id</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="Password">Password</InputLabel>
          <OutlinedInput
            label="Password"
            id="Password"
            type={signupModel.showPassword ? "text" : "password"}
            size="medium"
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    fieldUpdate("showPassword", !signupModel.showPassword)
                  }
                  edge="end"
                >
                  {signupModel.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            onChange={(event) =>
              fieldUpdate("userPassword", event.target.value)
            }
            error={signupModel.passwordError}
          />
          {!!signupModel.passwordError && (
            <FormHelperText error>Please enter a password</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="mobile">Mobile Number</InputLabel>
          <OutlinedInput
            id="mobile"
            label="Mobile Number"
            variant="outlined"
            size="medium"
            fullWidth
            onChange={(event) =>
              fieldUpdate("contactNumber", event.target.value)
            }
            error={signupModel.numberError}
          />
          {!!signupModel.numberError && (
            <FormHelperText error>Please enter a number</FormHelperText>
          )}
        </FormControl>
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
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
