import { User } from '@/model/User';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { connectDB } from '@/helper/db';

connectDB();

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    if (!email || !password) {
      return NextResponse.json(
        {
          message: 'Email and password are required',
          success: false,
        },
        { status: 400 }
      );
    }

      const user = await User.findOne({ email: email });
      console.log(user);

    if (user === null) {
      return NextResponse.json(
        {
          message: 'User not found',
          success: false,
        },
        { status: 404 }
      );
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        {
          message: 'Incorrect password',
          success: false,
        },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    const response = NextResponse.json(
      {
        message: 'Login successfully',
        success: true,
        user: user,
      },
      { status: 200 }
    );

    response.cookies.set('authToken', token, {
      expiresIn: '1d',
      httpOnly: true,
    });

    console.log('token', response);

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
