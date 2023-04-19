import React from "react";
import Rating from "@mui/material/Rating";
import Star from "../../icon/star";
import { styled } from "@mui/material";
import TextArea from "../../form/input/text-area";
import Button from "../../form/button/button";
import { Controller, useForm } from "react-hook-form";
import clsx from "clsx";

interface FormValue {
  rate: number;
  review: string;
}

const StyledRating = styled(Rating)({
  "& .MuiRating-icon": {
    marginRight: "12px",
  },
});

export default function FormComment() {
  const { register, control, handleSubmit } = useForm<FormValue>();

  const onSubmit = (value: FormValue) => {
    console.log("value: ", value);
    console.log(typeof value.rate);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="mb-10 text-center text-heading-5">Write your review</h3>
      <div className="mb-5">
        <h5 className={clsx("mb-5 text-heading-7")}>Your Rating</h5>
        <Controller
          name={"rate"}
          defaultValue={0}
          rules={{
            required: { value: true, message: "Rate is required" },
            min: { value: 1, message: "Rate from 1 to 5 stars" },
          }}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error, invalid },
          }) => (
            <>
              <StyledRating
                value={Number(value)}
                onChange={(e, newValue) => {
                  onChange(newValue);
                }}
                icon={<Star className="text-yellow" />}
                emptyIcon={
                  <Star
                    className={clsx(
                      "text-light-gray",
                      invalid && "text-red-accent"
                    )}
                  />
                }
              />
              {error && (
                <p className={clsx("text-body-3", error && "text-red-500")}>
                  {error.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <TextArea
        label="Your Review"
        placehodler="Write your review here...."
        className="w-full text-body-3 py-[13px] px-[22px]"
        labelClassName="text-heading-7"
      />
      <Button
        type="submit"
        title="Submit"
        variant="primary"
        className="py-[13px] px-[50px] text-[16px] mt-[30px]"
      />
    </form>
  );
}
