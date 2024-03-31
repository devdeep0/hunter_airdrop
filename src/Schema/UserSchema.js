import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    contractaddress:{
        type: String,
        required: true, // Add this line if the contract address is required
        unique: true, // Add this line if the contract address should be unique across all documents
      }
    
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User;