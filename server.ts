import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});