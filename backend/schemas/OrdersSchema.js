import { Schema } from "mongoose";

const OrdersSchema = new Schema({
    name: String,
    qty : Number,
    price: Number,
    percent: String,
});

export { OrdersSchema };