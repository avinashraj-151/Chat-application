import { Avatar, Box, Typography } from "@mui/material";
import Avatar_img from "../assert/Avtar_image.png";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function ChatHeader({ Selected }) {
  return (
    <Box>
      <Box className="flex w-full justify-between p-5 bg-gradient-to-r from-[#AAAAAA] to-[#11468F]">
        <Box className="flex items-center justify-center gap-3">
          <Avatar className="w-10 h-10 bg-red-600 cursor-pointer">
            <img src={Avatar_img} alt=""></img>
          </Avatar>
          <Typography className="text-[#FFFFFF] font-bold text-xl">
            {Selected}
          </Typography>
        </Box>
        <Box>
          <div className="flex gap-4">
            <MoreVertIcon className="w-8 h-8 cursor-pointer text-white" />
          </div>
        </Box>
      </Box>
    </Box>
  );
}
export default ChatHeader;
