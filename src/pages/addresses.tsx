import React, { useEffect, useState } from "react";
import AddressCard from "../components/ui/card/address-card";
import Button from "../components/form/button/button";
import Input from "../components/form/input/input";
import Select, { IOption } from "../components/form/select/select";
import { useForm } from "react-hook-form";
import { adminstrative } from "../constants/adminstrative";

interface FormValue {
  name: string;
  phone: string;
  province: string;
  district: string;
  ward: string;
  specfificAddress: string;
}

export default function Addresses() {
  const [selectedProvince, setSelectedProvince] = useState<string>();
  const [selectedDistrict, setSelectedDistrict] = useState<string>();
  const [selectedWard, setSelectedWard] = useState<string>();

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
  } = useForm<FormValue>();

  const onSubmit = (value: FormValue) => {
    console.log("value: ", value);
  };

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
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="px-[75px]">
      <h3 className="text-center text-heading-3 mt-[50px]">Your Addresses</h3>

      <div className="flex justify-end">
        <Button
          title="Add Address"
          variant="primary"
          className="px-6 py-2 mt-20"
        />
      </div>

      <div className="grid grid-cols-2 mt-4 gap-x-4">
        <AddressCard />
        <AddressCard />
      </div>
      <div className="mt-24 space-y-8">
        <h3 className="text-heading-6">Add New Address</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <Input
            register={register}
            name="name"
            variation="outlined"
            className="w-full"
            error={errors.name?.message}
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
            error={errors.specfificAddress?.message}
            placeholder="Write your specific address..."
            variation="outlined"
          />

          <Button
            className="col-start-2 py-5"
            title="Submit"
            type="submit"
            variant="primary"
          />
        </form>
      </div>
    </div>
  );
}
