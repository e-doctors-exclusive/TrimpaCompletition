const express = require('express');
const cors = require('cors')
const app = express();
const port = 1128; // You can choose any available port
const axios = require('axios');
// Define a route
app.use(cors())
app.get('/', async (req, res)=> {
 res.send(
  [{
    "name": "iPhone 13 Pro Max",
    "stockNumber": 100,
    "price": 1099.00,
    "rate": 4.5,
    "desc": "The iPhone 13 Pro Max features a new super retina XDR display with ProMotion featuring an adaptive refresh rate up to 120Hz, A15 Bionic chip, 5G capability, and an improved camera system.",
    "category": "Phones",
    "state": "in Stock"
  },
  
  {
    "name": "Nike Air Force 1",
    "stockNumber": 50,
    "price": 90.00,
    "rate": 4.7,
    "desc": "The Nike Air Force 1 '07 is the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to let you shine.",
    "category": "Man's Fashion",
    "state": "in Stock"
  },
  
   {
    "name": "Sony WH-1000XM4",
    "stockNumber": 30,
    "price": 348.00,
    "rate": 4.6,
    "desc": "Sony’s intelligent industry-leading noise canceling headphones with premium sound elevate your listening experience with the ability to personalize and control everything you hear.",
    "category": "Headphones",
    "state": "out Of Stock"
  },
   {
    "name": "Adidas Ultraboost 21",
    "stockNumber": 70,
    "price": 180.00,
    "rate": 4.8,
    "desc": "The Adidas Ultraboost 21 running shoes are designed with responsive cushioning that returns energy to your stride while you run.",
    "category": "Sports & Outdoor",
    "state": "in Stock"
  }, {
    "name": "Canon EOS R6",
    "stockNumber": 15,
    "price": 2499.00,
    "rate": 4.9,
    "desc": "The Canon EOS R6 full-frame mirrorless camera is designed to meet the demands of both photographers and video content creators who want a strong and versatile camera to keep up with their active lives.",
    "category": "Camera",
    "state": "out Of Stock"
  },
  
   {
    "name": "Samsung Galaxy S21 Ultra",
    "stockNumber": 80,
    "price": 1199.99,
    "rate": 4.7,
    "desc": "The Samsung Galaxy S21 Ultra features a dynamic AMOLED 2X display, pro-grade camera, and the performance of Samsung's most powerful processor.",
    "category": "Phones",
    "state": "in Stock"
  },{
    "name": "Dell XPS 15",
    "stockNumber": 30,
    "price": 1749.99,
    "rate": 4.6,
    "desc": "The Dell XPS 15 is a high-performance laptop with a stunning display, Intel Core i7 processor, and an Nvidia GeForce GTX 1650 Ti graphics card.",
    "category": "Computer",
    "state": "in Stock"
  },
  
   {
    "name": "Apple Watch Series 7",
    "stockNumber": 60,
    "price": 399.00,
    "rate": 4.7,
    "desc": "The Apple Watch Series 7 features a larger display, faster charging, and more durable design.",
    "category": "SmartWatch",
    "state": "in Stock"
  },
   {
    "name": "Sony PlayStation 5",
    "stockNumber": 20,
    "price": 499.99,
    "rate": 4.8,
    "desc": "The Sony PlayStation 5 is a powerful gaming console with high-speed SSD, integrated I/O, and ray tracing capabilities.",
    "category": "Gaming",
    "state": "out Of Stock"
  },{
    "name": "Panadol Extra",
    "stockNumber": 200,
    "price": 5.00,
    "rate": 4.5,
    "desc": "Panadol Extra provides relief from fever and strong pain.",
    "category": "Medicine",
    "state": "in Stock"
  },
  
   {
    "name": "Adidas Football",
    "stockNumber": 80,
    "price": 20.00,
    "rate": 4.6,
    "desc": "The Adidas Football is designed for durability and consistent performance.",
    "category": "Sports & Outdoor",
    "state": "in Stock"
  },
  
   {
    "name": "Fisher-Price Rock-a-Stack",
    "stockNumber": 120,
    "price": 7.00,
    "rate": 4.7,
    "desc": "The Fisher-Price Rock-a-Stack is a classic educational toy for babies.",
    "category": "Baby's & Toys",
    "state": "in Stock"
  },
  
  {
    "name": "Purina Cat Food",
    "stockNumber": 150,
    "price": 12.00,
    "rate": 4.8,
    "desc": "Purina Cat Food provides balanced nutrition for your pet.",
    "category": "Groceries & Pets",
    "state": "in Stock"
  },
  
   {
    "name": "L'Oreal Paris Revitalift",
    "stockNumber": 90,
    "price": 23.50,
    "rate": 4.9,
    "desc": "L'Oreal Paris Revitalift is a anti-aging face moisturizer that fights wrinkles and firms skin.",
    "category": "Health & Beauty",
    "state": "out Of Stock"
  },
   {
    "name": "Gucci Women's Handbag",
    "stockNumber": 25,
    "price": 2100.00,
    "rate": 4.9,
    "desc": "This Gucci Women's Handbag is a luxury fashion statement with high-quality leather and the iconic Gucci pattern.",
    "category": "Woman's Fashion",
    "state": "in Stock"
  },
  
   {
    "name": "Armani Men's Suit",
    "stockNumber": 40,
    "price": 700.00,
    "rate": 4.8,
    "desc": "The Armani Men's Suit offers a sleek and professional look for any formal occasion.",
    "category": "Man's Fashion",
    "state": "in Stock"
  },
  
  {
    "name": "Samsung QLED TV",
    "stockNumber": 30,
    "price": 1299.99,
    "rate": 4.7,
    "desc": "The Samsung QLED TV provides a stunning picture quality with a billion shades of color.",
    "category": "Electronics",
    "state": "out Of Stock"
  },
  {
    "name": "Apple iPhone 13",
    "stockNumber": 100,
    "price": 699.00,
    "rate": 4.8,
    "desc": "The Apple iPhone 13 features a new A15 Bionic chip, improved dual-camera system, and up to 512GB of storage.",
    "category": "Phones",
    "state": "in Stock"
  },
  
  {
    "name": "HP Pavilion Laptop",
    "stockNumber": 50,
    "price": 599.99,
    "rate": 4.6,
    "desc": "The HP Pavilion Laptop offers high performance with an Intel Core i5 processor, 8GB RAM, and a 256GB SSD.",
    "category": "Computer",
    "state": "out Of Stock"
  },
  {
    "name": "Fitbit Versa 3",
    "stockNumber": 75,
    "price": 229.95,
    "rate": 4.7,
    "desc": "The Fitbit Versa 3 is a health & fitness smartwatch with built-in GPS, Active Zone Minutes, and music experiences to keep you moving.",
    "category": "SmartWatch",
    "state": "in Stock"
  }
  ]
 )

});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
