import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { GetAddress } from "../../backend-services/DataServices";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function Address(props) {
  const [address, setAddress] = useState([]);
  const [type, setType] = useState(0);

  useEffect(() => {
    GetAddress()
      .then((response) => setAddress(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        marginLeft: "2vw",
        marginTop: "1rem",
        width:'60%'
      }}
    >
      <h3>Customer Details</h3>
      <div style={{ display: "flex", gap:'1vw'}}>
          <TextField
            label="Full Name"
            defaultValue={props.user.fullName}
            disabled
            fullWidth
            />
          <TextField
            label="Mobile Number"
            defaultValue={props.user.contactNumber}
            disabled
            fullWidth
          />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          multiline
          fullWidth
          label="Address"
          rows={2}
          value={(address[type] && address[type].mainAddress) || ""}
          variant="outlined"
        />
        <div style={{ display: "flex", gap: "1vw" }}>
          <TextField
            label="City / Town"
            fullWidth
            value={(address[type] && address[type].city) || ""}
            variant="outlined"
          />
          <TextField
            label="State"
            fullWidth
            value={(address[type] && address[type].state) || ""}
            variant="outlined"
          />
        </div>
        <div style={{ margin: "1rem 0 0rem 1rem" }}>
          <FormLabel
            sx={{ fontSize: "16px", fontWeight: "bold", color: "black" }}
          >
            Type
          </FormLabel>
          <RadioGroup row defaultValue="1">
            <FormControlLabel
              value="1"
              onClick={() => setType(0)}
              control={<Radio color="error" />}
              label="Home"
            />
            <FormControlLabel
              value="2"
              onClick={() => setType(1)}
              control={<Radio color="error" />}
              label="Office"
            />
            <FormControlLabel
              value="3"
              onClick={() => setType(2)}
              control={<Radio color="error" />}
              label="Other"
            />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
