import React, { useEffect, useRef, useState } from "react";
import Google from "../images/google-small.png";
import { authenticateApi } from "../api/authenticate.api";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/form/button/button";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import Logo_Login from "../images/logo_login.jpg";
export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const google = () => {
    window.open("http://localhost:5500/api/v1/authenticate/google", "_self");
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
      Cookies.set("Authorization", res.token, { expires: 7 });
      toast.success(`Welcome ${res.name} back!!`);
      navigate("/");
    } catch (error) {
      toast.error("Password or Username is not correct!");
    }
  };
  // useEffect(() => {
  //   const getUser = () => {
  //     fetch("http://localhost:5500/api/v1/authenticate/login/success", {
  //       method: "GET",
  //       // credentials có giá trị include có nghĩa là When a request's credentials mode (Request.credentials) is include,
  //       // browsers will only expose the response to the frontend JavaScript code if the Access-Control-Allow-Credentials value is true.
  //       // Credentials are cookies, authorization headers, or TLS client certificates.
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": "true",
  //       },
  //     })
  //       // kiểm tra lỗi nếu đăng nhập sai thì ko cho trả về data.
  //       .then((response) => {
  //         if (response.status === 200) return response.json();
  //         throw new Error("authentication has been failed!");
  //       })
  //       .then((resObject) => {
  //         // server sẽ trả cho chúng ta 1 res gồm :
  //         // success: true,
  //         //  message: "successful",
  //         // user: req.user,
  //         setUser(resObject.user);
  //         console.log(resObject.message);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getUser();
  // }, []);
  // console.log(user);
  return (
    <div className="w-full h-screen flex items-center">
      <div className="relative w-1/2 h-full flex flex-col">
        <img
          src={Logo_Login}
          alt="login-logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <h1 className="w-full max-w-[500px] mx-auto text-4xl text-teal-700 font-extrabold">
          Future Shop Decor
        </h1>
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-10">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">
              Welcome back! Please enter your details below.
            </p>
          </div>
          <div className="w-full flex flex-col">
            <form
              onSubmit={loginButton}
              className="flex flex-1 flex-col items-center"
            >
              <input
                className="w-full mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="w-full mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-full flex items-center justify-end">
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 hover:text-gray-500">
                  <Link to={"/update-password"}>Forget password?</Link>
                </p>
              </div>
              <Button
                type="submit"
                className="w-full mt-3 pt-[15px] pb-[15px] pr-[25px] pl-[25px] hover:bg-teal-700 active:bg-teal-900 "
                variant={"primary"}
                title="Login"
              ></Button>
            </form>
          </div>
          <div className="w-full flex items-center justify-center relative py-5">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <p className="absolute text-md text-black/80 bg-[#f5f5f5]">OR</p>
          </div>
          <div
            className="w-full text-[#060606] my-2 font-semibold border-2 border-black p-4 text-center flex items-center justify-center cursor-pointer"
            onClick={google}
          >
            <img src={Google} alt="" className="w-[20px] h-[20px] mr-[10px]" />
            Sign in with Google
          </div>
        </div>
        <div className="w-full flex justify-center items-center ">
          <p className="text-sm font-normal text-[#060606]">
            Dont have an account?{" "}
            <span className="font-semibold underline underline-offset-2 cursor-pointer hover:text-gray-500">
              <Link to={"/register"}>Sign up for free</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex items-center justify-center h-[400px]">
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
    </div> */
}
