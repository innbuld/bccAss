// Import necessary modules and PrismaClient
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize PrismaClient
const prisma = new PrismaClient();

// GET endpoint to fetch all assets
export async function GET() {
  try {
    const assets = await prisma.asset.findMany({
      select: {
        id: true,
        name: true,
        symbol: true,
        imageUrl: true,
        price: true,
        hour: true,
        thour: true,
      },
    });
    return NextResponse.json(assets);
  } catch (error) {
    console.error('Error fetching assets:', error);
    return NextResponse.json({ error: 'Failed to fetch assets' }, { status: 500 });
  }
}

// POST endpoint to create a new asset
export async function POST(req: NextRequest) {
  try {
    // Extract data from request body
    const { name, symbol, imageUrl, price, hour, thour } = await req.json();

    // Create a new asset in the database
    const newAsset = await prisma.asset.create({
      data: {
        name,
        symbol,
        imageUrl,
        price,
        hour,
        thour,
      },
      select: {
        id: true,
        name: true,
        symbol: true,
        imageUrl: true,
        price: true,
        hour: true,
        thour: true,
      },
    });

    // Return the newly created asset as JSON response with status 201 (Created)
    return NextResponse.json(newAsset, { status: 201 });
  } catch (error) {
    console.error('Error creating asset:', error);
    // Return an error response if something goes wrong
    return NextResponse.json({ error: 'Failed to create asset' }, { status: 500 });
  }
}
