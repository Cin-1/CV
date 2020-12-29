import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validate";
import Swal from "sweetalert2";

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
  const [isSent, setIsSent] = useState(false);
  const submit = () => {
    console.log("enviando....");
    fetch(`https://hooks.zapier.com/hooks/catch/9191970/ocq863q/`, {
      method: "POST",
      body: JSON.stringify({ email, comment, key: feature }).then(() => setIsSent(true))};
    Toast.fire({
      icon: "success",
      title: "Se enviaron los datos. Muchas gracias!",
    });
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
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
