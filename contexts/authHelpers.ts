import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from 'config/firebase'

const isAllowedDomain = (email: string, allowedDomains: string[]) => {
  return allowedDomains.some((domain) => email?.endsWith(`@${domain}`))
}

const provider = new GoogleAuthProvider()
//helper function to login
export const login = async (allowedDomains: string[]) => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      // The signed-in user info.
      const user = result.user
      const email = result.user.email
      //check for allowed domains
      if (email) {
        return { credential, token, user }
      } else {
        auth.signOut()
        return new Error(
          `Please login again`
        )
      }
    })
    .catch((error: Error) => {
      return error
    })
}
//Sign out
//will automaically redirect to login page
export const logout = () => {
  auth.signOut()
}
