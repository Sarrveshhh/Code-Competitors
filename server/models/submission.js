import mongoose from "mongoose";

const submissionSchema = mongoose.Schema({
    problemId: {type: String, require: true},
    userId: {type: String, require: true},
    status: {type: String, require: true},
});

export default mongoose.model('Submission', submissionSchema);