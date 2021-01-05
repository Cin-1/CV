import React, { useState } from "react";
import useForm, { reset } from "./useForm";
import validate from "./validate";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import styled from "@emotion/styled";

const DivP = styled.div`
  background-color: black;
  padding-bottom: 10%;
  padding-top: 5%;
`;
const Title = styled.h1`
  position: relative;
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 60px;
  padding-bottom: 20px;
  color: white;

  :before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 195px;
    height: 3px;
    background: #111;
    transform: translateX(-50%);
  }

  :after {
    content: "Get in Touch";
    position: absolute;
    bottom: -12px;
    left: 50%;
    font-size: 20px;
    color: crimson;
    padding: 5px;
    background: black;
    transform: translateX(-50%);
  }
`;

const Sub2 = styled.p`
  font-family: "Ubuntu", sans-serif;
  color: white;
  text-align: start;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Formu = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: crimson;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
`;

const Text = styled.textarea`
  display: block;
  width: 100%;
  background-color: #d6d6d6;
  min-height: 100px;
  resize: none;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  background-color: #d6d6d6;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
const Boton = styled.input`
  font-family: "Ubuntu", sans-serif;
  display: block;
  width: 100%;
  display: inline-block;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(99, 92, 92, 1) 48%,
    rgba(186, 97, 115, 1) 100%
  );
  padding: 0.5em 3em;
  border-radius: 5px;
  border: 0.16em solid #030000;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  color: black;
  text-align: center;
  transition: all 0.15s;
  &:hover {
    color: #dddddd;
    cursor: pointer;
    border-color: #dddddd;
  }
`;
export const Error = styled.p`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
  font-family: "Ubuntu", sans-serif;
`;

const Toast = Swal.mixin({
  toast: true,
  position: "start-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
const Form = () => {
  const submit = () => {
    let templateParams = {
      from_name: values.email,
      to_name: "cinthiapardos@gmail.com",
      subject: values.name,
      message: values.msj,
    };
    emailjs
      .send(
        "service_oaz8vle",
        "template_wo294ol",
        templateParams,
        "user_Ci5YDaJ2f4SFSXgKJX3C2"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          Toast.fire({
            icon: "success",
            title: "Se enviaron los datos. Muchas gracias!",
          });
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    reset();
  };
  const { values, handleChange, handleSubmit, errors, reset } = useForm(
    submit,
    validate
  );

  const email = values.email;
  const comment = values.msj;
  return (
    <DivP>
      <Title>Contact me</Title>
      <Wrap>
        <Formu onSubmit={(e) => handleSubmit(e)}>
          <Sub2>Gracias por contactarme te respondere a la brevedad!</Sub2>
          <div>
            <Input
              type="text"
              placeholder="Tu nombre"
              name="name"
              value={values.name}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <Error>{errors.name}</Error>}
          </div>
          <div>
            <Input
              type="text"
              placeholder="Tu Email"
              name="email"
              value={values.email}
              onChange={(e) => handleChange(e)}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </div>
          <div>
            <div>
              <Text
                placeholder="Tu Mensaje"
                name="msj"
                rows="10"
                value={values.msj}
                onChange={(e) => handleChange(e)}
              ></Text>
            </div>
            {errors.msj && <Error>{errors.msj}</Error>}
          </div>
          <div>
            <Boton type="submit" value="Enviar" />
          </div>
        </Formu>
      </Wrap>
    </DivP>
  );
};

export default Form;
