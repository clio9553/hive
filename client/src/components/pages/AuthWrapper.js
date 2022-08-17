import { useState } from "react"
import Login from "./Login";
import SignUp from "./SignUp";
export const AuthWrapper = ({ toggleSigneedIn }) => {

  const [page, setpage] = useState('login')

  return <div className="auth-wrapper-page">
    {page === 'login' ? <Login loginCallback={toggleSigneedIn} togglePage={() => setpage("signup")} /> : <SignUp loginCallback={toggleSigneedIn} togglePage={() => setpage("login")} />}
  </div>
}