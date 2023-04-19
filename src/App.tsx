import React from "react";
import Input from "./components/form/input/input";
import { useForm } from "react-hook-form";
import Button from "./components/form/button/button";
import Accordion from "./components/ui/Accordion/Accordion";
import FormComment from "./components/ui/form/form-comment";

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

  return <FormComment />;
}

export default App;
