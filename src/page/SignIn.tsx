import { useEffect, useState } from "react";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
// import axios from 'axios'
// import moment from "moment";
// import { useAppSelector, useAppDispatch } from "../app/hooks";
// import { incrementHitCountHome } from "../app/appSlice";
import { BootstrapLayout } from "../layout/BootstrapLayout";
import { useLoginMutation } from "../app/apiAuth";


export default function SignIn() {
  useEffect(() => {
    document.title = "Signin";
  }, []);

  const signIn = useSignIn()
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [login] = useLoginMutation();

  const postLoginData = async (data: { username: string; password: string }) => {
    try {
      const response = await login({
        username: data.username,
        password: data.password,
      }).unwrap();
      console.log("login api call response:")
      console.log(response)
      if (signIn({
        auth: {
          token: response.token,
          type: 'Bearer'
        },
        // refresh: response.data.refreshToken,
        userState: {
          name: 'React User',
          uid: 123456
        }
      })) {
        // Redirect or do-something
        console.error("signIn OK")
      } else {
        //Throw error
        console.error("signIn not OK")
      }
      return
    } catch (error: any) {
      console.error("error", error);
      return error.status;
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    // postLoginData({ username: "glownes@whitelabelcomm.com", password: "password123" })
    postLoginData(formData)

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
        <input type={"email"} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        <br />
        <input type={"password"} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <br />
        <button>Submit</button>
      </form >
    </BootstrapLayout >
  )
}
