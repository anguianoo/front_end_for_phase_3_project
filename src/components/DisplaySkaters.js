import React, { useEffect, useState } from "react";
import Skater from "./Skater";
import axios from "axios";
import { Card, Box, List, ListItem, Typography } from "@mui/material";

export default function DisplaySkaters() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(data);

  useEffect(() => {
    fetch("http://localhost:9292/skaters")
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data.map((i) => (
            <Box key={i.id}>
              <h2>{i.name}</h2>

              <Typography>Sex: {i.sex}</Typography>
              <Typography>Stance: {i.stance}</Typography>
            </Box>
          ))}
        </>
      )}
    </div>
  );
}
