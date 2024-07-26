import * as React from "react";
import "./header.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { isMobile } from "react-device-detect";
import logo from "../../assets/images/maurya-infotech-logo.png";
import MenuItems from "./MenuItems";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "55ch",
      },
    },
  },
}));

function Header() {
  // this for menu item
  const navigate = useNavigate();
  const side = "top";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // this code for header
  const [searchQuery, setSearchQuery] = React.useState('');

  const searchHandle = () => {
    if (searchQuery.trim().length) {
      const searchValue = createSearchParams({ searchQ: searchQuery });
      navigate(`/?${searchValue}`);
    }
    setSearchQuery("");
  };

  const selectCourse = () => {};

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className="h-35 bg-gray-600">
          <Toolbar>
            <div className="w-full flex flex-col gap-4 pt-2 pb-2">
              {/* this is for small screen  */}
              <div className="w-full  lg:hidden flex items-center justify-between">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  <Link to={"/"}>
                    <img
                      src={logo}
                      alt="Maurya Infotech"
                      className="h-12 cursor-pointer"
                    />
                  </Link>
                </Typography>
                <div className="flex items-center gap-1">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                      marginRight: 0,
                    }}
                  >
                    <SearchIcon sx={{ fontSize: "25px" }} />
                  </IconButton>

                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                      marginRight: 0,
                    }}
                    onClick={toggleDrawer(side, true)}
                  >
                    <MenuIcon sx={{ fontSize: "30px" }} />
                  </IconButton>
                </div>
              </div>

              {/* this is for large screen  */}

              <div className="w-full hidden lg:block xs:hidden sm:hidden lg:flex items-center justify-between gap-2 lg:px-20">
                <div>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
                  >
                    {isMobile ? (
                      <Link to={"/"}>
                        <img
                          src={logo}
                          alt="Maurya Infotech"
                          className="cursor-pointer"
                          width={"15%"}
                        />
                      </Link>
                    ) : (
                      <Link to={"/"}>
                        <img
                          src={logo}
                          alt="Maurya Infotech"
                          className="h-12 cursor-pointer"
                        />
                      </Link>
                    )}
                  </Typography>
                </div>
                <Search>
                  <div className="flex items-center gap-x-4">
                    <span className="cursor-pointer ml-2" onClick={searchHandle}>
                      <SearchIcon />
                    </span>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </Search>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{
                    display: { xs: "block", md: "none" },
                    marginRight: 0,
                  }}
                  onClick={toggleDrawer(side, true)}
                >
                  <MenuIcon sx={{ fontSize: "35px" }} />
                </IconButton>
                <div>
                  {/* <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={logo} />
                    <AccountCircleIcon sx={{color:"white", fontSize:"40px"}} />
                  </IconButton> */}

                  <button
                    onClick={() => navigate("/sign-up")}
                    className="hidden lg:block sm:block opacity-100 bg-orange-500 text-white hover:bg-orange-600 text-sm px-3 py-[10px] medium:text-base medium:px-6 medium:py-3 font-semibold rounded-md flex gap-2 justify-center items-center font-nunitoSans cursor-pointer !py-[10px]"
                  >
                    Login / Register
                  </button>
                </div>
              </div>

              {/* 2nd header line  */}
              <div className="w-full hidden lg:block sm:hidden lg:flex items-center justify-between gap-x-4 px-20 py-1">
                <select
                  value={""}
                  className="outline-none bg-gray-500 p-1 px-2 rounded-md cursor-pointer font-bold text-md"
                  onChange={selectCourse}
                >
                  <option value="course" className="hidden">
                    Courses
                  </option>
                  <option value="java">Java</option>
                  <option value="react">React</option>
                  <option value="python">Python</option>
                </select>
                <div draggable={false}>
                  <p className="text-lg font-semibold cursor-pointer">
                    Job Portal
                  </p>
                </div>
                <div draggable={false}>
                  <p className="text-lg font-semibold cursor-pointer">
                    Experience Portal
                  </p>
                </div>
                <div draggable={false}>
                  <p className="text-lg font-semibold cursor-pointer">
                    Become an affiliate
                  </p>
                </div>
                <div draggable={false}>
                  <p className="text-lg font-semibold cursor-pointer">
                    Hall of home
                  </p>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <SwipeableDrawer
        anchor={side}
        open={state[side]}
        onClose={toggleDrawer(side, false)}
        onOpen={toggleDrawer(side, true)}
      >
        <MenuItems anchor={side} toggleDrawer={toggleDrawer} />
      </SwipeableDrawer>
    </>
  );
}
export default Header;
