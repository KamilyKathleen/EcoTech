import mongoose from "mongoose";

const { Schema } = mongoose;

const discardedMaterials = new Schema({
    material: { type: String, required: true },
    electronic: { type: Boolean, required: true }
});

export default mongoose.model("DiscardedMaterials", discardedMaterials);