import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import SideBar from "./SideBar";


function Airlines({brand}) {
  const [clicked, setClicked] = useState(true);
  return (
    <div style={{ display: "flex" }}>
      <SideBar setClicked={setClicked} clicked={clicked} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flex: 1,
          marginLeft: clicked ? "250px" : "70px",
        }}
      >
        
        {brand.map((brand) => (
          <Card key={brand.id} sx={{ maxWidth: 345, margin: "16px" }}>
            <CardActionArea>

              <CardMedia
                component="img"
                height="140"
                image={brand.image}
                alt={brand.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {brand.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {brand.description}
                </Typography>
              </CardContent>
              
           </CardActionArea>
          <CardActions>
              <Button size="small" color="primary">
                Contact
              </Button>
          </CardActions>

          </Card>
        ))}
      </div>
    </div>
  );
}

export default Airlines;
