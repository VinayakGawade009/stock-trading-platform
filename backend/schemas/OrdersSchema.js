import { Schema } from "mongoose";

const OrdersSchema = new Schema({
    name: String,
    qty : Number,
    price: Number,
    mode: String,
});

export { OrdersSchema };