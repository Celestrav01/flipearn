import 'dotenv/config'
import { PrismaClient } from '@prisma/client'; // This was missing!
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

// Required for Neon to work in standard Node.js environments
neonConfig.webSocketConstructor = ws;

neonConfig.poolQueryViaFetch = true

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaNeon({ connectionString });

// Singleton pattern to prevent multiple instances of Prisma Client in development
const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export default prisma;

// const adapter = new PrismaNeon({
//   connectionString: process.env.DATABASE_URL
// })

// export const prisma = new PrismaClient({ adapter })