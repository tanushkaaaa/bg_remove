import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        mongoose.connection.on('connected',()=>{
            console.log("Database Connected")
        })
        
    } catch (error) {
        console.log("error in db")
    }
   
    await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)
}

export default connectDB