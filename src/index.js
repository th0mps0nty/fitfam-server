import express from "express";

import middlewaresConfig from "./config/middlewares";
import "./config/db";
import { CustomerRoutes } from "./modules";

const app = express();

middlewaresConfig(app);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/v1/customers", CustomerRoutes);

app.listen(3001, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server Listen on Port 3001`);
  }
});
