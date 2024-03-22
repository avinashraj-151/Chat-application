import { Box, Typography, Button, Snackbar, Alert } from "@mui/material";
import loginimg from "../Compoents/assert/loginpage3.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Register_request } from "../utils/Apiurl";
import { Link, useNavigate } from "react-router-dom";
function Registration() {
  const navigate = useNavigate();
  const [userdetail, Setuserdetail] = useState({
    username: "",
    password: "",
    email: "",
    ConfirmPassword: "",
  });
  useEffect(() => {
    if (localStorage.getItem("Whatsapp_chat")) {
      navigate("/");
    }
  });
  const [validationerror, setvalidationerror] = useState({
    open: false,
    error: "",
  });
  function handelClosevalidation() {
    setvalidationerror({
      ...validationerror,
      open: false,
      // error: "",
    });
  }
  function handelValidation() {
    const { username, password, ConfirmPassword } = userdetail;
    if (username.trim() === "") {
      setvalidationerror({ open: true, error: "Username is required" });
      return false;
    } else if (username.trim().length <= 3) {
      setvalidationerror({
        open: true,
        error: "Username must be more than 3 characters",
      });
      return false;
    } else if (password.trim() === "") {
      setvalidationerror({ open: true, error: "Password is required" });
      return false;
    } else if (password !== ConfirmPassword) {
      setvalidationerror({ open: true, error: "Password does not match" });
      return false;
    } else if (password.length < 8) {
      setvalidationerror({
        open: true,
        error: "Password must be more than 8 characters",
      });
      return false;
    }
    return true;
  }
  function handleChange(e) {
    Setuserdetail({ ...userdetail, [e.target.name]: e.target.value });
  }
  async function handelSumbit(e) {
    e.preventDefault();
    if (handelValidation()) {
      // console.log(userdetail);
      const user_data = {
        username: userdetail.username,
        password: userdetail.password,
        email: userdetail.email,
      };
      const { data } = await axios.post(Register_request, user_data);
      // console.log(data);
      if (!data.status) {
        setvalidationerror({ open: true, error: data.msg });
      } else {
        //Whatsapp Chat
        localStorage.setItem("Whatsapp_chat", JSON.stringify(user_data));
        navigate("/");
      }
    }
  }
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-gradient-to-r from-[#11468F] to-[#AAAAAA]">
      {/* 11468F 11468F  AAAAAA*/}
      <div className="flex md:flex-row flex-col shadow-xl w-[85%] md:h-[80%] h-[90%]">
        <Box className="md:w-1/2 w-full hidden md:flex">
          <img src={loginimg} alt="loginpage" className="" />
        </Box>
        <Box className="md:w-1/2 w-full flex flex-col justify-center items-center bg-green">
          <form onSubmit={handelSumbit}>
            <Box className="flex flex-col p-2">
              <Typography className="text-[rgb(36,36,36)] text-2xl font-bold text-center">
                Create a new account
              </Typography>
              <Typography className="text-center mt-3">
                Let’s get you all set up to access your personal account
              </Typography>
            </Box>
            <Box className="flex flex-col gap-2 p-2">
              <input
                type="text"
                placeholder="username"
                className="p-3 rounded-xl focus:outline-none text-black border-[#888BF4] border-2 bg-[#F3F5F7] placeholder:text-[#BDBDBD]"
                required
                value={userdetail.username}
                onChange={handleChange}
                name="username"
              ></input>
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 rounded-xl focus:outline-none text-black border-[#888BF4] border-2 bg-[#F3F5F7] placeholder:text-[#BDBDBD]"
                required
                value={userdetail.email}
                onChange={handleChange}
                name="email"
              ></input>
              <input
                type="password"
                placeholder="Password"
                className="p-3 rounded-xl focus:outline-none text-black border-[#888BF4] border-2 bg-[#F3F5F7] placeholder:text-[#BDBDBD]"
                required
                value={userdetail.password}
                onChange={handleChange}
                name="password"
              ></input>
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-3 rounded-xl focus:outline-none text-black border-[#888BF4] border-2 bg-[#F3F5F7] placeholder:text-[#BDBDBD]"
                onChange={handleChange}
                name="ConfirmPassword"
                required
                value={userdetail.ConfirmPassword}
              ></input>
            </Box>
            {/* 888BF4  */}
            <div className="flex flex-col justify-center justify-items-center p-2">
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#888BF4] to-[#5151C6] text-white p-2 rounded-xl font-semibold"
              >
                Sing up
              </Button>
              <div className="p-2">
                <Typography className="text-[#242424] text-sm text-center p-2">
                  Already have an account?
                  <span className="ml-3 font-bold text-pretty uppercase cursor-pointer">
                    <Link to={"/login"}>Login</Link>
                  </span>
                </Typography>
              </div>
            </div>
          </form>
        </Box>
      </div>
      {/* 11468F 11468F  AAAAAA*/}
      {/*  */}
      <Snackbar
        open={validationerror.open}
        autoHideDuration={2000}
        onClose={handelClosevalidation}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        TransitionComponent="Fade"
      >
        <Alert
          severity="error"
          variant="filled"
          onClose={handelClosevalidation}
          // F73B28   F78B28
          className="bg-gradient-to-r from-[#F73B28] from-75% to-[#F73B28] to-100% text-xs"
        >
          {validationerror.error}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Registration;
