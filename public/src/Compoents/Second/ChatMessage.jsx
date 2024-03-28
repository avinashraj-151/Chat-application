import { Box } from "@mui/material";
import { useRef, useEffect } from "react";
function ChatMessage({ messages, Sender, Reciver }) {
  const scrollRef = useRef(null);
  useEffect(() => {
    // console.log(scrollRef.current);
    // console.log(messages);
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  function formatTimeDifference(createdAt) {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const timeDifferenceInSeconds = Math.floor(
      (currentTime - createdTime) / 1000
    );
    if (timeDifferenceInSeconds < 60) {
      return timeDifferenceInSeconds + " seconds ago";
    } else if (timeDifferenceInSeconds < 3600) {
      const minutes = Math.floor(timeDifferenceInSeconds / 60);
      return minutes + " minutes ago";
    } else if (timeDifferenceInSeconds < 86400) {
      const hours = Math.floor(timeDifferenceInSeconds / 3600);
      return hours + " hours ago";
    } else if (timeDifferenceInSeconds >= 86400) {
      const days = Math.floor(timeDifferenceInSeconds / 86400);
      return days + " days ago";
    } else {
      return "just now";
    }
  }
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
                  className={`max-w-[40%] break-words text-xl p-4 rounded-xl flex flex-col ${
                    message.sender === Sender
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
      {/* <Box></Box> */}
    </div>
  );
}
export default ChatMessage;
