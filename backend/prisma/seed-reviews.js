const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedReviews() {
  const reviews = [
    {
      name: 'Priya Sharma',
      role: 'Home Buyer',
      rating: 5,
      text: 'Found my dream apartment in just 2 weeks! The platform is incredibly easy to use and the support team was amazing.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      isApproved: true
    },
    {
      name: 'Rajesh Kumar',
      role: 'Property Investor',
      rating: 5,
      text: 'Best real estate platform in India. Verified listings and transparent pricing made my investment decision so much easier.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      isApproved: true
    },
    {
      name: 'Anita Desai',
      role: 'First-time Buyer',
      rating: 5,
      text: 'As a first-time buyer, I was nervous. But the guidance and support I received was exceptional. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      isApproved: true
    }
  ];

  console.log('Seeding reviews...');

  for (const review of reviews) {
    const created = await prisma.review.create({
      data: review
    });
    console.log(`Created review: ${created.name}`);
  }

  console.log('✅ Reviews seeded successfully!');
}

seedReviews()
  .catch((e) => {
    console.error('Error seeding reviews:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
