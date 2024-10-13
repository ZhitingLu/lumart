import db from '../../utils/db';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest) {
    await db.connectDb();
    await db.disconnectDb();
    return NextResponse.json({ name: "Kiwi Meow" });
}
