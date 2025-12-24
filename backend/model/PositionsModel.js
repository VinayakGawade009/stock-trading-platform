import { model } from "mongoose";
import { PositionsSchema } from "../schemas/PositionsSchema.js";

const PositionsModel = model("position", PositionsSchema);

export { PositionsModel };