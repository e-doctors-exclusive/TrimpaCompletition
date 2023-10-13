import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import SideBar from './SideBar';
const cardData = [
  {
    id: 1,
    title: 'lufthansa',
    image: 'https://e7.pngegg.com/pngimages/254/50/png-clipart-lufthansa-swiss-international-air-lines-airline-heathrow-airport-logo-airline-miscellaneous-logo.png',
    description: 'The Lufthansa Group is an aviation group with operations worldwide. With 109,509 employees, the Lufthansa Group generated revenue of EUR 32,770m in the financial year 2022.',
  },
  {
    id: 2,
    title: 'fly emirates',
    image: 'https://toppng.com/uploads/preview/emirates-airlines-logo-vector-11574228420iwapfatu1w.png',
    description: 'Emirates connects the world to, and through, our global hub in Dubai. We operate modern, efficient and comfortable aircraft, and our culturally diverse workforce delivers award-winning services to our customers across six continents every day.',
  },
];

function Airlines() {
  const [clicked,setClicked]=useState(true)
  return (
    <div style={{ display: 'flex' }} >
        <SideBar setClicked={setClicked} clicked={clicked} />
    <div style={{ display: 'flex', flexWrap: 'wrap',flex: 1, marginLeft: clicked?'250px':"70px"}}>
      {cardData.map((card) => (
        <Card key={card.id} sx={{ maxWidth: 345, margin: '16px', }} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
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
