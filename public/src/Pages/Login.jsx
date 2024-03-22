import { Box, Typography, Button, Alert, Snackbar } from "@mui/material";
import loginimg from "../Compoents/assert/loginpage1.png";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Login_request } from "../utils/Apiurl";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const [validationerror, setvalidationerror] = useState({
    open: false,
    error: "",
  });
  const [userdetail, setuserdetail] = useState({
    username: "",
    password: "",
  });
  function handelClosevalidation() {
    setvalidationerror({
      ...validationerror,
      open: false,
      // error: "",
    });
  }
  function handelChange(event) {
    setuserdetail({
      ...userdetail,
      [event.target.name]: event.target.value,
    });
  }
  useEffect(() => {
    if (localStorage.getItem("Whatsapp_chat")) {
      navigate("/");
    }
  }, []);
  async function handelSubmit(e) {
    e.preventDefault();
    if (handelCheckValidation()) {
      //to hum username check karanga ki yahi user name hai na ki dusra hai request send karna padega backend mai
      const response = await axios.post(Login_request, userdetail);
      // console.log(response);
      if (!response.data.status) {
        // console.log("kuch to barbad hai daiya");
        setvalidationerror({
          open: true,
          error: response.data.msg,
        });
      } else {
        localStorage.setItem("Whatsapp_chat", JSON.stringify(userdetail));
        navigate("/");
      }
    }
  }
  function handelCheckValidation() {
    // console.log(userdetail);
    if (
      userdetail.username.trim() === "" &&
      userdetail.password.trim() === ""
    ) {
      setvalidationerror({
        open: true,
        error: "username and password are required",
      });
      return false;
    } else if (userdetail.username.trim() === "") {
      setvalidationerror({
        open: true,
        error: "username is required",
      });
      return false;
    } else if (userdetail.password.trim() === "") {
      setvalidationerror({
        open: true,
        error: "password is required",
      });
      return false;
    }
    return true;
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-gradient-to-r from-[#11468F] to-[#AAAAAA]">
      {/* 11468F 11468F  AAAAAA*/}
      <div className="flex md:flex-row flex-col shadow-xl w-[85%] md:h-[80%] h-[90%]">
        <Box className="md:w-1/2 w-full hidden md:flex">
          <img src={loginimg} alt="loginpage" className="" />
        </Box>
        <Box className="md:w-1/2 w-full flex flex-col justify-center items-center bg-green">
          <form className="">
            <Box className="flex flex-col p-2">
              <Typography className="text-[rgb(36,36,36)] text-2xl font-bold text-center">
                Login
              </Typography>
              <Typography className="text-center mt-3">
                Login to access your Personal account
              </Typography>
            </Box>
            <Box className="flex flex-col gap-2 p-2">
              <input
                type="text"
                placeholder="username"
                className="p-3 rounded-xl focus:outline-none text-black border-[#888BF4] border-2 bg-[#F3F5F7] placeholder:text-[#BDBDBD]"
                value={userdetail.username}
                name="username"
                onChange={handelChange}
                required
              ></input>
              <input
                type="password"
                placeholder="Password"
                className="p-3 rounded-xl focus:outline-none text-black border-[#888BF4] border-2 bg-[#F3F5F7] placeholder:text-[#BDBDBD]"
                value={userdetail.password}
                name="password"
                required
                onChange={handelChange}
              ></input>
            </Box>
            {/* 888BF4  */}
            <div className="flex flex-col justify-center justify-items-center p-2">
              <Button
                className="bg-gradient-to-r from-[#888BF4] to-[#5151C6] text-white p-2 rounded-xl font-semibold"
                onClick={handelSubmit}
              >
                Login
              </Button>
              <div className="p-2">
                <Typography className="text-[#242424] text-sm text-center p-2">
                  Don’t have an account?
                  <span className="ml-3 font-bold text-pretty uppercase cursor-pointer">
                    <Link to={"/register"}>Sign up</Link>
                  </span>
                </Typography>
              </div>
            </div>
          </form>
        </Box>
      </div>
      <Snackbar
        open={validationerror.open}
        autoHideDuration={2000}
        onClose={handelClosevalidation}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        // TransitionComponent="Fade"
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
export default Login;
