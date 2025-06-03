import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';
import { User } from '../src/models/User';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();


jest.setTimeout(100000)

const testUser = {
  name: 'Tobi Ade',
  email: 'Tobiade@gmail.com',
  password: 'tobiade',
  role: 'customer',
};

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI!);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

beforeEach(async () => {
  await User.deleteMany({});
});

it('should register a user successfully', async () => {
  const res = await request(app).post('/api/auth/register').send(testUser);

  expect(res.statusCode).toBe(201);
  expect(res.body.message).toBe('User registered successfully');
});

it('should login successfully and set cookie', async () => {
  const hashed = await bcrypt.hash(testUser.password, 10);
  await new User({ ...testUser, password: hashed }).save();

  const res = await request(app).post('/api/auth/login').send({
    email: testUser.email,
    password: testUser.password,
  });

  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Login successful');
  expect(res.headers['set-cookie']).toBeDefined();
});

it('should fail login with invalid credentials', async () => {
  const hashed = await bcrypt.hash(testUser.password, 10);
  await new User({ ...testUser, password: hashed }).save();

  const res = await request(app).post('/api/auth/login').send({
    email: testUser.email,
    password: 'invalidpassword',
  });

  expect(res.statusCode).toBe(401);
  expect(res.body.message).toBe('Invalid credentials');
});

it('should logout user and clear cookie', async () => {
  const res = await request(app).post('/api/auth/logout');

  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Logout successfully');
  expect(res.headers['set-cookie']).toBeDefined();
  expect(res.headers['set-cookie'][0]).toMatch(/token=;/);
});
