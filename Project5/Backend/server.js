import express from "express";
import {fetchStationMeasurements} from "./src/services.js";

const app = express();

app.get("/", (req, res) => {
  console.log("Here");
  res.send("waddup");
});

app.get("/api", (req, res) => {
  console.log("received request");
  res.status(200).json({ message: "Hello from backend!" });
});


app.get("/api/measurements/:stationCode", async (req, res) => {
  const station = req.params.stationCode;
  console.log("received request for station: ",station);
    try{
      const data = await fetchStationMeasurements(station)
      res.status(200).json(data)
      

    }
    catch(err){
        res
        .status(400)
        .send("No data for that station, please select a different station")
    }

    

 });

app.listen(3000);
