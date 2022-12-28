import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

export default function CustomPagination({
  bookData,
  pageLimit,
  RenderComponent,
  dataLimit,
}) {
  const [totalPages] = useState(Math.round(bookData.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function nextPage() {
    setCurrentPage((page) => page + 1);
  }

  function previousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return bookData.slice(startIndex, endIndex);
  };

  const getPaginatedGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="2rem">
      <Box
        display="flex"
        flexWrap="wrap"
        ml='4vw'
        gap="35px"
        width="80vw"
      >
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={d.bookId} bookData={d} />
        ))}
      </Box>

      <Box display="flex" gap="1rem">
        <Button
          onClick={previousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          variant="text"
          sx={{ border: "1px solid #E2E2E2", borderRadius: 50 }}
        >
          &lt;
        </Button>

        {getPaginatedGroup().map((item, index) => (
          <Button
            key={index}
            onClick={changePage}
            variant={currentPage === item ? "contained" : "outlined"}
            color="error"
            sx={
              currentPage === item
                ? {
                    backgroundColor: "#8F2B2F",
                    "&:hover": { backgroundColor: "#A03037" },
                  }
                : {
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "#white" },
                    border: "none",
                  }
            }
          >
            <span>{item}</span>
          </Button>
        ))}

        <Button
          onClick={nextPage}
          className={`next ${currentPage === totalPages ? "disabled" : ""}`}
          variant="text"
          sx={{ border: "1px solid #E2E2E2", borderRadius: 50 }}
        >
          &gt;
        </Button>
      </Box>
    </Box>
  );
}
