import React, { Fragment } from "react";

export default function CC() {
    return (
        <Fragment>
            <div class="container-fluid">
                <br />
                <div class="col-12">
                    <section>
                        <div class="row justify-content-center">
                            <div class="col-3">
                                <br /><br />
                                <form class="w3-container">
                                    <div class="row justify-content-left">
                                        <h4>LLENE TODOS LOS CAMPOS</h4>
                                        <br /><br />
                                        <div class="col-9">
                                            <input class="inpt-ca" type="text" placeholder="Nombre(s)" />
                                        </div>
                                        <br /><br />
                                        <div class="col-9">
                                            <input class="inpt-ca" type="text" placeholder="Apellido paterno" />
                                        </div>
                                        <br /><br />
                                        <div class="col-9">
                                            <input class="inpt-ca" type="password" placeholder="Apellido materno" />
                                        </div>
                                        <br /><br />
                                        <div class="col-9">
                                            <input class="inpt-ca" type="date" placeholder="Fecha de nacimiento" />
                                        </div>
                                        <br /><br />
                                        <div class="col-9">
                                            <input class="inpt-ca" type="tel" placeholder="Teléfono" />
                                        </div>
                                        <br /><br />
                                        <div class="col-9">
                                            <input class="inpt-ca" type="email" placeholder="Email" />
                                        </div>
                                        <br /><br />
                                        <div class="col-9">
                                            <input class="inpt-ca" type="password" placeholder="Contraseña" />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row justify-content-left">
                                        <div class="col-9">
                                            <div class="d-grid gap-2">
                                                <button id="btnCreateAccnt" class="btn btn-danger btn-lg" >Crear cuenta</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-3">
                                <div class="row justify-content-center">
                                    <div class="col-12">
                                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                        <h1>Creación de cuenta</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br /><br />
                    </section>
                </div>
            </div>
        </Fragment>
    );
}
















