import mongoose from "mongoose";

const { Schema } = mongoose;

const collectionPoints = new Schema({
    name: { type: String, required: true },
    address: { type: [String], required: true },
    zipCode: { type: [String], required: true },
    phoneNumber: { type: [String], required: false },
    email: { type: String, required: false },
    website: { type: String, required: false },
    instagram: { type: String, required: false },
    discardedMaterials: [{
        type: Schema.Types.ObjectId,
        ref: "DiscardedMaterials"
    }]
});

export default mongoose.model("CollectionPoints", collectionPoints);