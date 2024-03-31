import { NextApiRequest, NextApiResponse } from 'next'; // Correct types for API routes
import mongoose from 'mongoose';
import {connect} from '@/db/connectDB'; // Make sure this path is correct
import User from '@/Schema/UserSchema';

connect()


    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
        if (req.method !== 'POST') {
          // If not a POST request, return 405 Method Not Allowed
          return res.status(405).json({ error: 'Method Not Allowed' });
        }
      
        try {
          // Connect to your database
          await connect();
      
          // Assuming req.body is already parsed by Next.js (you don't need request.json())
          const { contractaddress } = req.body;
      
          // Log for debugging purposes
          console.log(contractaddress);
      
          // Create a new user instance and save it to the database
          const newUser = new User({ contractaddress });
          await newUser.save();
      
          // Return a success response
          return res.status(201).json({ success: true, message: 'Operation successful' });
        } catch (error: any) {
          console.error(error); // Log the error to the server console
          return res.status(500).json({ error: error.message });
        }
      }


