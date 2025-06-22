import { Session as NextAuthSession } from 'next-auth'

export interface SessionUser extends NextAuthSession['user'] {
  role?: string
  plan?: string
}

export interface Session extends NextAuthSession {
  user: SessionUser
}
