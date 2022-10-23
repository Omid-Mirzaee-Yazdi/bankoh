import envVars from 'config/envVars'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: envVars.firebase.apiKey,
  authDomain: envVars.firebase.authDomain,
  projectId: envVars.firebase.projectId,
  storageBucket: envVars.firebase.storageBucket,
  messagingSenderId: envVars.firebase.messagingSenderId,
  appId: envVars.firebase.appId,
}

// Initialize Firebase App
export const app = initializeApp(firebaseConfig)
// Initialize Firebase Auth
export const auth = getAuth(app)
// Initialize Firebase Auth
export const db = getFirestore(app)
