import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { 
                    label: "Email", 
                    type: "email", 
                    placeholder: "example@example.com" 
                },
                password: { 
                    label: "Password", 
                    type: "password" 
                }
            },
            async authorize(credentials) {
                // 여기에 실제 인증 로직을 구현하세요
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                try {
                    // 예시 인증 로직
                    // const user = await prisma.user.findUnique({
                    //     where: { email: credentials.email }
                    // });
                    
                    // if (user && await bcrypt.compare(credentials.password, user.password)) {
                    //     return {
                    //         id: user.id,
                    //         email: user.email,
                    //         name: user.name
                    //     }
                    // }

                    // 임시 테스트용 응답
                    return {
                        id: "1",
                        email: credentials.email,
                        name: "Test User"
                    };
                } catch (error) {
                    console.error("Auth error:", error);
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    pages: {
        signIn: '/login',
        signOut: '/auth/signout',
        error: '/auth/error',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
};
