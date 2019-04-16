import express from "express";

import middleswaresConfig from "./config/middlewares";
import "./config/db";
import { CustomerRoutes } from "./modules";

const app = express();

middleswaresConfig(app);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/v1/customers", CustomerRoutes);

app.listen(3000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server Listen on Port 3000`);
  }
});
