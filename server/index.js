import express from "express";

import cors from "cors";
import db from "./config/db/index.js";
const app = express();
// support parsing of application/json type post data



// database
db();
//route
