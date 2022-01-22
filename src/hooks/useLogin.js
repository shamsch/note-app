import { useEffect, useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  
  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try {
      // sign the user out
      await projectAuth.signInWithEmailAndPassword(email,password)
      
      // dispatch login action
      dispatch({ type: 'SIGNOUT' })

      // update state only if not the components are not unmounted 
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      } 
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { login, error, isPending }
}