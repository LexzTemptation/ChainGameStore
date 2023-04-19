import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Login({setCurrentClient}) {

    const handlerLogin = () => {

        let usuario = document.getElementById("usuario").value
        let password = document.getElementById("password").value

        let data = {
            userName: usuario,
            password: password
        }
        
        fetch("http://localhost:8080/login/user", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(cliente => {
            setCurrentClient(cliente)
        })


    }

    return (
        <div class="bdyLogin">
            <div class="container-fluid">
                <br />
                <div class="row justify-content-center">
                    <div class="col-8">
                        <div >
                            <Link to={"/"} style={{ fontSize: "1em", color: "whitesmoke", textDecoration: "none" }}><FontAwesomeIcon icon={faArrowLeft} />{" Regresar "}</Link>
                        </div>
                    </div> 
                </div>
                <div class="col-12">
                    <div class="row justify-content-center">
                        <div class="col-7">
                            <br />
                            <div class="card" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
                                <br />
                                <div class="row justify-content-center">
                                    <div class="col-3">
                                        <h2 style={{ margin: "2px" }}>Iniciar sesion</h2>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-4">
                                        <img style={{margin: "7px"}} src="user-icn.png" width="245" height="245" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div class="row justify-content-center">
                                        <div class="col-5">
                                            <input type="text" placeholder="Usuario" id="usuario" />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row justify-content-center">
                                        <div class="col-5">
                                            <input type="password" placeholder="Contraseña" id="password" />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row justify-content-center">
                                        <br /><br />
                                        <div class="col-4">
                                            <Link to={"/"}><button class="login" onClick={handlerLogin}>Iniciar sesion</button></Link>
                                            &nbsp;&nbsp;
                                            <a href="/createaccount" class="createAccount">Crear cuenta</a>
                                        </div>
                                    </div>
                                        <br /><br />
                                    <div class="row justify-content-center">
                                        {/* <div class="col-2">
                                            <div style={{ fontSize: "1em", color: "#006BE4" }}>
                                                <FontAwesomeIcon icon={faCheckSquare} />&nbsp;&nbsp;&nbsp;{"Recordar"}
                                            </div>
                                        </div> */}
                                        <div class="col-3">
                                            <div style={{ fontSize: "1em", color: "#006BE4" }}>
                                                <a href="/">¿Olvidaste tu contraseña?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br />
                </div>
            </div>
            <br /><br />
        </div>
    );
}




