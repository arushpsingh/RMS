const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "First name is required"],
    },
    lastname: {
        type: String,
        required: [true, "Last name is required"],
    },
    email: {
        type: String,
        required: [true, "Email id is required"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Password is required"],
    }
})
//TestResource
export const User = mongoose.models.Users || mongoose.model("Users", UserSchema);