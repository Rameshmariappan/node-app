const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./Routes/admin");
const normalUser = require("./Routes/productPage");
const errorpage = require("./controllers/404");
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(normalUser);
app.use(adminRouter);
app.use(errorpage.errorPage);
app.listen(8081);

console.log("Server running to at http://127.0.0.1:8081/");
