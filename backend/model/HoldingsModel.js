import { model } from "mongoose";
import { HoldingsSchema } from "../schemas/HoldingsSchema.js";

const HoldingsModel = model("holding", HoldingsSchema);

export { HoldingsModel };