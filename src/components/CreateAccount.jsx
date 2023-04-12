import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CC() {
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
                                        <form>
                                            <div class="row justify-content-center">
                                                <br /><br />
                                                <div class="col">
                                                    <input class="inpt-ca" type="text" placeholder="Nombre(s)" />
                                                </div>
                                                <br /><br />
                                                <div class="col">
                                                    <input class="inpt-ca" type="text" placeholder="Apellido paterno" />
                                                </div>
                                                <br /><br />
                                                <div class="col">
                                                    <input class="inpt-ca" type="text" placeholder="Apellido materno" />
                                                </div>
                                            </div>
                                            <div class="row justify-content-center">
                                                <br /><br />
                                                <div class="col">
                                                    <input class="inpt-ca" type="date"/>
                                                </div>
                                                <br /><br />
                                                <div class="col">
                                                    <input class="inpt-ca" type="tel" placeholder="Teléfono" />
                                                </div>
                                                <br /><br />
                                                <div class="col-12">
                                                    <div class="row justify-content-center">
                                                        <div class="col">
                                                            <input class="inpt-ca" type="email" placeholder="Email" />
                                                        </div>
                                                        <div class="col">
                                                            <input class="inpt-ca" type="password" placeholder="Contraseña" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br /><br />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <br /><br />
                                <div class="row justify-content-center">
                                    <div class="col-3">
                                        <a href class="btnCreateAccnt" >Crear cuenta</a>
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
















