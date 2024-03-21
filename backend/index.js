// Import required modules
const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
const { postRouter } = require("./routes/post.route");
const { auth } = require("./middlewares/Auth.middleware");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/" , (req,res)=>{
    res.send("welsome to home page")
})
app.use("/users", userRouter);
app.use("/posts", auth , postRouter);


app.listen(8000, async () => {
  try {
    await connection;
    console.log("Db connected");
   
    console.log("Server running at port 8000");
  } catch (error) {
    console.log(error.message);
  }
});
