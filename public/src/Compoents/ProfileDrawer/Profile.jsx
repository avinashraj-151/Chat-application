import {
  CheckIcon,
  DeleteIcon,
  CloudUploadIcon,
  EditIcon,
  avtar_image,
} from "./ProfileData.js";
import { useContext, useEffect, useState } from "react";
import { Box, Avatar, Typography, TextField } from "@mui/material";
import Try from "../../try/Try.jsx";
import { Context } from "../../Contextapi/Contextapi";
import { edituser_request } from "../../utils/Apiurl.js";
import axios from "axios";
function Profile() {
  const { username, setusername, setSelected, Selected } = useContext(Context);
  const [icon_open, seticon_open] = useState(false);
  const [icon_open1, seticon_open1] = useState(false);
  const [name, setname] = useState(username);
  useEffect(() => {
    setname(username);
  }, [username]);
  const [About, setAbout] = useState(
    "Whether you think you can, or you think you can't – you're right"
  );
  const [file, setfile] = useState(false);
  function handelopen() {
    seticon_open(true);
  }
  async function handelclose() {
    seticon_open(false);
    // setusername(name);
    const response = await axios.post(`${edituser_request}/${username}`, {
      previousname: username,
      newname: name,
    });
    // change the localstorage
    setusername(name);
    let userdetails = localStorage.getItem("Whatsapp_chat");
    userdetails = JSON.parse(userdetails);
    userdetails["username"] = name;
    localStorage.setItem("Whatsapp_chat", JSON.stringify(userdetails));
    if (response.data.status) {
    }
  }
  function handelopen1() {
    seticon_open1(true);
  }
  function handelclose1() {
    seticon_open1(false);
  }
  function handelfileclose() {
    setfile(false);
  }
  function handelfileopen(event) {
    const filex = event.target.files[0];
    if (filex) {
      const reader = new FileReader();
      reader.readAsDataURL(filex);
      reader.onload = (e) => {
        setfile(e.target.result);
      };
    }
  }
  return (
    <Box className="overflow-auto max-h-[calc(100vh-120px)] scrollbar-thin   scrollbar-track-transparent scrollbar-thumb-transparent">
      <Box>
        <Box>
          <Box className="p-7 flex  justify-center items-center">
            <Avatar className="w-40 h-40 cursor-pointer hover:bg-transparent">
              <img src={avtar_image} alt="abcd"></img>
            </Avatar>
          </Box>
          <Box>
            <Box className="flex justify-center items-center text-white gap-5 mb-6">
              <Box>
                <label for="imageInput" className="text-white relative">
                  <CloudUploadIcon className="cursor-pointer" />
                </label>
                <input
                  type="file"
                  id="imageInput"
                  className="hidden"
                  onChange={handelfileopen}
                  multiple
                ></input>
              </Box>
              <DeleteIcon className="cursor-pointer" />
            </Box>
            <Box className="px-7">
              <Typography className="text-black text-pretty mb-3 ">
                Your username
              </Typography>
            </Box>
            <Box className="px-7 flex flex-row">
              {!icon_open && (
                <Typography className="text-white text-pretty text-xl w-[90%]">
                  {username}
                </Typography>
              )}
              {icon_open && (
                <TextField
                  id="standard-basic"
                  variant="standard"
                  className="text-xl w-[90%]"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              )}
              {!icon_open && (
                <EditIcon
                  onClick={handelopen}
                  className="text-white cursor-pointer"
                />
              )}
              {icon_open && (
                <CheckIcon
                  onClick={handelclose}
                  className="text-white cursor-pointer"
                ></CheckIcon>
              )}
            </Box>
          </Box>
          <Box>
            <Box className="px-7 mt-5">
              <Typography className="text-black text-pretty mb-3">
                About
              </Typography>
            </Box>
            <Box className="px-7 flex flex-row">
              {!icon_open1 && (
                <Typography className="text-white text-pretty text-xl w-[90%]">
                  {About}
                </Typography>
              )}
              {icon_open1 && (
                <TextField
                  id="standard-basic"
                  variant="standard"
                  className="text-xl w-[90%]"
                  value={About}
                  onChange={(e) => {
                    if (e.target.value.length <= 120) {
                      setAbout(e.target.value);
                    }
                  }}
                />
              )}
              {!icon_open1 && (
                <EditIcon
                  onClick={handelopen1}
                  className="text-white cursor-pointer"
                />
              )}
              {icon_open1 && (
                <CheckIcon
                  onClick={handelclose1}
                  className="text-white cursor-pointer"
                ></CheckIcon>
              )}
            </Box>
          </Box>
        </Box>
        <Try open={file} close={handelfileclose} avtar_image={file}></Try>
      </Box>
    </Box>
  );
}
export default Profile;
