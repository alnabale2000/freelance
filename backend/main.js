const express = require("express");
const db = require("./db/db");
require("dotenv").config();
const cors = require("cors");

const categoriesRouter = require("./routers/routes/categories");
const usersRouter = require("./routers/routes/users");
const authRouter = require("./routers/routes/auth");
const servicesRouter = require("./routers/routes/services");
const ordersRouter = require("./routers/routes/orders");
const corsOptions = { origin: "*", credentials: true };
const app = express();
app.use(express.json());
app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(categoriesRouter);
app.use(usersRouter);
app.use(authRouter);
app.use(servicesRouter);
app.use(ordersRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});
