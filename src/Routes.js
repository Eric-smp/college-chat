import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Welcome";
import Sobre from "./components/Cadastrar";
import Usuario from "./components/EsqueceuSenha";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Sobre }  path="/sobre" />
           <Route component = { Usuario }  path="/usuario" />
       </BrowserRouter>
   )
}

export default Routes;