const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const PORT = require("./config");
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.static('./'));

app.listen(PORT, console.log(`Running on ${PORT}`));