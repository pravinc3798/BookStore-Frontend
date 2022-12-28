import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GetAllBooks } from "../../backend-services/DataServices";
import BookCard from "../book/BookCard";
import Header from "./Header";
import CustomPagination from "./CustomPagination";
import SortAccordion from "./SortAccordion";

export default function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    GetAllBooks()
      .then((response) => {
        console.log(response);
        setBooks(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box>
      <Header />
      <SortAccordion />

      <Box display="flex" justifyContent="center">
        <CustomPagination
          bookData={books}
          pageLimit={3}
          dataLimit={10}
          RenderComponent={BookCard}
        />
      </Box>
    </Box>
  );
}
