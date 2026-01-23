import { Schema } from "mongoose";

const PositionsSchema = new Schema({
    product: {
        type: String,
        required: true,
        enum: ["CNC", "MIS", "NRML"], // Restrict to valid order types
        uppercase: true
    },
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
    net: { type: Number }, 
    day: { type: Number },
    // isLoss: Boolean, removed so we can use vertual property instead
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

PositionsSchema.virtual('isLoss').get(function() {
    return this.net < 0; 
});

export { PositionsSchema };