import React, { useState } from "react";
import { authenticateApi } from "../../../api/authenticate.api";
import { useNavigate } from "react-router-dom";
import Button from "../../form/button/button";
import { toast } from "react-hot-toast";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [verifyCode, setVerifyCode] = useState<string>("");
  const [inputVerifyCode, setInputVerifyCode] = useState<string>("");
  const navigate = useNavigate();
  const handleSendCode = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const request = {
        email,
      };
      if (email === "") {
        toast.error("Email is empty");
        return;
      }
      const emailRes = await authenticateApi.sendCode(request);
      setIsEmail(true);
      setVerifyCode(emailRes);
    } catch (error) {
      toast.error("Something went wrong!!");
    }
  };
  const handleVerifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (verifyCode === inputVerifyCode) {
      navigate("/register/info", { state: { email } });
    } else {
      toast.error("Verify code is incorrect!!");
    }
  };
  return (
    <div>
      {!isEmail ? (
        <form
          onSubmit={handleSendCode}
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
          <Button
            type="submit"
            title="Send Code"
            variant="primary"
            className="w-[250px] pt-[15px] pb-[15px] pr-[25px] pl-[25px] hover:bg-teal-700 active:bg-teal-900"
          ></Button>
        </form>
      ) : (
        <form
          onSubmit={handleVerifyCode}
          className="flex flex-col items-center justify-center h-[400px]"
        >
          <label className="text-2xl py-2">Nhập code</label>
          <input
            className="w-[25vw] mb-[20px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] border-2 focus:border-black"
            type="text"
            placeholder="Nhập code xác thực"
            value={inputVerifyCode}
            onChange={(e) => setInputVerifyCode(e.target.value)}
          ></input>
          <Button
            type="submit"
            title="Verify"
            variant="primary"
            className="w-[250px] pt-[15px] pb-[15px] pr-[25px] pl-[25px] hover:bg-teal-700 active:bg-teal-900"
          ></Button>
        </form>
      )}
    </div>
  );
}
