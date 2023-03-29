//
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

export default function App() {
    return (
        <Fragment>
            {/* <nav class="navbar navbar-expand-lg bg-$indigo:#6610f2">
                <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/login">Iniciar sesion</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
            <div>
                <Navbar/>
                <Product/>
            </div>
        </Fragment>
    );
}