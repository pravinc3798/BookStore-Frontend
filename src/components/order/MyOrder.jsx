import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { GetAllOrders } from "../../backend-services/DataServices";
import Header from "../home-page/Header";
import Origin from "../home-page/Origin";
import OrderedBook from "./OrderedBook";

export default function MyOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    GetAllOrders()
      .then((response) => {
        setOrders(response.data.data);
        console.log(response.data.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box>
      <Header />
      <Origin currentPage={"Orders"} />
      <Box display="flex" flexDirection="column" alignItems="center">
        {orders.map((order) => (
          <OrderedBook key={order.orderId} order={order} />
        ))}
      </Box>
    </Box>
  );
}
