import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const assets = [
    { id: 'BTC', name: 'Bitcoin', symbol: 'BTC/USD', imageUrl: '/bt.png', price: 30000, thour: 2.2, hour: 4000 },
    { id: 'ETH', name: 'Ethereum', symbol: 'ETH/USD', imageUrl: '/ett.png', price: 2000, thour: 2.2, hour: 4000 },
    { id: 'DOGE', name: 'Dogecoin', symbol: 'DOGE/USD', imageUrl: '/dt.png', price: 0.2, thour: 2.2, hour: 4000 },
    { id: 'ALGO', name: 'Algorand', symbol: 'ALGO/USD', imageUrl: '/al.png', price: 100, thour: 2.2, hour: 4000 },
    { id: 'DOT', name: 'Polkadot', symbol: 'DOT/USD', imageUrl: '/pol.png', price: 15, thour: 2.2, hour: 4000 },
    { id: 'UNI', name: 'Uniswap', symbol: 'UNI/USD', imageUrl: '/ui.png', price: 25, thour: 2.2, hour: 4000 },
    { id: 'COMP', name: 'Compound', symbol: 'COMP/USD', imageUrl: '/com.png', price: 500, thour: 2.2, hour: 4000 },
  ];

  for (const asset of assets) {
    await prisma.asset.upsert({
      where: { id: asset.id },
      update: asset,
      create: asset,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
