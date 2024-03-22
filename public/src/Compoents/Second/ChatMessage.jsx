import { Box } from "@mui/material";
import { useRef, useEffect } from "react";
function ChatMessage({ messages, Sender, Reciver }) {
  const scrollRef = useRef(null);
  useEffect(() => {
    // console.log(scrollRef.current);
    // console.log(messages);
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="overflow-auto w-full h-full p-5 scrollbar-thin scrollbar-thumb-sky-700  scrollbar-track-transparent  px-8 py-4">
      <Box className="flex flex-col gap-4 text-white text-xl">
        {messages.map((message, index) => {
          return (
            <div ref={scrollRef}>
              <div
                className={` flex ${
                  message.sender === Sender ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[40%] break-words text-xl p-4 rounded-xl ${
                    message.sender === Sender
                      ? "bg-white text-black"
                      : "bg-[#11348F]"
                  }`}
                >
                  <p>{message.msg}</p>
                  {/* <img
                    src="https://plus.unsplash.com/premium_photo-1676955434746-4203c17d61b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                    alt="userimage"
                    className="w-20 h-20"
                  ></img> */}
                </div>
              </div>
            </div>
          );
        })}
      </Box>
      {/* <Box></Box> */}
    </div>
  );
}
export default ChatMessage;
