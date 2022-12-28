import axios from "axios";

let header = {
  headers: {
    Authorization: "Bearer" + " " + localStorage.getItem("Token"),
  },
};

export const LoginApi = (loginModel) => {
  let response = axios.post(
    `http://localhost:38281/api/User/Login?emailId=${loginModel.emailId}&userPassword=${loginModel.userPassword}`,
    loginModel
  );
  return response;
};

export const RegisterApi = (signupModel) => {
  let response = axios.post(
    "http://localhost:38281/api/User/Register",
    signupModel
  );
  return response;
};

export const ForgetApi = (emailId) => {
  let response = axios.post(
    `http://localhost:38281/api/User/ForgetPassword?email=${emailId}`,
    emailId
  );
  return response;
};

export const ResetApi = (passwordModel) => {
  let response = axios.put(
    `http://localhost:38281/api/User/ResetPassword?password=${passwordModel.userPassword}&confirmPassword=${passwordModel.confirmPassword}`,
    passwordModel,
    header
  );
  return response;
};
