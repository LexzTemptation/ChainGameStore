import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default function Login({setCurrentClient}) {

    const handlerLogin = () => {

        let email = document.getElementById("email").value
        let password = document.getElementById("password").value

        let data = {
            userName: email,
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
            window.localStorage.setItem("cliente", JSON.stringify(cliente))
        })


    }

    return (
        <div class="bdyLogin">
            <div class="container-fluid">
                <br />
                <div class="row justify-content-center">
                    <div class="col-8">
                        <div style={{ fontSize: "1em", color: "whitesmoke" }}>
                            <a href="/"><FontAwesomeIcon icon={faArrowLeft} />{" Regresar"}</a>
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
                                        <h2>Iniciar sesion</h2>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-4">
                                        <img src="user-icn.png" width="245" height="245" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div class="row justify-content-center">
                                        <div class="col-5">
                                            <input type="text" placeholder="Email" id="email" />
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
                                            <button class="login" onClick={handlerLogin}>Iniciar sesion</button>
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




