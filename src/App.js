import React, { Fragment } from "react";
import Form from "./Components/Contact/Form";
import Navegation from "./Components/layout/Navegation";
import Home from "./Components/layout/Home";

function App() {
  return (
    <Fragment>

      <Navegation/>
      <br/>
      <Home/>
      <br/>
      <Form />

    </Fragment>
  );
}

export default App;
