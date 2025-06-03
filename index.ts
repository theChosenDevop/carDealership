import app from './src/app';
import cors from 'cors';
import connectDB from './src/config/db';


app.use(cors());

const PORT = process.env.PORT || 3000;

connectDB().then(() => console.log('connected')).catch((err) => console.error('not connected:', err))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});