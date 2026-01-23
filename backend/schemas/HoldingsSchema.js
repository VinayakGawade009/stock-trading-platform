import { Schema } from "mongoose";

const HoldingsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  avg: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  net: {
    type: Number
  },
  day: {
    type: Number
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

export { HoldingsSchema };