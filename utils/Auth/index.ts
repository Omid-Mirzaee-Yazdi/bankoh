import { db } from 'config/firebase'
import { doc, getDoc } from 'firebase/firestore'

export const getUserAccessLevel = async (email: string) => {
  return await getDoc(doc(db, 'users', email))
    .then((res) => {
      return { ok: true, error: null, role: res?.data()?.role }
    })
    .catch((e) => ({ ok: false, error: e, role: '' }))
}
