import app from './src/app';
import connectDB from './src/config/db';

const PORT = process.env.PORT || 3000;

connectDB().then(() => console.log('connected')).catch((err) => console.error('not connected:', err))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;