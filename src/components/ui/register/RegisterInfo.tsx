import React, { useRef, useState } from "react";
import Button from "../../form/button/button";
import { useLocation, useNavigate } from "react-router-dom";
import { authenticateApi } from "../../../api/authenticate.api";
import { toast } from "react-hot-toast";

export default function RegisterInfo() {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const confirmPassword = useRef<HTMLInputElement | null>(null);
  const [avatar, setAvatar] = useState<string>("");
  const location = useLocation();
  const { email } = location.state;
  const navigate = useNavigate();
  const handleSubmitUserInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userInfo = {
        name,
        email,
        username,
        password,
        avatar,
      };
      if (name === "" || username === "" || password === "") {
        toast.error("Field is empty!");
        return;
      } else if (password !== confirmPassword.current?.value) {
        toast.error("It is not incorrect with password");
        return;
      }
      const userInfoRes: {
        _id: string;
        name: string;
      } = await authenticateApi.register(userInfo);
      console.log(userInfoRes);
      toast.success(`You ${userInfoRes.name} register success!`);
      if (userInfoRes) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      title="Form Register"
      onSubmit={handleSubmitUserInfo}
      className="flex flex-col items-center justify-center h-auto py-3"
    >
      <div className="flex items-center py-3">
        <label className="text-xl w-[200px]">
          Your name: &nbsp;<span className="text-red-600">(*)</span>
        </label>
        <input
          className=" px-5 py-[22px] text-body-1 leading-5 outline-none border-[1px] focus:border-black"
          type="text"
          placeholder="Your name here..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex items-center py-3">
        <label className="text-xl w-[200px]">
          Email: <span className="text-red-600">(*)</span>
        </label>
        <input
          disabled
          className="px-5 py-[22px] text-body-1 leading-5 outline-none border-[1px] focus:border-black"
          type="text"
          placeholder="Email here..."
          value={email}
        />
      </div>
      <div className="flex items-center py-3">
        <label className="text-xl w-[200px]">
          Usename: <span className="text-red-600">(*)</span>
        </label>
        <input
          className="px-5 py-[22px] text-body-1 leading-5 outline-none border-[1px] focus:border-black"
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex items-center py-3">
        <label className="text-xl w-[200px]">
          Password: <span className="text-red-600">(*)</span>
        </label>
        <input
          className="px-5 py-[22px] text-body-1 leading-5 outline-none border-[1px] focus:border-black"
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center py-3">
        <label className="text-xl w-[200px]">
          Confirm password: <span className="text-red-600">(*)</span>
        </label>
        <input
          className="px-5 py-[22px] text-body-1 leading-5 outline-none border-[1px] focus:border-black"
          type="password"
          placeholder="Confirm password..."
          ref={confirmPassword}
        />
      </div>
      <div className="flex items-center py-3">
        <label className="text-xl w-[200px]">Avatar: &nbsp;</label>
        <input
          className="px-5 py-[22px] text-body-1 leading-5 outline-none border-[1px] focus:border-black"
          type="text"
          placeholder="Avatar..."
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center">
        <Button
          type="submit"
          title="Register"
          variant="primary"
          className="w-[250px] pt-[15px] pb-[15px] pr-[25px] pl-[25px] hover:bg-teal-700 active:bg-teal-900"
        />
      </div>
    </form>
  );
}
