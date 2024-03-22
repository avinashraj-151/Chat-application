import { Avatar, Badge, Box } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationsNoneIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupsIcon from "@mui/icons-material/Groups";
import Avatar_img from "../assert/Avtar_image.png";
import ProfileDrawer from "../ProfileDrawer/ProfileDrawer.jsx";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { useEffect, useState } from "react";
function Header() {
  const [open, setopen] = useState(false);
  const [islogout, setislogout] = useState(false);
  function handelclose() {
    setopen(false);
  }
  function handellogout() {
    // setislogout(true);
    localStorage.clear();
    window.location.reload();
  }
  return (
    <Box>
      <Box
        // #86a3b3
        className="flex w-full justify-between p-5 
        bg-gradient-to-r from-[#11468F] to-[#AAAAAA]"
      >
        <Box>
          <Avatar
            className="w-10 h-10 bg-red-600 cursor-pointer"
            onClick={() => setopen(!open)}
          >
            <img src={Avatar_img} alt=""></img>
          </Avatar>
        </Box>
        <Box className="justify-center flex gap-x-3 items-center">
          <div className="flex gap-5">
            <OndemandVideoIcon className="w-7 h-7 cursor-pointer text-white hover:bg-[#11468F] rounded-xl" />
            <PersonAddIcon className="w-6 h-6 cursor-pointer text-white hover:bg-[#11468F] rounded-xl" />
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneIcon className="w-6 h-6 cursor-pointer text-white hover:bg-[#11468F] rounded-xl" />
            </Badge>
            <LogoutIcon
              className="w-6 h-6 cursor-pointer text-white hover:bg-[#11468F] rounded-xl pt-1 pl-1"
              onClick={handellogout}
            />
          </div>
        </Box>
      </Box>
      {/* <Try close={handelclose} open={open}></Try> */}
      <ProfileDrawer close={handelclose} open={open}></ProfileDrawer>
    </Box>
  );
}
export default Header;
