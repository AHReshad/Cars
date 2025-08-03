const mongoose = require("mongoose");

const mongo_url =
  "mongodb+srv://reshadahmadi2001:ue9CwAs5M1sEceRe@cluster0.9jtipzr.mongodb.net/Test-TB?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
  });
