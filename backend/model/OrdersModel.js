import { model } from "mongoose";
import { OrderSchema } from "../schemas/OrdersSchema";

const OrdersModel = model("order", OrderSchema);

export { OrdersModel };