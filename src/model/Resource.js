const { Schema, default: mongoose } = require("mongoose");

const ResourceSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Resource first name is required"],
    },
    lastname: {
        type: String,
        required: [true, "Resource last name is required"],
    },
    email: {
        type: String,
        required: [true, "Resource email id is required"],
        unique: true
    },
    userId: {
        type: mongoose.ObjectId,
        required: [true, "Resource email id is required"],
        index: true
    }
})

export const Resource = mongoose.models.Resources || mongoose.model("Resources", ResourceSchema);
