import { connectDb } from '../../utils/db';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest) {
   await connectDb();

    return NextResponse.json({name: "Kiwi Meow"});
}
