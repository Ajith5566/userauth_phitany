import React from 'react'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="/">
                        User Registration
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/loginpage">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header