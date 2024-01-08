import React from 'react';


export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg bg-dark p-3">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <img src='/img/Dotour.svg' />
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-light"  href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/Destinos">
                                Destinos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">
                                Promoções
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href='#'>
                                Sobre nós
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}