import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    contractaddress : {
        type : String
    }
    
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User;