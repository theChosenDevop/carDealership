import { User } from "./src/models/User";
import { Manager } from "./src/models/Manager"
import { Customer } from "./src/models/Customer"
import { Car } from "./src/models/Car"

const seed = async () => {
  try {
    await User.deleteMany({});
    await Manager.deleteMany({});
    await Customer.deleteMany({});
    await Car.deleteMany({});

    const insertedUsers = await User.insertMany([
      {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        password: 'Password123!',
        role: 'manager',
      },
      {
        name: 'Bob Smith',
        email: 'bob@example.com',
        password: 'Password123!',
        role: 'customer',
      },
    ]);

    const insertedManager = await Manager.create({
      userId: insertedUsers[0]._id,
      company: 'AutoWorld',
      stock: 5,
      managedCars: [],
    });

    const insertedCustomer = await Customer.create({
      userId: insertedUsers[1]._id,
      phone: '+1234567890',
      address: '123 Elm Street',
      preferredBrands: ['Hyundai', 'Mitsubishi'],
      purchasedCars: [],
      budgetRange: {
        min: 10000,
        max: 30000,
      },
    });

    const insertedCars = await Car.insertMany([
      {
        name: 'Hyundai Elantra',
        brand: 'Hyundai',
        year: 2023,
        color: 'Blue',
        price: 20000,
        isSold: false,
        managerId: insertedManager._id,
        customerId: insertedCustomer._id,
      },
      {
        name: 'Mustang GT',
        brand: 'Ford',
        year: 2021,
        color: 'Red',
        price: 35000,
        isSold: true,
        managerId: insertedManager._id,
        customerId: insertedCustomer._id,
      },
    ]);

    console.log('🌱 Seeding complete!');
    console.log({ insertedUsers, insertedManager, insertedCustomer, insertedCars });

} catch (err) {
    console.error('❌ Error during seeding:', err);
};

seed();
}