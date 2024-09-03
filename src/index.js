import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import cron from "node-cron";
import { updateCoin } from "./controllers/general.controller.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
    
    cron.schedule("*/10 * * * *", () => {
      console.log("running a task every 10 sec");
      updateCoin();
    });
  })
  .catch((err) => {
    console.log("mongoDB connection failed", err);
  });

