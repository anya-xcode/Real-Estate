const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function checkProperties() {
  try {
    console.log('Fetching all properties...')
    const properties = await prisma.property.findMany({
      select: {
        id: true,
        title: true,
        propertyType: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    console.log(`\nFound ${properties.length} properties:\n`)
    properties.forEach(prop => {
      console.log(`ID: ${prop.id}`)
      console.log(`Title: ${prop.title}`)
      console.log(`Type: ${prop.propertyType || 'NULL'}`)
      console.log(`Created: ${prop.createdAt}`)
      console.log('---')
    })

    // Update properties with NULL propertyType
    const nullTypeProperties = properties.filter(p => !p.propertyType)
    if (nullTypeProperties.length > 0) {
      console.log(`\nFound ${nullTypeProperties.length} properties without propertyType. Updating to 'Villa'...`)
      
      for (const prop of nullTypeProperties) {
        await prisma.property.update({
          where: { id: prop.id },
          data: { propertyType: 'Villa' }
        })
        console.log(`Updated: ${prop.title}`)
      }
      
      console.log('\nAll properties updated!')
    }

  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkProperties()
