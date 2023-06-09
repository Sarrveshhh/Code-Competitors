import mongoose from "mongoose";

const problemSchema = mongoose.Schema({
    problemId: {type: Number, require: true},
    title: {type: String, require: true},
    difficulty: {type:String, require: true},
    acceptance: {type:String, require: true},
    description: {type:String, require: true},
    exampleIn: {type:String, require: true},
    exampleOut: {type:String, require: true},
});

export default mongoose.model('Problem', problemSchema);
