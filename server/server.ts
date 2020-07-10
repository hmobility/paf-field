import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(3000,'0.0.0.0',()=>{
    console.log("server is listening on 3000 port");

    createConnection()
    .then(async connection => {
        console.log(connection);
    });
})