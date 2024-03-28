import { Box } from "@mui/material";
import Header from "../Compoents/First/Header.jsx";
import SingleChat from "../Compoents/First/SingleChat.jsx";
import { io } from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import Chat from "./Chat.jsx";
import axios from "axios";
import { Alluser_request, host } from "../utils/Apiurl.js";
import Welcome from "../Compoents/Welcome.jsx";
import { useNavigate } from "react-router-dom";
function ChatContainer() {
  const navigate = useNavigate();
  const socket = useRef();
  const [Selected, setSelected] = useState(undefined);
  const [Allfriend, SetAllfriend] = useState([]);
  const [username, setusername] = useState(undefined);
  function handelopen(username) {
    setSelected(username);
  }
  useEffect(() => {
    if (localStorage.getItem("Whatsapp_chat")) {
      const Get_username = JSON.parse(localStorage.getItem("Whatsapp_chat"));
      if (Get_username != null) {
        setusername(Get_username["username"]);
      }
    } else {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    const All_usergetting = async function () {
      try {
        if (username) {
          // console.log("ab friend fetch karanga", username);
          const response = await axios.get(`${Alluser_request}/${username}`);
          if (response.data.status === true) {
            // console.log(response.data.userdata);
            SetAllfriend(response.data.userdata);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    All_usergetting();
  }, [username]);
  useEffect(() => {
    if (username) {
      socket.current = io(host);
      socket.current.emit("add-user", username);
    }
  }, [username]);
  return (
    <Box className="h-screen w-screen flex">
      <Box className="w-[40%] flex flex-col">
        <Header></Header>
        <Box className="overflow-auto bg-gradient-to-r from-[#EEEEEE] to-[#11468F] flex flex-col scrollbar-thin scrollbar-thumb-sky-700  scrollbar-track-transparent w-full h-full">
          {Allfriend.map((data, index) => {
            // console.log(data);
            return (
              <SingleChat
                key={index}
                username={data.username}
                Selected={Selected}
                handelopen={handelopen}
                socket={socket}
              ></SingleChat>
            );
          })}
        </Box>
      </Box>
      <Box className="w-[70%] ">
        {Selected === undefined ? (
          <Welcome username={username}></Welcome>
        ) : (
          <Chat Selected={Selected} username={username} socket={socket}></Chat>
        )}
      </Box>
    </Box>
  );
}
export default ChatContainer;
