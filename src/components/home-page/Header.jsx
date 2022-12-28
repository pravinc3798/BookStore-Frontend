import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Popper from "@mui/material/Popper";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { InputBase } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import icon from "./../../images/BookLogo.png";
import { Box } from "@mui/system";

export default function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Box
      sx={{
        background: "#A03037",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <img
        src={icon}
        alt="Book Logo"
        style={{
          width: "28px",
          height: "23px",
          marginLeft: "15vw",
          cursor: "pointer",
        }}
        onClick={() => navigate("/home")}
      />
      <h3
        style={{ fontWeight: "500", color: "white", cursor: "pointer" }}
        onClick={() => navigate("/home")}
      >
        BookStore
      </h3>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "35vw",
          backgroundColor: "#f1f3f4",
          borderRadius: "4px",
          ml: "5vw",
        }}
      >
        <SearchIcon sx={{ color: "#9D9D9D" }} />
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
      </Paper>

      <Box onClick={handleClick} ml="11vw">
        <PersonOutlineIcon
          fontSize="small"
          sx={{ color: "white", cursor: "pointer", ml: 0.8 }}
        />
        <p
          style={{
            margin: "0",
            fontSize: "12px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Profile
        </p>
      </Box>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          style={{
            padding: "10px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            boxShadow: "1px 1px 6px 1px rgba(0,0,0,0.3)",
            borderRadius: "3px",
            marginTop: "0.75rem",
          }}
        >
          {[
            {name: 'Profile', icon: <AccountCircleIcon sx={{ color: "#878787" }}/>},
            { name: "Home", icon: <HomeIcon sx={{ color: "#878787" }} /> },
            {
              name: "Wishlist",
              icon: <FavoriteIcon sx={{ color: "#878787" }} />,
            },
            {
              name: "My Orders",
              icon: <MarkunreadMailboxOutlinedIcon sx={{ color: "#878787" }} />,
            },
            {
              name: "LogOut",
              icon: <LogoutOutlinedIcon sx={{ color: "#878787" }} />,
            },
          ].map((item, index) => {
            return (
              <Box
                key={index}
                display="flex"
                gap="0.3rem"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/${item.name}`);
                  handleClick();
                }}
              >
                {item.icon}
                <h5
                  style={{
                    margin: "5px",
                    fontWeight: "500",
                  }}
                >
                  {item.name}
                </h5>
              </Box>
            );
          })}
        </Box>
      </Popper>
      <Box ml="2vw" mt="2px" onClick={() => navigate("/Cart")}>
        <ShoppingCartOutlinedIcon
          fontSize="small"
          sx={{ color: "white", cursor: "pointer" }}
        />
        <p
          style={{
            margin: "0",
            fontSize: "12px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Cart
        </p>
      </Box>
    </Box>
  );
}
