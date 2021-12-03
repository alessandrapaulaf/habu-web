import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";

export default function ContactForm(): JSX.Element {
  return (
    <S.Form>
      <input placeholder="Your name" />
      <input placeholder="Your email" />
      <button>Send</button>
    </S.Form>
  );
}