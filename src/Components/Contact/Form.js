import React, { useState } from "react";
import useForm, { reset } from "./useForm";
import validate from "./validate";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

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
    <div>
      <h1>Form Contacto</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="text"
            placeholder="Tu nombre"
            name="name"
            value={values.name}
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Tu Email"
            name="email"
            value={values.email}
            onChange={(e) => handleChange(e)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <textarea
            placeholder="Tu Mensaje"
            name="msj"
            rows="10"
            value={values.msj}
            onChange={(e) => handleChange(e)}
          ></textarea>
          {errors.msj && <p>{errors.msj}</p>}
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default Form;
