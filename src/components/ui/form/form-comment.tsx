import React from "react";
import Rating from "@mui/material/Rating";
import Star from "../../icon/star";
import { styled } from "@mui/material";
import TextArea from "../../form/input/text-area";
import Button from "../../form/button/button";
import { Controller, useForm } from "react-hook-form";
import clsx from "clsx";
import { useParams } from "react-router-dom";
import { commentApi } from "../../../api/comment.api";

interface FormValue {
  rate: number;
  review: string;
}

const StyledRating = styled(Rating)({
  "& .MuiRating-icon": {
    marginRight: "12px",
  },
});

interface Props {
  defaultValue?: FormValue;
  onSubmit: (value: FormValue) => void;
}

export default function FormComment({ defaultValue, onSubmit }: Props) {
  const { id } = useParams();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: defaultValue,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="mb-10 text-center text-heading-6">Write your review</h3>

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
          <div className="mb-5">
            <h5
              className={clsx(
                "mb-5 text-heading-8",
                invalid && "text-red-accent"
              )}
            >
              Your Rating
            </h5>
            <StyledRating
              value={Number(value)}
              onChange={(e: any, newValue: any) => {
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
          </div>
        )}
      />
      <TextArea
        label="Your Review"
        placehodler="Write your review here...."
        className="w-full text-body-3 py-[13px] px-[22px]"
        labelClassName="text-heading-8"
        register={register}
        name="review"
        option={{ required: { value: true, message: "Review is required" } }}
        error={errors.review?.message}
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
