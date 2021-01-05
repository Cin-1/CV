import React, { Fragment } from "react";
import Form from "./Components/Contact/Form";
import Navegation from "./Components/layout/Navegation";
import Home from "./Components/layout/Home";
import AboutMe from "./Components/layout/AboutMe";
import Footer from "./Components/Contact/Footer";

function App() {
  return (
    <Fragment>
      <Navegation />
      <Home />
      <AboutMe />
      <Form />
      <Footer />
    </Fragment>
  );
}

export default App;
