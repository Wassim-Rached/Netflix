import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//routes
import authRoute from "./routes/AuthRouter.js";
import usersRoute from "./routes/UsersRouter.js";

const app = express();
dotenv.config();

//connect to mongodb
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log(`connected to mongodb`))
  .catch((err) => console.log(err));

app.use(express.json());

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

//server listen
app.listen(8800, () => {
  console.log(`server is up`);
});
