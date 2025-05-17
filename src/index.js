import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Root route (for browser testing)
app.get('/', (req, res) => {
    res.send('👋 Your backend is alive and working!');
});

// Test route to confirm DB access
app.get('/test', async (req, res) => {
    try {
        const result = await prisma.Order.findMany();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Database error: " + err.message);
    }
});

// Get all orders
app.get('/orders', async (req, res) => {
    const orders = await prisma.Order.findMany({ orderBy: { createdAt: 'asc' } });
    res.json(orders);
});

// Create a new order
app.post('/orders', async (req, res) => {
    const newOrder = await prisma.Order.create({ data: req.body });
    res.json(newOrder);
});

// Update an existing order
app.patch('/orders/:id', async (req, res) => {
    const updatedOrder = await prisma.Order.update({
        where: { id: Number(req.params.id) },
        data: req.body
    });
    res.json(updatedOrder);
});

app.listen(3001, () => {
    console.log('✅ Backend running on http://localhost:3001');
});