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
    console.log('Found admin:', admin); // 디버깅용

    if (!admin) {
      console.log('No admin found with email:', email);
      return NextResponse.json(
        { message: '이메일 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    // 현재 저장된 비밀번호 확인
    console.log('Stored password:', admin.password); // 디버깅용

    let currentHashedPassword = admin.password;

    // 비밀번호가 해시되어 있지 않다면 해시화
    if (!admin.password.startsWith('$2b$')) {
      try {
        currentHashedPassword = await bcrypt.hash(admin.password, 10);
        await AdminModel.updateOne(
          { _id: admin._id },
          { $set: { password: currentHashedPassword } }
        );
        console.log('Password hashed and updated successfully'); // 디버깅용
      } catch (hashError) {
        console.error('Error hashing password:', hashError);
      }
    }

    // 입력된 비밀번호와 해시된 비밀번호 비교
    try {
      const isMatch = await bcrypt.compare(password, currentHashedPassword);
      console.log('Password comparison result:', isMatch); // 디버깅용

      if (!isMatch) {
        console.log('Password does not match'); // 디버깅용
        return NextResponse.json(
          { message: '이메일 또는 비밀번호가 올바르지 않습니다.' },
          { status: 401 }
        );
      }

      console.log('Login successful');
      return NextResponse.json({ 
        message: '로그인 성공',
        user: { email: admin.email }
      }, { status: 200 });

    } catch (compareError) {
      console.error('Error comparing passwords:', compareError);
      return NextResponse.json(
        { message: '비밀번호 확인 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}