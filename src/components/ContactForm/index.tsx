import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";

interface IContact {
  email: string;
  name: string;
}

export default function ContactForm(): JSX.Element {
  const { 
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IContact>();

  const onSubmit = useCallback(async (data: IContact, e) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({name: data.name, email: data.email}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    };
  
     await fetch('https://api.jungledevs.com/api/v1/challenge-newsletter/', requestOptions);
  }, []);

  return (
    <S.Form>
      <input
        {...register("name", {required: true})}
        placeholder={errors && errors.name ? "Required field!" : "Your name"}
        className={errors && errors.name ? "error" : ""}
      />
      <input
        {...register("email", {required: true})}
        placeholder={errors && errors.name ? "Required field!" : "Your email"}
        className={errors && errors.email ? "error" : ""}
      />
      <button onClick={handleSubmit(onSubmit)}>Send</button>
    </S.Form>
  );
}