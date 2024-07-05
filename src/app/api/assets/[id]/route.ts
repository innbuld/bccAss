import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, symbol, imageUrl, price, hour, thour } = await req.json();
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

    return NextResponse.json(newAsset, { status: 201 });
  } catch (error) {
    console.error('Error creating asset:', error);
    return NextResponse.json({ error: 'Failed to create asset' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
