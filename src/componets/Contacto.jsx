import { useState } from "react";

const Formulario = () => {

    const [Formulario, setFormulario] = useState({
        name: "",
        apellido:"",
        edad:"",
        correo:"",
        genero:"",
        numero:"",
        state: "",
        numerodoc:"",
        description: "",
       
    });
    const { name,apellido,edad,correo,genero,numero,state,numerodoc ,description, } = Formulario;

    const handleSubmit = (e) => {
        e.preventDefault();
       
    }
    const handleChange = (e) => {
        //const {name,description,state}=e.target;
        setFormulario({
            ...Formulario, [e.target.name]: e.target.value,
        })
    }
    return (
        <>
            <h1 className="text-white text-center">Registrate</h1>
            <br />
            <div className="container formulario gp-4">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text"
                        placeholder="Ingrese nombre"
                        className="form-control mb-2 forms"
                        name="name"
                        value={name}
                
                        onChange={handleChange} />
                    <input type="text"
                        placeholder="Ingrese apellido"
                        className="form-control mb-2 forms" 
                        name="apellido"
                        value={apellido}
                        onChange={handleChange} 
                        />
                    <input type="number"
                        placeholder="Ingrese edad"
                        className="form-control mb-2 forms" 
                        name="edad"
                        value={edad}
                        onChange={handleChange} 
                        />
                    <input type="email"
                        placeholder="Ingrese su correo"
                        className="form-control mb-2 forms" 
                        name="correo"
                        value={correo}
                        onChange={handleChange} 
                        />
                            <p className="text-white text-blond ">Genero</p>
                  <div className="genero">
                
                    <input type="radio"
                        placeholder="masculino"
                        className="form-check-input" 
                        name="genero"
                        value={genero}
                    
                        onChange={handleChange} 
                        />
                <label className="text-white form-check-label px-2">masculino</label>
                        <hr />
                    <input type="radio"
                        placeholder="femeninio"
                        className="form-check-input" 
                        name="genero"
                        value={genero}
                        onChange={handleChange} 
                        />
                        <label className="text-white form-check-label px-2">femenino</label></div>
                    
                        <input type="text"
                        placeholder="Ingrese su numero"
                        className="form-control mb-2 forms" 
                        name="numero"
                        value={numero}
                        onChange={handleChange} 
                        />
                        <p className="text-white">tipo de documento</p>
                        <select className="form-control mb-2 forms"
                        name="state"
                        value={state}
                        onChange={handleChange} >
                        <option value="cedula">Cedula</option>
                        <option value="T.I">Targeta de identidad</option>
                        <option value="pasaporte">Pasaporte</option>
                    </select>
                    <input type="text"
                        placeholder="Ingrese su numero de identificacion"
                        className="form-control mb-2 forms" 
                        name="numerodoc"
                        value={numerodoc}
                        onChange={handleChange} 
                        />
                
                    <textarea placeholder="¿por que buscas asesoria? (opcional)"
                        className="form-control mb-2 forms"
                        name="description"
                        value={description}
                        onChange={handleChange}
                    ></textarea>
                   
                   
                   
                   
                  <div className="d-flex justify-content-center my-5">
                     <button type="submit" className="botonF ">Enviar</button>
                  </div>
                </form>
            </div>
        </>
    )
}
export default Formulario
