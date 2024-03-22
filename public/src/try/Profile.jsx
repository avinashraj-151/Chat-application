import { Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { io } from "socket.io-client";
import { useRef } from "react";
function Profile({ avtar_image, close }) {
  const socket = useRef();
  function handelImage() {
    console.log(avtar_image);
    close();
  }
  return (
    <Box className="overflow-auto max-h-[calc(100vh-120px)] scrollbar-thin   scrollbar-track-transparent scrollbar-thumb-sky-700  ">
      <Box>
        <Box>
          <Box className="p-7 flex  justify-center items-center">
            <img src={avtar_image} alt="profile_preview"></img>
          </Box>
        </Box>
        <Box className="flex justify-end justify-items-end px-10">
          <SendIcon
            className="w-10 h-10 text-white cursor-pointer"
            onClick={handelImage}
          ></SendIcon>
        </Box>
      </Box>
    </Box>
  );
}
export default Profile;
