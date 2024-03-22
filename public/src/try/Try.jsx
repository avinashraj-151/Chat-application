import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography, Drawer } from "@mui/material";
import Profile from "./Profile";
export default function ImagePrievewDrawer({ open, close, avtar_image }) {
  return (
    <div>
      <Drawer variant="persistent" open={open} onClose={close} hideBackdrop>
        <Box className="w-full h-full bg-gradient-to-r from-[#11468F] to-[#AAAAAA]">
          <Box className="w-[37vw]">
            <Box className="w-full h-full flex flex-col">
              <Box className="flex p-7  bg-gradient-to-r from-[#AAAAAA] to-[#11468F] justify-between">
                <Box className="flex gap-8">
                  <ArrowBackIcon
                    className="text-white cursor-pointer"
                    onClick={close}
                  ></ArrowBackIcon>
                  <Typography className="text-xl text-white font-bold text-center">
                    Image preview
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="">
              <Profile avtar_image={avtar_image} close={close}></Profile>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
