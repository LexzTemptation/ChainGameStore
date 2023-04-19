import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CC() {
    
    const handlerCA = () => {

        let nombre = document.getElementById("nombre").value
        let apPat = document.getElementById("apPat").value
        let apMat = document.getElementById("apMat").value
        let edad = document.getElementById("edad").value
        let telefonoMov = document.getElementById("telefonoMov").value
        let telefonoCasa = document.getElementById("telefonoCasa").value
        let pais = document.getElementById("pais").value
        let colonia = document.getElementById("colonia").value
        let calle = document.getElementById("calle").value
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        let usuario = document.getElementById("usuario").value

        let data = {
            idCliente: 0,
            nombre: nombre,
            primerApellido: apPat,
            segundoApellido: apMat,
            edad: edad,
            telefonoMovil: telefonoMov,
            telefonoCasa: telefonoCasa,
            pais: pais,
            colonia: colonia,
            calle: calle,
            email: email,
            contrasenia: password,
            nombreUsuario: usuario,
            token: "vacio"  
        }

        fetch("http://localhost:8080/cliente/insertar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => console.log(res))

    }
    
    return (
        <Fragment>
            <div class="bdyLogin">
                <div class="container-fluid">
                    <br />
                    <div class="row justify-content-center">
                        <div class="col-8">
                            <div style={{ fontSize: "1em", color: "whitesmoke" }}>
                                <a href="/login"><FontAwesomeIcon icon={faArrowLeft} />{" Regresar"}</a>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="row justify-content-center">
                        <div class="col-10">
                            <div class="card" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                                <br /><br />
                                <div class="row justify-content-center">
                                    <div class="col-3">
                                        <h4>LLENE TODOS LOS CAMPOS</h4>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-7">
                                        <br /><br />
                                        <div>
                                            <div class="row justify-content-center">
                                                <br /><br />
                                                <div class="col">
                                                    <input id="nombre" class="inpt-ca" type="text" placeholder="Nombre(s)" />
                                                </div>
                                                <br /><br />
                                                <div class="col">
                                                    <input id="apPat" class="inpt-ca" type="text" placeholder="Apellido paterno" />
                                                </div>
                                                <br /><br />
                                                <div class="col">
                                                    <input id="apMat" class="inpt-ca" type="text" placeholder="Apellido materno" />
                                                </div>
                                            </div>
                                            <div class="row justify-content-center">
                                                <br /><br />
                                                <div class="col">
                                                    <input id="edad" class="inpt-ca" type="text" placeholder="Edad"/>
                                                </div>
                                                <br /><br />
                                                <div class="col">
                                                    <input id="telefonoCasa" class="inpt-ca" type="tel" placeholder="Teléfono de casa" />
                                                </div>
                                                <br /><br />
                                                <div class="col">
                                                    <input id="telefonoMov" class="inpt-ca" type="tel" placeholder="Teléfono movil" />
                                                </div>
                                                <br /><br />
                                                <div class="col-12">
                                                    <div class="row justify-content-center">
                                                        <div class="col">
                                                            <input id="pais" class="inpt-ca" type="text" placeholder="País" />
                                                        </div>
                                                        <div class="col">
                                                            <input id="colonia" class="inpt-ca" type="text" placeholder="Colonia" />
                                                        </div>
                                                        <div class="col">
                                                            <input id="calle" class="inpt-ca" type="text" placeholder="Calle" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br /><br />
                                                <div class="col-12">
                                                    <div class="row justify-content-center">
                                                        <div class="col">
                                                            <input id="email" class="inpt-ca" type="" placeholder="Email" />
                                                        </div>
                                                        <div class="col">
                                                            <input id="password" class="inpt-ca" type="password" placeholder="Contraseña" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br /><br />
                                                <div class="row justify-content-center">
                                                    <br /><br />
                                                    <div class="col">
                                                        <input id="usuario" class="inpt-ca" type="text" placeholder="Nombre de usuario" />
                                                    </div>
                                                </div>
                                                <br /><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br /><br />
                                <div class="row justify-content-center">
                                    <div class="col-3">
                                        <button onClick={handlerCA}  class="btnCreateAccnt" >Crear cuenta</button>
                                    </div>
                                </div>
                                <br /><br /><br /><br /><br />
                            </div> {/* card */}
                            <br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
















