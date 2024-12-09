import 'dotenv/config';
import bcrypt from 'bcrypt';
import dbConnect from '@/lib/mongodb';
import AdminModel from '@/models/Admin';

async function createAdmin() {
  try {
    await dbConnect();
    console.log('Database connected');

    const hashedPassword = await bcrypt.hash('302', 10);
    console.log('Password hashed');

    const newAdmin = new AdminModel({
      email: '30likeyou@gmail.com',
      password: hashedPassword,
    });

    await newAdmin.save();
    console.log('Admin created successfully:', {
      email: newAdmin.email,
      hashedPassword: newAdmin.password
    });

  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    process.exit();
  }
}

createAdmin();
