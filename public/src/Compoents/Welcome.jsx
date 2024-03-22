import { Box, Typography } from "@mui/material";
import image_logo from "../Compoents/assert/robot.gif";
function Welcome({ username }) {
  return (
    <Box className="w-full h-full bg-[#1E5095]">
      <Box className=" w-full h-full flex justify-center items-center flex-col">
        <Box>
          <img src={image_logo} alt="" className="h-80"></img>
        </Box>
        <Typography className="text-4xl font-bold text-white text-center">
          Welcome <span className=""> {username}</span>
        </Typography>
        <Typography className="text-yellow-200 text-xl text-center" y>
          Find New Friends with Our Chat App
        </Typography>
      </Box>
    </Box>
  );
}
export default Welcome;
