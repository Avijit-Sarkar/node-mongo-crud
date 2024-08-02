import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: Number,
});

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
