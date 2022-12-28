import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Origin(props) {
  const navigate = useNavigate();
  return (
    <Box display="flex" gap="3px" ml="15vw">
      <h4
        style={{ color: "#a4a3a3", fontWeight: "500", cursor: "pointer" }}
        onClick={() => navigate("/home")}
      >
        Home /
      </h4>
      <h4 style={{ fontWeight: "500" }}>{props.currentPage}</h4>
    </Box>
  );
}
