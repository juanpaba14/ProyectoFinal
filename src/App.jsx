
import Formulario from "./componets/Contacto";
import Inicio from "./componets/Inicio";

import NavBar from "./componets/Navbar";
import { Route, Routes } from "react-router-dom";
import Blog from "./componets/blog";
import Fotter from "./componets/Fotter";

const App = () => {
  return (
    <div>
      
      <NavBar />

      <hr />

      <Routes>
        <Route element={<Inicio />} path="/">Home</Route>
        <Route element={<Blog/>} path="/informacion">Informacion</Route>
        <Route element={<Formulario/>} path="/contacto">Informacion</Route>


      </Routes>
<Fotter/>
    </div>
  )
}
export default App;