import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Skater({ id }) {
  const [skater, setSkater] = useState("hello");
  let params = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/skaters/${params.id}`)
      .then((r) => r.json())
      .then((data) => setSkater(data));
  }, []);

  return (
    <>
      <Typography variant="h6">{skater.name}</Typography>
      <Typography variant="h6">{skater.stance}</Typography>
    </>
  );
}
