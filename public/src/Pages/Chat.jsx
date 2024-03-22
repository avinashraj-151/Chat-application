import axios from "axios";
import ChatHeader from "../Compoents/Second/ChatHeader.jsx";
import ChatInput from "../Compoents/Second/ChatInput.jsx";
import ChatMessage from "../Compoents/Second/ChatMessage.jsx";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Addmessage_request, Getmessage_request } from "../utils/Apiurl.js";
function Chat({ Selected, username, socket }) {
  const scrollRef = useRef();
  const [messages, setallmessages] = useState([]);
  const [arrival, setarrival] = useState(undefined);
  async function handelallmessages(message) {
    const response = await axios.post(Addmessage_request, {
      msg: message,
      sender: username,
      receiver: Selected,
    });
    // console.log(response.data);
    socket.current.emit("add-msg", {
      msg: message,
      sender: username,
      receiver: Selected,
    });
    setallmessages([
      ...messages,
      {
        msg: message,
        receiver: Selected,
        sender: username,
      },
    ]);
  }
  useEffect(() => {
    // get all the messages
    async function getallmessages() {
      const response = await axios.post(Getmessage_request, {
        receiver: Selected,
        sender: username,
      });
      // console.log(response.data.result);
      setallmessages(response.data.result);
    }
    getallmessages();
  }, [Selected]);
  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-reciver", (msg) => {
        // console.log(messages);
        // setallmessages(]);
        setarrival({
          msg: msg,
          receiver: username,
          sender: Selected,
        });
      });
    }
  }, []);
  useEffect(() => {
    if (arrival) {
      setallmessages([...messages, arrival]);
    }
  }, [arrival]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box className="w-full h-full bg-[#1E5095]">
      <Box className="flex flex-col h-full">
        <Box className="h-[15%]">
          <ChatHeader Selected={Selected}></ChatHeader>
        </Box>
        {/* 11348F */}
        <Box className="h-[73%] ">
          <ChatMessage
            messages={messages}
            Reciver={Selected}
            Sender={username}
          />
        </Box>
        <Box className="h-[15%] ">
          <ChatInput setmessage={handelallmessages}></ChatInput>
        </Box>
      </Box>
    </Box>
  );
}
export default Chat;
