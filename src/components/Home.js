import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/skaters">
        <Button>List of skaters</Button>
      </Link>
      <Link to="/skateboards">
        <Button>List of skateboards</Button>
      </Link>
    </>
  );
}
