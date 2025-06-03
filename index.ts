import app from './src/app';
import cors from 'cors';
import connectDB from './src/config/db';
import authRoutes from './src/routes/auth.routes';


app.use(cors());
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 3000;

connectDB().then(() => console.log('connected')).catch((err) => console.error('not connected:', err))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});