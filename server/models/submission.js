import mongoose from "mongoose";

const submissionSchema = mongoose.Schema({
    problemId: {type: String},
    userId: {type: String},
    status: {type: String},
});

export default mongoose.model('Submission', submissionSchema);