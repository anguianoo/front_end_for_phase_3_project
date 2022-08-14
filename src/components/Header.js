import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function Header() {
  const [header, setHeader] = useState("home");

  return (
    <div className="App-header">
      <h1>{header}</h1>
      <Link to="/skaters">
        <Button>List of skaters</Button>
      </Link>
      <Link to="/skateboards">
        <Button>List of skateboards</Button>
      </Link>
    </div>
  );
}
