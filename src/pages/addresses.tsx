import React, { Fragment, useEffect, useState } from "react";
import AddressCard from "../components/ui/card/address-card";
import Button from "../components/form/button/button";
import Input from "../components/form/input/input";
import Select, { IOption } from "../components/form/select/select";
import { useForm } from "react-hook-form";
import { adminstrative } from "../constants/adminstrative";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectAddresses } from "../redux/reducers/address-slice";
import {
  createAddress,
  deleteAddress,
  getAddresses,
  updateAddress,
} from "../redux/actions/address-action";
import RadioButton from "../components/form/radio-button/radio-button";
import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";

interface FormValue {
  phone: string;
  province: string;
  district: string;
  ward: string;
  specificAddress: string;
  receiver: string;
  default: string;
}

export default function Addresses() {
  const addresses = useAppSelector(selectAddresses).addresses;
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedProvince, setSelectedProvince] = useState<string>();
  const [selectedDistrict, setSelectedDistrict] = useState<string>();
  const [selectedWard, setSelectedWard] = useState<string>();
  const [selectedAddress, setSelectedAddress] = useState<IAddress>();
  const [isDefault, setIsDefault] = useState<string>("false");
  const [isOpen, setIsOpen] = useState(false);

  const availabelDistricts = adminstrative.find(
    (item) => item.provinceName === selectedProvince
  );

  const availableWards = availabelDistricts?.districts.find(
    (item) => item.districtName === selectedDistrict
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    getValues,
  } = useForm<FormValue>();

  const onSubmit = (value: FormValue) => {
    console.log("value: ", value);
    if (isEdit) {
      dispatch(
        updateAddress({
          _id: selectedAddress?._id,
          default: value.default === "true" ? true : false,
          district: value.district,
          phone: value.phone,
          province: value.province,
          receiver: value.receiver,
          specificAddress: value.specificAddress,
          ward: value.ward,
        })
      );
    } else {
      dispatch(createAddress(value));
    }
  };

  const handleEditClick = (value: IAddress) => () => {
    setValue("province", value.province);
    setValue("district", value.district);
    setValue("phone", value.phone);
    setValue("receiver", value.receiver);
    setValue("specificAddress", value.specificAddress);
    setValue("ward", value.ward);
    setValue("default", value.default ? "true" : "false");
    setSelectedProvince(value.province);
    setSelectedDistrict(value.district);
    setSelectedWard(value.ward);
    setIsDefault(value.default ? "true" : "false");
    setIsEdit(true);
    setSelectedAddress(value);

    handleScroll();
  };

  const handleAddNewClick = () => {
    setValue("province", "");
    setValue("district", "");
    setValue("phone", "");
    setValue("receiver", "");
    setValue("specificAddress", "");
    setValue("ward", "");
    setValue("default", "false");
    setSelectedProvince(undefined);
    setSelectedDistrict(undefined);
    setSelectedWard(undefined);
    setIsDefault("false");
    setIsEdit(false);
    setSelectedAddress(undefined);

    handleScroll();
  };

  const handleScroll = () => {
    const element = document.getElementById("create-and-update");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenModel = (address: IAddress) => () => {
    setSelectedAddress(address);
    setIsOpen(true);
  };

  const handleCloseModel = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    if (selectedAddress) {
      dispatch(deleteAddress(selectedAddress._id)).unwrap();
    }
    handleCloseModel();
  };

  useEffect(() => {
    dispatch(getAddresses()).unwrap();
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      switch (name) {
        case "province":
          setValue("district", "");
          setValue("ward", "");
          setSelectedDistrict("");
          setSelectedWard("");
          break;
        case "district":
          setValue("ward", "");
          setSelectedWard("");
          break;
        case "default":
          setIsDefault(getValues("default"));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="px-[75px]">
      <h3 className="text-center text-heading-3 mt-[50px]">Your Addresses</h3>

      <div className="flex justify-end">
        <Button
          onClick={handleAddNewClick}
          title="Add Address"
          variant="primary"
          className="px-6 py-2 mt-20"
        />
      </div>

      <div className="grid grid-cols-2 mt-4 gap-x-4">
        {addresses.length > 0 &&
          addresses.map((item) => (
            <AddressCard
              onEditClick={handleEditClick(item)}
              onDeleteClick={handleOpenModel(item)}
              address={item}
              key={item._id}
            />
          ))}
      </div>
      <div id="create-and-update" className="mt-24 space-y-8">
        <h3 className="text-heading-6">
          {isEdit ? "Edit Address" : "Add New Address"}
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <Input
            register={register}
            name="receiver"
            variation="outlined"
            className="w-full"
            error={errors.receiver?.message}
            option={{ required: { value: true, message: "Fill out the name" } }}
            label="Name of receiver"
            placeholder="John"
          />
          <Input
            register={register}
            name="phone"
            variation="outlined"
            error={errors.phone?.message}
            option={{
              required: { value: true, message: "Fill out phone number" },
            }}
            className="w-full"
            label="Phone of receiver"
            placeholder="0987654321"
          />
          <Select
            register={register}
            name="province"
            label="Province"
            placeholder="Select province"
            error={errors.province?.message}
            value={selectedProvince}
            rules={{ required: { value: true, message: "Select province" } }}
            options={adminstrative.map((item) => ({
              value: item.provinceName,
              label: item.provinceName,
            }))}
            className="w-full"
            onChange={(value: string) => setSelectedProvince(value)}
          />
          <Select
            register={register}
            label="District"
            placeholder="Select district"
            name="district"
            error={errors.district?.message}
            value={selectedDistrict}
            rules={{ required: { value: true, message: "Select district" } }}
            options={
              availabelDistricts?.districts.map((item) => ({
                value: item.districtName,
                label: item.districtName,
              })) || []
            }
            className="w-full"
            onChange={(value: string) => setSelectedDistrict(value)}
          />
          <Select
            register={register}
            label="Ward"
            placeholder="Select ward"
            name="ward"
            error={errors.ward?.message}
            value={selectedWard}
            rules={{ required: { value: true, message: "Select ward" } }}
            options={
              availableWards?.wards.map((item) => ({
                value: item.wardName,
                label: item.wardName,
              })) || []
            }
            className="w-full"
            onChange={(value: string) => setSelectedWard(value)}
          />

          <Input
            register={register}
            name="specificAddress"
            className="w-full"
            label="Specific Address"
            option={{
              required: { value: true, message: "Write your specific address" },
            }}
            error={errors.specificAddress?.message}
            placeholder="Write your specific address..."
            variation="outlined"
          />
          {isEdit && !selectedAddress?.default && (
            <div>
              <h3
                className={clsx(
                  "text-heading-7 mb-[15px]",
                  errors.default?.message && "text-red-500"
                )}
              >
                Default
              </h3>
              <div className="flex gap-x-4">
                {["true", "false"].map((item) => (
                  <RadioButton
                    key={item}
                    option={{
                      required: { value: true, message: "Is it default?" },
                    }}
                    name="default"
                    register={register}
                    defaultChecked={isDefault === item}
                    label={item}
                    value={item}
                  />
                ))}
              </div>
            </div>
          )}

          <Button
            className="col-start-2 py-5"
            title="Submit"
            type="submit"
            variant="primary"
          />
        </form>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Do you want to delete it?
                  </Dialog.Title>

                  <div className="mt-4 flex justify-end">
                    <Button
                      onClick={handleDelete}
                      className="px-6 py-2 bg-red-accent"
                      title="Yes"
                      variant="teritary"
                      type="button"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
