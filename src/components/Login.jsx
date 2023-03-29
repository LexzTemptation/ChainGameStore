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
                        <div class="col-7">
                            <br /><br />
                            <div class="card">
                                <div class="row justify-content-center">
                                    <div class="col-4">
                                        <img src="user-icn.png" width="245" height="245" alt="" />
                                    </div>
                                </div>
                                <form>
                                    <div class="row justify-content-center">
                                        <div class="col-5">
                                            <input type="text" placeholder="Email, teléfono, usuario" />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row justify-content-center">
                                        <div class="col-5">
                                            <input type="password" placeholder="Contraseña" />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row justify-content-center">
                                        <br /><br />
                                        <div class="col-4">
                                            <button class="login" >Iniciar sesion</button>
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




