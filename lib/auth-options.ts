import NextAuth, { 
  DefaultSession,
  DefaultUser,
  AuthOptions,
} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import { supabase } from './supabaseClient' // Removed problematic import

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string | null
      email: string | null
      image: string | null
      role?: string
      plan?: string
    }
  }

  interface User {
    id: string
    name: string | null
    email: string | null
    image: string | null
    role?: string
    plan?: string
  }

  interface JWT {
    id: string
    name: string | null
    email: string | null
    image: string | null
    role?: string
    plan?: string
  }
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // Corrected: Removed NEXT_PUBLIC_
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        return true
      }
      return true
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string | undefined
        session.user.plan = token.plan as string | undefined
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role as string | undefined
        token.plan = user.plan as string | undefined
      }
      return token
    },
  },
} satisfies AuthOptions

export type Session = DefaultSession & {
  user: DefaultSession['user'] & {
    role?: string
    plan?: string
  }
}
