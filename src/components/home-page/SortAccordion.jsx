import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Box } from "@mui/system";

export default function SortAccordion() {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      gap="30vw"
    >
      <h2>Books</h2>
      <Box>
        <select style={{ border: "none", fontSize: "1rem" }}>
          <option value="Sort by relevance">Sort by relevance</option>
          <option value="Alphabetically : A-Z">Alphabetically : A-Z</option>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
        </select>
      </Box>
    </Box>
  );
}
