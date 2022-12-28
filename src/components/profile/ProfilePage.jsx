import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Header from "../home-page/Header";
import Origin from "../home-page/Origin";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Label } from "@mui/icons-material";
import { GetAddress, GetUser } from "../../backend-services/DataServices";

export default function ProfilePage() {
  const [edit, setEdit] = useState({
    editUser: false,
    editAddress: false,
  });

  const [user, setUser] = useState([]);
  const [address, setAddress] = useState([]);
  const [type, setType] = useState(0);

  useEffect(() => {
    GetAddress()
      .then((response) => setAddress(response.data.data))
      .catch((error) => console.log(error));

    GetUser()
      .then((response) => setUser(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box>
      <Header />
      <Origin currentPage="Profile" />

      <Box display="flex" flexDirection="column" width="30vw" ml="15vw">
        <Box display="flex" gap="2rem" alignItems="center">
          <h2>Profile Details</h2>
          {edit.editUser ? (
            <>
              <h5
                style={{ color: "#A03037", cursor: "pointer" }}
                onClick={() => setEdit({ ...edit, editUser: false })}
              >
                Cancel
              </h5>
              <Button variant="contained" size="small" sx={{ ml: "3vw" }}>
                Save
              </Button>
            </>
          ) : (
            <h5
              style={{ color: "#A03037", cursor: "pointer" }}
              onClick={() => setEdit({ ...edit, editUser: true })}
            >
              Edit
            </h5>
          )}
        </Box>
        <fieldset
          disabled={edit.editUser ? false : true}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            border: "none",
          }}
        >
          <TextField
            label="Full Name"
            value={user.fullName || ''}
            variant="outlined"
            sx={!edit.editUser && { backgroundColor: "#F5F5F5" }}
          />
          <TextField
            label="Email"
            value={user.emailId || ''}
            variant="outlined"
            sx={!edit.editUser && { backgroundColor: "#F5F5F5" }}
          />
          <TextField
            label="Contact Number"
            value={user.contactNumber || ''}
            variant="outlined"
            sx={!edit.editUser && { backgroundColor: "#F5F5F5" }}
          />
        </fieldset>

        <Box>
          <Box display="flex" gap="2rem" alignItems="center">
            <h2>Address Details</h2>
            {edit.editAddress ? (
              <>
                <h5
                  style={{ color: "#A03037", cursor: "pointer" }}
                  onClick={() => setEdit({ ...edit, editAddress: false })}
                >
                  Cancel
                </h5>
                <Button variant="contained" size="small" sx={{ ml: "3vw" }}>
                  Save
                </Button>
              </>
            ) : (
              <h5
                style={{ color: "#A03037", cursor: "pointer" }}
                onClick={() => setEdit({ ...edit, editAddress: true })}
              >
                Edit
              </h5>
            )}
          </Box>
          <fieldset
            disabled={edit.editAddress ? false : true}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              border: "none",
            }}
          >
            <TextField
              multiline
              label="Address"
              rows={3}
              value={(address[type] && address[type].mainAddress) || ""}
              variant="outlined"
              sx={!edit.editAddress && { backgroundColor: "#F5F5F5" }}
            />

            <div style={{ display: "flex", gap: "1vw" }}>
              <TextField
                label="City / Town"
                fullWidth
                value={(address[type] && address[type].city) || ""}
                variant="outlined"
                sx={!edit.editAddress && { backgroundColor: "#F5F5F5" }}
              />
              <TextField
                label="State"
                fullWidth
                value={(address[type] && address[type].state) || ""}
                variant="outlined"
                sx={!edit.editAddress && { backgroundColor: "#F5F5F5" }}
              />
            </div>
          </fieldset>
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
        </Box>
      </Box>
    </Box>
  );
}
