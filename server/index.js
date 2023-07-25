var express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require('cors')

const Stocks = require("./Stocks");

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Enable cors
app.use(cors());


const initmongo = async () => {
  try {
    
  await mongoose.connect("mongodb+srv://errazyabdelfatah:nyDrV5jfOqEfWOAz@cluster0.yituksw.mongodb.net/newdb?retryWrites=true&w=majority",
  {
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  } catch (error) {
  console.log(error);
  }
  };
  initmongo()
  app.get("/", async (req, res) => {
    try {
    let data = await Stocks.find({});
    res.json(data);
    } catch (error) {
    console.log(error);
    }
    });

  app.post("/stocks", async (req, res, next) => {
    try {
    let {_id, quantite, emplacement } = req.body;
    quantite=parseInt(quantite)
    let NewStocks = new Stocks({ _id, quantite, emplacement });
    let saved = await NewStocks.save();
    res.status(201).send(saved);
    } catch (error) {
    console.log(error);
    }
    });
  app.put("/stocks/:id", async (req, res, next) => {
    try {
    let updateStocks = await
    Stocks.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(updateStocks);
    } catch (error) {
    console.log(error);
    }
    });

  app.get("/stocks/:id", async (req, res) => {
    try {
    let data = await Stocks.findOne({_id:req.params.id});
    if(data){
      res.json(data);

    }else{
      res.json({msg:'produit not found'})
    }
    res.json(data);
    } catch (error) {
    console.log(error);
    }
    });
    app.delete("/stocks/:id", async (req, res, next) => {
      try {
      let deleteStocks = await Stocks.findByIdAndRemove(req.params.id);
      res.json({msg:'the produit has deleted successfully'});
    } catch (error) {
      console.log(error);
    }
  });
  app.get("/stocks", async (req, res) => {
    try {
      let data = await Stocks.find(req.query).limit(2);
      res.json(data);
    } catch (error) {
      console.log(error);
    }

    
  });

    app.listen(5000,()=>{
      console.log('the server runnin on port 5000')
      });