import mongoose from "mongoose";

const counterSchema = mongoose.Schema({
    id: String,
    seq: Number
});

export default mongoose.model('Counter', counterSchema);