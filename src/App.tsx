import React from "react";
import Input from "./components/form/input/input";
import { useForm } from "react-hook-form";
import Button from "./components/form/button/button";
import Accordion from "./components/ui/Accordion/Accordion";

interface FormValue {
  from: number;
  to: number;
}

function App() {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValue>({
    defaultValues: {
      from: 0,
      to: 0,
    },
  });

  const onSubmit = (value: FormValue) => {
    console.log("value: ", value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        name="from"
        variation="outlined"
        error={errors.from?.message}
        type="number"
        option={{
          required: { value: true, message: "Enter number" },
          min: { value: 1, message: "Enter number greater than 1" },
        }}
        placeholder="0"
      />
      <Input
        register={register}
        name="to"
        error={errors.to?.message}
        type="number"
        variation="outlined"
        option={{
          required: { value: true, message: "Enter number" },
          min: { value: 1, message: "Enter number greater than 1" },
          validate: () =>
            Number(getValues("to")) >= Number(getValues("from")) ||
            "To must be greater than From",
        }}
        placeholder="0"
      />
      <Button title="Submit" variant="primary" type="submit" />
      <Accordion />
    </form>
  );
}

export default App;
