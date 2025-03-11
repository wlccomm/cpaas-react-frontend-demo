import { useEffect, useState } from "react";
// import useSignIn from 'react-auth-kit/hooks/useSignIn';
// import axios from 'axios'
// import moment from "moment";
// import { useAppSelector, useAppDispatch } from "../app/hooks";
// import { incrementHitCountHome } from "../app/appSlice";
import { BootstrapLayout } from "../layout/BootstrapLayout";

export default function SignIn() {
  useEffect(() => {
    document.title = "Signin";
  }, []);

  // const signIn = useSignIn()
  const [formData, setFormData] = useState({ email: '', password: '' })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    // axios.post('/api/login', formData)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       if (signIn({
    //         auth: {
    //           token: res.data.token,
    //           type: 'Bearer'
    //         },
    //         refresh: res.data.refreshToken
    //                     userState: res.data.authUserState
    //       })) { // Only if you are using refreshToken feature
    //         // Redirect or do-something
    //       } else {
    //         //Throw error
    //       }
    //     }
    //   })
  }

  return (
    <BootstrapLayout>
      Sign In
      <br />
      <br />
      <form onSubmit={onSubmit}>
        <input type={"email"} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <br />
        <input type={"password"} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <br />
        <button>Submit</button>
      </form >
    </BootstrapLayout >
  )
}
