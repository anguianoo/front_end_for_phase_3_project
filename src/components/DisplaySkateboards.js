import { Typography, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Skateboards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [p, setP] = useState();
  let params = useParams();

  console.log(params);
  useEffect(() => {
    fetch("http://localhost:9292/skateboards")
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
            <Card key={i.id}>
              <Typography>{i.brand}</Typography>
              Belongs to{" "}
              <Link to={`/skaters/${i.skater_id}`}>{i.skater.name}</Link>
            </Card>
          ))}
        </>
      )}
    </div>
  );
}
