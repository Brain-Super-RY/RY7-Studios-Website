export const metadata = {
  title: 'Login Admin | RY7 Studios',
  description: 'Login untuk admin platform RY7 Studios.'
}

export default function LoginAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
      <div className="w-full max-w-lg p-8 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md border border-white/20">
        {children}
      </div>
    </div>
  )
} 