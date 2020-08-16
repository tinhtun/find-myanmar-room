/*
This is external module to load train stations in JSON.
CSV file was downloaded from https://data.gov.sg/dataset/train-station-chinese-names

How to Run?
$ yarn load-mrt-stations

And it will print out the results in JSON.
The result is saved in MRTStations.js
*/

import csv from "csv-parser";
import * as fs from "fs";

const results = {
  mrt_lines: [],
};

const main = () => {
  fs.createReadStream("src/data/train-station-chinese-names.csv")
    .pipe(csv())
    .on("data", (data) => {
      if (!results.mrt_lines.includes(data.mrt_line_english)) {
        results.mrt_lines.push(data.mrt_line_english);
        results[data.mrt_line_english] = [];
      }
      results[data.mrt_line_english].push(data.mrt_station_english);
    })
    .on("end", () => {
      console.log(results);
    });
};

main();
