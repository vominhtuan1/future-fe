import React, { useState } from "react";
import nodemailer from "nodemailer";
import { authenticateApi } from "../../../api/authenticate.api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  // tạo mã code random
  function randomCode() {
    let result = "";
    const numbers = "0123456789";
    const numbersLength: number =
      5 + Math.floor((Math.random() * numbers.length) / 3);
    for (let i = 0; i < numbersLength; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
  }
  async function sendVerificationCode(email: string, code: string) {
    const request = {
      email,
      code,
    };
    const res = await authenticateApi.sendCode(request);
    console.log(res);
  }
  const sendCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = randomCode();
    sendVerificationCode(email, code);
  };
  return (
    <div>
      <form
        onSubmit={sendCode}
        action=""
        className="flex flex-col items-center justify-center h-[400px]"
      >
        <label className="text-2xl py-2">Nhập email để gửi mã xác thực</label>
        <input
          className="w-[25vw] mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black"
          type="text"
          placeholder="Nhập Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button
          type="submit"
          className="w-[250px] pt-[15px] pb-[15px] pr-[25px] pl-[25px] rounded bg-teal-400 text-white hover:bg-teal-700 active:bg-teal-900"
        >
          Gửi Mã
        </button>
      </form>
    </div>
  );
}
