import React from "react";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";

export default function AlertNotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <Alert
        severity="warning"
        sx={{ mt: 2, justifyContent: "center", mx: "auto" }}
      >
        <AlertTitle>No Pokémon Matched Your Search!</AlertTitle>
      </Alert>
    </div>
  );
}
