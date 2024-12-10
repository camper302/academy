import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/mongodb';
import AdminModel from '@/models/Admin';
import bcrypt from 'bcrypt';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          await dbConnect();
          const admin = await AdminModel.findOne({ email: credentials.email });

          if (!admin) {
            return null;
          }

          const isValid = await bcrypt.compare(credentials.password, admin.password);

          if (!isValid) {
            return null;
          }

          return {
            id: admin._id.toString(),
            email: admin.email,
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
});

export { handler as GET, handler as POST };
