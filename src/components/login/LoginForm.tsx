import { useState, type ChangeEvent } from "react";
import Input from "./Input";
import Label from "./Label";
import useLogin from "../../actionHooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export default function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isLoading } = useLogin();
  const navigate = useNavigate();
  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    mutate(
      {
        username,
        password,
      },
      {
        onSuccess: (resdata) => {
          login(resdata.token);
          navigate("/");
        },
        onError: () => {},
      }
    );
  }
  return (
    <div className="min-h-screen flex justify-center items-center  ">
      <form onSubmit={handleSubmit}>
        <div className="bg-white/20  flex justify-center items-start rounded-xl flex-col gap-5 w-96 h-96">
          <h1 className="text-3xl font-bold flex justify-center items-center">
            خوش آمدید
          </h1>
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <Label htmlFor="username">نام کاربری</Label>
            <Input
              className="focus:outline-none border-2 border-gray-300 focus:border-[#6C63FF] h-10 w-[80%] px-5 placeholder:text-gray-200 rounded-md"
              name="username"
              id="username"
              placeholder="نام کاربری را وارد کنید"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <Label htmlFor="password">رمز عبور</Label>
            <Input
              className="focus:outline-none border-2 border-gray-300 focus:border-[#6C63FF] h-10 w-[80%] px-5 placeholder:text-gray-200 rounded-md"
              name="password"
              id="password"
              placeholder="رمز ورود را وارد کنید"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="h-10 w-[80%] flex items-center ">
            <button
              className="w-full h-full bg-[#6C63FF] rounded-md text-gray-100 flex items-center justify-center  disabled:bg-gray-400"
              disabled={isLoading}
            >
              {isLoading ? "در حال ورود" : "ورود"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
