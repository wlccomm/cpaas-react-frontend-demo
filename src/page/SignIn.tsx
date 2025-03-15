import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { BootstrapLayout } from "../layout/BootstrapLayout";
import { useLoginMutation } from "../app/apiAuth";

export default function SignIn() {
  useEffect(() => {
    document.title = "Signin";
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
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
          name: data.username
          // uid: 123456
        }
      })) {
        console.error("signIn OK")
        console.log(location)
        const redirectTo = location.state?.from?.pathname || '/';
        console.log(redirectTo)
        navigate(redirectTo, { replace: true });
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
    postLoginData(formData)
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
