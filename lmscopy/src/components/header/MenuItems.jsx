import React from "react";
import "./header.css";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/images/maurya-infotech-logo.png";

const MenuItems = ({ anchor, toggleDrawer }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 500,
        height: anchor === "top" || anchor === "bottom" ? "100vh" : 500,
        padding: "0px 0px 25px 0px",
        backgroundColor: "black !important",
        overflowX: "hidden",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <div className="m-2 flex items-center justify-between">
        <img
          src={logo}
          alt="Maurya Infotech"
          className="cursor-pointer h-14"
          onClick={()=>{
            navigate('/')
          }}
        />
        <span onClick={toggleDrawer(anchor, false)}>
          <CloseIcon
            color="error"
            sx={{
              cursor: "pointer",
              boxShadow: "1px 1px 10px gray, -1px -1px 10px gray",
            }}
            className="rounded-full"
          />
        </span>
      </div>
      <Divider />

      <div className="m-2 flex items-center justify-center">
        <button
          onClick={() => navigate("/sign-up")}
          className="opacity-100 bg-orange-500 text-white hover:bg-orange-600 text-sm px-3 py-[10px] medium:text-base medium:px-6 medium:py-3 font-semibold rounded-md flex gap-2 justify-center items-center font-nunitoSans cursor-pointer !py-[10px]"
        >
          Login / Register
        </button>
      </div>
      <Divider />
      <List className="mt-2">
        <ListItem
          disablePadding
          className="bg-gray-800 text-white hover:bg-gray-900 mx-2 my-1 rounded-md"
          onClick={toggleDrawer(anchor, false)}
        >
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: "#6D838D" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          className="bg-gray-800 text-white hover:bg-gray-900 mx-2 rounded-md my-1"
          onClick={toggleDrawer(anchor, false)}
        >
          <ListItemButton
            onClick={() => {
              navigate("/about-us");
            }}
          >
            <ListItemIcon>
              <InfoIcon sx={{ color: "#6D838D" }} />
            </ListItemIcon>
            <ListItemText primary="About us" />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          className="bg-gray-800 text-white hover:bg-gray-900 mx-2 rounded-md my-1"
          onClick={toggleDrawer(anchor, false)}
        >
          <ListItemButton
            onClick={() => {
              toggleDrawer(anchor, false);
              navigate("/contact-us");
            }}
          >
            <ListItemIcon>
              <CallIcon sx={{ color: "#6D838D" }} />
            </ListItemIcon>
            <ListItemText primary="Contact us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
export default MenuItems;
