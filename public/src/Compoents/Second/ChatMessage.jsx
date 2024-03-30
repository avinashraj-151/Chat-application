import { Box } from "@mui/material";
import { useRef, useEffect, useContext } from "react";
import { Context } from "../../Contextapi/Contextapi";
function ChatMessage() {
  const { username, messages, setallmessages, Selected } = useContext(Context);
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function formatTimeDifference(createdAt) {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    let hours, minutes;
    hours = createdTime.getHours();
    minutes = createdTime.getMinutes();
    if (hours <= 12 || hours <= 24) {
      minutes = `${minutes >= 9 ? "" : "0"}${minutes}`;
      return `${hours <= 12 ? hours : hours - 12}:${minutes} ${
        hours <= 12 ? "AM" : "PM"
      }`;
    } else {
      hours = currentTime.getHours();
      minutes = `${
        currentTime.getMinutes() >= 9 ? "" : "0"
      }${currentTime.getMinutes()}`;
      return `${hours <= 12 ? hours : hours - 12}:${minutes} ${
        hours <= 12 ? "AM" : "PM"
      }`;
    }
  }
  return (
    <div className="overflow-auto w-full h-full p-5 scrollbar-thin scrollbar-thumb-sky-700  scrollbar-track-transparent  px-8 py-4">
      <Box className="flex flex-col gap-4 text-white text-xl">
        {messages.map((message, index) => {
          return (
            <div ref={scrollRef} key={index}>
              <div
                className={` flex ${
                  message.sender === username ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[40%] break-words text-xl p-4 rounded-xl flex flex-col ${
                    message.sender === username
                      ? "bg-white text-black"
                      : "bg-[#11348F]"
                  } gap-1`}
                >
                  <p>{message.msg}</p>
                  <div className="text-xs text-end">
                    <p className=""> {formatTimeDifference(message.time)}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Box>
    </div>
  );
}
export default ChatMessage;
