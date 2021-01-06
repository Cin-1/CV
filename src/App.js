import React, { Fragment } from "react";
import Form from "./Components/Contact/Form";
import Navegation from "./Components/layout/Navegation";
import Home from "./Components/layout/Home";
import Footer from "./Components/Contact/Footer";
import Proyects from "./Components/layout/proyects";
import AboutMe from "./Components/layout/AboutMe";
import Resume from "./Components/layout/Resume";

function App() {
  return (
    <Fragment>
      <Navegation />
      <Home />
      <AboutMe />
      <Resume />
      <Proyects />
      <Form />
      <Footer />
    </Fragment>
  );
}

export default App;
