import { model } from "mongoose";
import { OrdersSchema } from "../schemas/OrdersSchema.js";

const OrdersModel = model("order", OrdersSchema);

export { OrdersModel };