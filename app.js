import express from "express";
import router from "./rout.js"


const app = express();
app.use(express.json());
//xчто то
app.use('/', router)

app.listen(3000, () => {
    console.log("server work");
});
