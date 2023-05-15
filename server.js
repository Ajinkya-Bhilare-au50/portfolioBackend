const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://ajinkya0011:simple123@cluster0.lxw9fdo.mongodb.net/Contact",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", ContactSchema);

app.post("/portfolio", (req, res) => {
  const contact = new Contact(req.body);
  contact.save();
  res.send("success");
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
