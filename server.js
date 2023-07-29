const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// load env vars
dotenv.config({ path: "./config/config.env" });

// route files
const bootcamps = require("./routes/bootcamps");

// create app
const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
