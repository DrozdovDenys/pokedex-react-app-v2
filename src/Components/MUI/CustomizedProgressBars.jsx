import React from "react";
import { Typography, Box } from "@mui/material";
import { BorderLinearProgress } from "./styles/BorderLinearProgress";

export const CustomizedProgressBars = ({ name, base_stat }) => {
  return (
    <Box
      key={name}
      sx={{
        display: "flex",
        alignItems: "flex-end",
        margin: "0 auto",
        minWidth: 300,
      }}
    >
      <Box sx={{ width: 110 }}>
        <Typography variant="body2">{name}:</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <BorderLinearProgress
          variant="determinate"
          value={base_stat > 100 ? 100 : base_stat}
        />
      </Box>
      <Box sx={{ width: 35 }}>
        <Typography variant="body2">{base_stat}</Typography>
      </Box>
    </Box>
  );
};
