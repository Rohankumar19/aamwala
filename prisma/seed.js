const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Check if we already have varieties to avoid duplicates
  const count = await prisma.mangoVariety.count()
  if (count > 0) {
    console.log('Database already seeded.')
    return
  }

  console.log('Seeding database with mango varieties...')

  const alphonso = await prisma.mangoVariety.create({
    data: {
      name: 'Alphonso (Hapus)',
      slug: 'alphonso',
      origin: 'Ratnagiri',
      region: 'Maharashtra',
      description: 'The King of Mangoes, known for its rich, creamy, tender texture and delicate, non-fibrous, juicy pulp.',
      tasteNote: 'Sweet, rich, and aromatic',
      sweetness: 95,
      aroma: 100,
      fiberLevel: 5,
      isGITagged: true,
      season: 'June–July',
      shelfLife: '5–7 days',
      packingType: 'Carton Box (with hay)',
      bestFor: 'Eating fresh, Aamras, Desserts',
      status: 'IN_SEASON',
      priceVariants: {
        create: [
          { weight: 3, price: 90000 },
          { weight: 5, price: 150000 },
          { weight: 10, price: 300000 },
          { weight: 3, price: 60000 },
          { weight: 5, price: 100000 },
          { weight: 10, price: 200000 },
        ]
      },
      inventory: {
        create: {
          totalStock: 500,
          available: 500,
        }
      }
    }
  })

  const kesar = await prisma.mangoVariety.create({
    data: {
      name: 'Gir Kesar',
      slug: 'gir-kesar',
      origin: 'Gir',
      region: 'Gujarat',
      description: 'Known for its bright orange colored pulp and incredibly sweet taste. Often called the Queen of Mangoes.',
      tasteNote: 'Intensely sweet with a saffron aroma',
      sweetness: 90,
      aroma: 95,
      fiberLevel: 10,
      isGITagged: true,
      season: 'June–July',
      shelfLife: '6–8 days',
      packingType: 'Carton Box',
      bestFor: 'Eating fresh, Shakes',
      status: 'PREORDER',
      preorderDate: new Date('2026-06-01T00:00:00Z'),
      priceVariants: {
        create: [
          { weight: 3, price: 90000 },
          { weight: 5, price: 150000 },
          { weight: 10, price: 300000 },
          { weight: 3, price: 60000 },
          { weight: 5, price: 100000 },
          { weight: 10, price: 200000 },
        ]
      },
      inventory: {
        create: {
          totalStock: 1000,
          available: 1000,
        }
      }
    }
  })

  const banganapalli = await prisma.mangoVariety.create({
    data: {
      name: 'Banganapalli',
      slug: 'banganapalli',
      origin: 'Banganapalle',
      region: 'Andhra Pradesh',
      description: 'Large, obliquely oval shape. Firm, sweet, and fiberless pulp.',
      tasteNote: 'Mildly sweet, fiberless',
      sweetness: 85,
      aroma: 80,
      fiberLevel: 2,
      isGITagged: true,
      season: 'June–July',
      shelfLife: '7–10 days',
      packingType: 'Carton Box',
      bestFor: 'Eating fresh, Salads',
      status: 'IN_SEASON',
      priceVariants: {
        create: [
          { weight: 3, price: 90000 },
          { weight: 5, price: 150000 },
          { weight: 10, price: 300000 },
          { weight: 3, price: 60000 },
          { weight: 5, price: 100000 },
          { weight: 10, price: 200000 },
        ]
      },
      inventory: {
        create: {
          totalStock: 2000,
          available: 2000,
        }
      }
    }
  })

  console.log('Seeding completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
