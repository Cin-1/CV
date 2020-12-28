import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validate";

const Form = () => {
  const submit = () => {
    console.log("enviando....");
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate
  );

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
