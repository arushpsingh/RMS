import { connectDB } from '@/helper/db';
import { User } from '@/model/User';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

connectDB();

export async function GET() {
  let users = [];
  try {
    users = await User.find().select('-password');
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: 'Failed to get user',
      success: false,
    });
  }
  return NextResponse.json({
    status: 200,
    statusText: 'Success',
    data: users,
  });
}

export async function POST(request) {
  // const payload = await request.body();
  // const data = JSON.parse(payload);
  const payload = await request.json();
  let data = new User(payload);
  try {
    data.password = bcrypt.hashSync(
      data.password,10
    );

    const createUser = await data.save();
    const response = NextResponse.json({
      status: 201,
      statusText: 'User added successfully',
      data: createUser,
    });
    return response;
  } catch (error) {
    console.log('Failed to add user:', error);
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      // MongoDB duplicate key error (11000) for the unique email field
      return NextResponse.json(
        {
          status: false,
          statusText: 'Bad Request',
          message: 'Email already exists. Please use a different email.',
        },
        { status: 409 }
      );
    }
    return NextResponse.json(
      {
        message: 'Failed to add user',
        status: false,
      },
      { status: 400 }
    );
  }
}
