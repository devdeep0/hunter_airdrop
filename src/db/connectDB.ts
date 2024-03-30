
import mongoose from "mongoose"

export async function dbConnect (){
    try {
        await mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection 
        connection.on("connected", () => {
            console.log("DB connected successfully");
        } )
        connection.on("error", (err) => {
            console.log("DB is facing error please recheck ur mongoDB", err);
            process.exit()
        } )
    } catch (error) {
        console.log("cannot connect to DB : ", error);
        
    }
}