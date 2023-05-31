import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { userApi } from "../api/user.api";
import { useParams } from "react-router-dom";
import Input from "../components/form/input/input";
import Button from "../components/form/button/button";
import moment from "moment";

/* This is a test for user setting, which will be deleted after complete redux store */
const test: IUser = {
  name: "trung",
  email: "maihuynhtrung",
  password: "123456",
  avatar: "./user1.jpg",
  birthday: "2022-03-25",
  address: {
    _id: "string",
    default: true,
    district: "Khu pho 6, Linh Trung, Thu Duc, Thanh pho Ho Chi Minh",
    phone: "0987654321",
    province: "Thu Duc",
    receiver: "string",
    specificAddress: "string",
    ward: "Khu pho 6",
  },
};

export default function AccountSettingPage() {
  const [userInfo, setUserInfo] = useState<IUser>(test);
  const [userAvatar, setUserAvatar] = useState<string>(userInfo.avatar);
  const [isChange, setIsChange] = useState<boolean>(false);
  const avatarRef = useRef<HTMLInputElement>(null);
  const { id } = useParams();
  const handleGetUserInfo = async () => {
    if (id) {
      const data = await userApi.getUserInfo();
      setUserInfo(data);
    }
  };

  const handleChange = () => {
    setIsChange(true);
  };

  const handleConfirm = () => {
    setIsChange(false);
  };

  const handleChangeAvatar = () => {
    if (avatarRef.current) {
      avatarRef.current.click();
    }
  };

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
  };

  const handleChangeBirthday = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
  };

  const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
  };

  const handleAvatarInput = (event: ChangeEvent<HTMLInputElement>) => {
    const file = avatarRef.current?.files?.[0];
    if (file) {
      setUserAvatar(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-heading-7">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="w-[100px] h-[100px] flex rounded-full overflow-hidden my-[30px]">
          <img
            src={userAvatar}
            alt="avatar"
            className="inline-block object-cover"
          />
        </div>
        <form className="flex justify-end w-[300px]">
          <input
            type="file"
            accept=".png"
            ref={avatarRef}
            style={{ display: "none" }}
            onChange={handleAvatarInput}
          />
          <Button
            title="Change your photo"
            variant="secondary"
            className="px-2 py-3 text-heading-10"
            onClick={handleChangeAvatar}
          />
        </form>
      </div>

      <form className="space-y-[30px] bg-scarlet px-7 py-[34px] h-fit">
        <div className="flex">
          <div className="mr-4 flex flex-col justify-between">
            <div className="flex items-center mb-4">
              <h3 className="w-[100px] leading-[35px] font-bold mr-[50px]">
                Name
              </h3>
              <div className="flex items-center">
                {isChange ? (
                  <Input
                    variation="outlined"
                    placeholder={userInfo.name}
                    className="w-[300px] h-[35px]"
                  />
                ) : (
                  <p className="text-philippine-gray">{userInfo.name}</p>
                )}
              </div>
            </div>
            <div className="flex items-center mb-4">
              <h3 className="w-[100px] leading-[35px] font-bold mr-[50px]">
                Email
              </h3>
              <div className="flex items-center">
                {isChange ? (
                  <Input
                    variation="outlined"
                    placeholder={userInfo.email}
                    className="w-[300px] h-[35px]"
                  />
                ) : (
                  <p className="text-philippine-gray">{userInfo.email}</p>
                )}
              </div>
            </div>
            <div className="flex items-center mb-4">
              <h3 className="w-[100px] leading-[35px] font-bold mr-[50px]">
                Birthday
              </h3>
              <div className="flex items-center">
                {isChange ? (
                  <input
                    type="date"
                    placeholder={moment(userInfo.birthday)
                      .format("L")
                      .toString()}
                    className={`w-[300px] h-[35px] px-5 py-[22px] text-body-1 leading-5 outline-none 
                    border-[1px] border-light-gray bg-transparent text-philippine-gray`}
                    onChange={handleChangeBirthday}
                  />
                ) : (
                  <p className="text-philippine-gray">
                    {moment(userInfo.birthday).format("L")}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center mb-[50px]">
              <h3 className="w-[100px] leading-[35px] font-bold mr-[50px]">
                Address
              </h3>
              <div>
                {isChange ? (
                  <React.Fragment>
                    <Input
                      variation="outlined"
                      placeholder={userInfo.address.phone}
                      className="w-[300px] h-[35px] mb-4"
                    />
                    <Input
                      variation="outlined"
                      placeholder={`${userInfo.address.district}`}
                      className="w-[300px] h-[35px]"
                    />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <p className="text-philippine-gray mb-4">
                      {userInfo.address.phone}
                    </p>
                    <p className="text-philippine-gray">
                      {`${userInfo.address.district}`}
                    </p>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end items-start">
            {isChange ? (
              <React.Fragment></React.Fragment>
            ) : (
              <Button
                title="Change your info"
                variant="secondary"
                className="px-2 py-3 text-heading-10"
                onClick={handleChange}
              />
            )}
          </div>
        </div>
        {isChange ? (
          <div className="flex justify-end">
            <Button
              title="Confirm"
              variant="primary"
              className="py-3 font-medium text-white px-14"
              onClick={handleConfirm}
            />
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </form>
    </div>
  );
}
