const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/BASE_AFSSAS_MOHAMED");
    console.log("connected to mongoDB success");
  } catch (error) {
    console.log(error);
  }
};
connectDB();
