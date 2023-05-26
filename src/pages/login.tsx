import React, { useEffect, useRef, useState } from "react";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import Github from "../images/github.png";
import { authenticateApi } from "../api/authenticate.api";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/form/button/button";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const google = () => {
    window.open("http://localhost:5500/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5500/auth/github", "_self");
  };
  // e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  const loginButton = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (username === "" || password === "") {
        toast.error("Username or Password is empty");
        return;
      }
      const account: AuthenticateLogin = {
        username,
        password,
      };
      console.log(account);
      const res = await authenticateApi.login(account);
      Cookies.set("authorization", res.token, { expires: 7 });
      toast.success(`Welcome ${res.name} back!!`);
      navigate("/");
    } catch (error) {
      toast.error("Password or Username is not correct!");
    }
  };
  return (
    <div className="flex items-center justify-center h-[400px]">
      <div className="h-[75%] w-[60%] flex items-center shadow-lg p-[20px]">
        <div className="flex flex-1 flex-col items-center">
          <div
            className="w-[200px] pt-[15px] pr-[25px] pb-[15px] pl-[25px] mb-[20px] flex items-center font-bold bg-red-700 text-white  cursor-pointer"
            onClick={google}
          >
            <img src={Google} alt="" className="w-[20px] h-[20px] mr-[10px]" />
            Google
          </div>
          <div className="w-[200px] pt-[15px] pr-[25px] pb-[15px] pl-[25px] mb-[20px] flex items-center font-bold bg-blue-700 text-white  cursor-pointer">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div
            className="w-[200px] pt-[15px] pr-[25px] pb-[15px] pl-[25px] mb-[20px] flex items-center font-bold bg-black text-white  cursor-pointer"
            onClick={github}
          >
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="relative flex items-center justify-center bottom-0 left-0 right-0 top-0 w-[0.5px] h-3/4 m-auto bg-slate-400">
            <div className="absolute z-10 font-bold p-[10px] rounded-full border-2 border-solid bg-white border-slate-400">
              OR
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center  p-[20px]">
          <form
            onSubmit={loginButton}
            className="flex flex-1 flex-col items-center"
          >
            <input
              className="w-[250px] mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="w-[250px] mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              className="w-[250px] pt-[15px] pb-[15px] pr-[25px] pl-[25px] hover:bg-teal-700 active:bg-teal-900"
              variant={"primary"}
              title="Login"
            ></Button>
          </form>
          <div className="flex space-x-16 w-[250px] py-3 ">
            <span className="font-extrabold text-sm text-indigo-700 hover:text-indigo-300 cursor-pointer">
              <Link to={"/register"}>Register</Link>
            </span>
            <span className="font-extrabold text-sm text-indigo-700 hover:text-indigo-300 cursor-pointer">
              <Link to={"/update-password"}>Forget password?</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
