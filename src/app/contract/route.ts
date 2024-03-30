import mongoose from "mongoose"
import {dbConnect} from "@/db/connectDB"
import User from "@/Schema/UserSchema"
import { NextRequest, NextResponse } from "next/server"

dbConnect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {contractaddress} = reqBody

        console.log(reqBody);
        const NewUser = new User({
            contractaddress
        })

        await NewUser.save()
    }
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}

