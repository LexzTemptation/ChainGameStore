import React, { Fragment } from "react";

export default function App()
{
    return (
    <Fragment>
            <nav class="navbar navbar-expand-lg bg-danger">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input id="searchnvr" class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="container-fluid">
                <br/>
                <div class="col-12">
                    <section>
                        <div class="row justify-content-center">
                            <div class="col-3">
                                <br/><br/><br/><br/><br/><br/><br/><br/>
                                <form class="w3-container">
                                    <div class="row justify-content-left">
                                        <div class="col-9">
                                            <input type="text" placeholder="Email, teléfono, usuario" />
                                        </div>
                                        <br /><br />
                                        <div class="col-9">
                                            <input type="password" placeholder="Contraseña" />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row justify-content-left">
                                        <div class="col-10">
                                            <button class="login" >Iniciar sesion</button>
                                            &nbsp;&nbsp;&nbsp;
                                            <a href="/createaccount" class="createAccount">Crear cuenta</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-3">
                                <img src="user-icn.png" width="300" height="300" alt=''/>
                                <div class="row justify-content-center">
                                    <div class="col-11">
                                        <h4>Ingresa tu e-mail, teléfono</h4>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-6">
                                        <h4>o usuario de</h4>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-8">
                                        <h4>CHAIN GAME STORE</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br /><br /><br /><br />
                    </section>
                </div>
            </div>
        </Fragment>
    );
}
















