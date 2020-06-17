const fs = require("fs");
const County = require('../models/County');
const seeder = require("mongoose-seed");
const path = require("path");

require("dotenv").config();
const db = process.env.MONGO_URI;

const text = fs.readFileSync(path.resolve(__dirname, "./united-states-counties.txt")).toString('utf-8');

const textByLine = text.split("\n");

const stateCountyArray = textByLine.map((countyStr) => {
  return [countyStr.split(",")[1].trim(), countyStr.split(",")[0]]
})

const countyPOJOs = stateCountyArray.map((tuple) => {
  return {
    state: tuple[0],
    county: tuple[1],
    education: 0,
    justice: 0,
    legislation: 0,
  }
})

const counties = [
  {
    model: "County",
    documents: [countyPOJOs]
  }
];

seeder.connect(db, function (){
  seeder.loadModels(["./models/County.js"]);
  seeder.clearModels(["County"], function() {
    seeder.populateModels(counties, function(err, done) {
      if (err){
        return console.log("seed err", err);
      }
      if (done) {
        return console.log("seed done", done);
      }
      seeder.disconnect();
    });
  });
});