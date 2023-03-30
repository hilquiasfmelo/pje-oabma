import { destroyCookie, parseCookies } from 'nookies'
import { createContext, ReactNode, useContext } from 'react'

type AuthContextProps = {
  token: string | null
  signOut: () => void
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
)

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { '@pje:accessId': token } = parseCookies()

  function signOut() {
    destroyCookie(undefined, '@pje:accessId', {
      path: '/',
    })
  }

  return (
    <AuthContext.Provider value={{ signOut, token }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
