const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const dotenv = require("dotenv")
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config()
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection is Successfull!"))
    .catch((err) => {
        console.log(err)
    })

//     app.all('*', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     next();
// });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
//app.use("/api/checkout", stripeRoute);

// app.use(cors({
//     origin: 'https://127.0.0.1:5000',
// }))


PORT = process.env.PORT
app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})

















