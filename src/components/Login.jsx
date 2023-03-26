import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft, faCheckSquare} from "@fortawesome/free-solid-svg-icons";

export default function Login() {
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
                        <div class="col-5">
                            <br /><br /><br />
                            <div class="card">
                                <form class="w3-container">
                                    <div class="row justify-content-center">
                                        <div class="col-5">
                                            <img src="user-icn.png" width="250" height="250" alt="" />
                                        </div>
                                        <div class="col-8">
                                            <input type="text" placeholder="Email, teléfono, usuario" />
                                        </div>
                                        <br /><br />
                                        <div class="col-8">
                                            <input type="password" placeholder="Contraseña" />
                                        </div>
                                        <br /><br />
                                        <div class="col-5">
                                            <button class="login" >Iniciar sesion</button>
                                            &nbsp;&nbsp;&nbsp;
                                            <a href="/createaccount" class="createAccount">Crear cuenta</a>
                                        </div>
                                        <br /><br /><br />
                                        <div class="col-8">
                                            <div style={{ fontSize: "1em", color: "#006BE4" }}>
                                                <FontAwesomeIcon icon={faCheckSquare} />&nbsp;&nbsp;&nbsp;{"Recordar"}
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;
                                                <a href="/">¿Olvidaste tu contraseña?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </form>
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




