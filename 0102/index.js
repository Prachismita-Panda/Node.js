const express = require("express");
const app = express();

const mobiles = [
  {
    id: 101,
    brand: "Apple",
    model: "iPhone 15 Pro",
    price: 129999,
    storage: "256GB",
    color: "Natural Titanium",
    rating: 4.9,
    inStock: true
  },
  {
    id: 102,
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    price: 118999,
    storage: "512GB",
    color: "Titanium Gray",
    rating: 4.8,
    inStock: true
  },
  {
    id: 103,
    brand: "OnePlus",
    model: "OnePlus 12",
    price: 64999,
    storage: "256GB",
    color: "Flowy Emerald",
    rating: 4.6,
    inStock: true
  },
  {
    id: 104,
    brand: "Xiaomi",
    model: "Redmi Note 13 Pro+",
    price: 32999,
    storage: "128GB",
    color: "Midnight Black",
    rating: 4.4,
    inStock: false
  },
  {
    id: 105,
    brand: "Realme",
    model: "Realme GT 6",
    price: 39999,
    storage: "256GB",
    color: "Mirror Silver",
    rating: 4.5,
    inStock: true
  }
];


app.get("/product",(req,res) => {
     res.send(mobiles);
}); 




app.get("/product/:productId",(req,res) => {
  const prodId = req.params.productId;
  res.send(prodId);
//   res.send(mobiles[0]);
//   res.send(mobiles[0].id);
     // res.send(mobiles[0].brand);

    //  const result = mobiles.find((mob) => {
    //       return mob.id == prodId;
    //  });

    //  res.send(result);
    

});

const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`serevr started on port ${PORT}`);
});