import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AdminModel from '@/models/Admin';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    await dbConnect();
    console.log('Database connected successfully');

    const { email, password } = await request.json();
    console.log('Login attempt with email:', email);

    const admin = await AdminModel.findOne({ email });
    
    if (!admin) {
      console.log('No admin found with email:', email);
      return NextResponse.json(
        { message: '이메일 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    // 비밀번호가 해시되어 있지 않다면 해시화하여 저장
    if (!admin.password.startsWith('$2b$')) {
      const hashedPassword = await bcrypt.hash(admin.password, 10);
      await AdminModel.updateOne(
        { _id: admin._id },
        { $set: { password: hashedPassword } }
      );
      console.log('Password hashed and updated');
    }

    // 입력된 비밀번호와 저장된 해시 비밀번호 비교
    const isMatch = await bcrypt.compare(password, admin.password);
    console.log('Password match:', isMatch);

    if (!isMatch) {
      return NextResponse.json(
        { message: '이메일 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    console.log('Login successful');
    return NextResponse.json({ message: '로그인 성공' }, { status: 200 });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}