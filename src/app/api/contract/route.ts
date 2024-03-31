import mongoose from "mongoose"
import {connect} from "@/db/connectDB"
import User from "@/Schema/UserSchema"
import { NextRequest, NextResponse } from "next/server"
import type { NextApiRequest, NextApiResponse } from 'next';




export async function POST(request: NextRequest , response : NextResponse){
    try {
      connect()
        const reqBody = await request.json()
        const {contractaddress}=reqBody
        console.log(contractaddress);
        
        const NewUser = new User({
            contractaddress
        })
        console.log("new user save", NewUser);
        
        await NewUser.save()
        return NextResponse.json({ success: true, message: 'Operation successful' });
    }
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}