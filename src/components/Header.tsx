import React from 'react'
import "./Header.css"
function Header() {
    return (
        <>
             <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="/">
            User Registration
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-2 gap-lg-3 align-items-lg-center">
              <li className="nav-item">
                <a
                  className="nav-link active nav-pill"
                  aria-current="page"
                  href="/registration"
                >
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-pill" href="/loginpage">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Header