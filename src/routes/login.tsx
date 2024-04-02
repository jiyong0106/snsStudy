import { useState } from "react";
import { useForm } from "react-hook-form";
import useUserSignIn from "../api/userSignin";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Form,
  Title,
  Input,
  Switcher,
} from "../components/auth-components";
import GithubBtn from "../components/githubBtn";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm({ mode: "all" });
  const userSignin = useUserSignIn();
  const onSubmit = async (data: any) => {
    userSignin(data);
  };
  return (
    <Wrapper>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          placeholder="Email"
          type="email"
          autoComplete="useremail"
          required
          {...register("email")}
        />
        <Input
          id="password"
          placeholder="Password"
          type="password"
          autoComplete="current-password"
          required
          {...register("password")}
        />
        <Input type="submit" value={isLoading ? "Loading" : "Login"} />
      </Form>
      <Switcher>
        계정이 없으신가요? <Link to="/createAccount">계정 생성🙌</Link>
      </Switcher>
      <GithubBtn/>
    </Wrapper>
  );
};

export default Login;
