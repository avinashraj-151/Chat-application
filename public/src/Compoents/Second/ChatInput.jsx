import { Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";
function ChatInput({ setmessage }) {
  const [currentmessage, setcurrentmessage] = useState(undefined);
  function handelchange(e) {
    setcurrentmessage(e.target.value);
  }
  function handelmessage(e) {
    e.preventDefault();
    if (currentmessage && currentmessage.trim() !== "") {
      setmessage(currentmessage);
    }
    setcurrentmessage("");
  }
  return (
    <Box className="p-2">
      {/*  */}
      <Box>
        <form>
          <div className="bg-gradient-to-r from-[#11468F] from-80% to-[#11468F] to-10% flex gap-1 justify-center items-center rounded-xl ">
            <EmojiEmotionsIcon className="w-[5%] text-white" />
            <input
              type="text"
              placeholder="Enter Your Message"
              className="focus:outline-none bg-transparent text-white
              p-4 w-[85%]"
              value={currentmessage}
              onChange={handelchange}
            ></input>
            <button type="submit" onClick={handelmessage}>
              <SendIcon className="text-white cursor-pointer" />
            </button>
          </div>
        </form>
      </Box>
    </Box>
  );
}
export default ChatInput;
