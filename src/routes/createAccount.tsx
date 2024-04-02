import { useState } from "react";
import { useForm } from "react-hook-form";
import useUserSignUp from "../api/userSignUp";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Form,
  Title,
  Input,
  Switcher,
} from "../components/auth-components";
import GithubBtn from "../components/githubBtn";

const CreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm({ mode: "all" });
  const userLogin = useUserSignUp();
  const onSubmit = async (data: any) => {
    userLogin(data);
  };
  return (
    <Wrapper>
      <Title>Join</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="name"
          placeholder="Name"
          type="text"
          autoComplete="username"
          required
          {...register("name")}
        />
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
        <Input type="submit" value={isLoading ? "Loading" : "CreateAccount"} />
      </Form>
      <Switcher>
        계정이 있으신가요? <Link to="/login">로그인🙌</Link>
      </Switcher>
      <GithubBtn />
    </Wrapper>
  );
};

export default CreateAccount;
