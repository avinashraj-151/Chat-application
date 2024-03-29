import {
  Box,
  Divider,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useContext, useEffect, useState } from "react";
import Avtar from "../Avtar";
import Avatar_img from "../assert/Avtar_image.png";
import { Context } from "../../Contextapi/Contextapi";
function SingleChat({ username, handelopen }) {
  const [open, setOpen] = useState(false);
  const { socket, Selected } = useContext(Context);
  const [onlineuser, setonlineuser] = useState([]);
  function handelDraweropen(event) {
    setOpen(event.currentTarget);
  }
  function handelDrawerclose() {
    setOpen(false);
  }
  useEffect(() => {
    if (socket.current)
      socket.current.on("onlineuser", (data) => {
        setonlineuser(data);
      });
  }, [socket]);
  return (
    <>
      <Box
        className={`flex justify-items-start gap-3 p-4 cursor-pointer ${
          Selected === username
            ? "bg-[#11468F] "
            : "hover:bg-gradient-to-r from-[#AAAAAA] to-[#11468F]"
        }`}
        onClick={() => handelopen(username)}
      >
        {/* avatar */}
        <Box className="flex w-full h-full gap-3 items-center">
          <Box className="w-1/6">
            <Avtar
              Avatar_img={Avatar_img}
              Selected={Selected}
              username={username}
              onlineuser={onlineuser}
            ></Avtar>
          </Box>
          <Box className="p-2 w-full rounded-xl flex justify-between">
            <Typography className="text-pretty font-semibold text-black ">
              {/* {" UserName " + "" + index} */}
              {username}
            </Typography>
            <IconButton onClick={handelDraweropen} className="">
              <MoreHorizIcon className="w-10 h-5 text-white" />
            </IconButton>
            <Menu anchorEl={open} open={open} onClose={handelDrawerclose}>
              <MenuItem>Delete Chat</MenuItem>
              <MenuItem>Pin Chat</MenuItem>
              <MenuItem>Unpin Chat</MenuItem>
            </Menu>
            {/* <Poptry></Poptry> */}
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
export default SingleChat;
