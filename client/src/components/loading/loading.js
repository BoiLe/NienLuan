import { Typography } from "@mui/material";
import * as React from "react";
import LoadGift from "./load.gif";

export default function Loading() {
  const paperStyle = {
    display: "flex",
    flexDirection: "column",
    height: "30vh",
    width: "30vh",
    margin: "0 auto",
    backgroundColor: "#1bbd7e",
  };
  return (
    <div style={paperStyle}>
      <img src={LoadGift}></img>
     
    </div>
  );
}
