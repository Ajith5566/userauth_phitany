import React from 'react'
import Login_form from '../components/Login_form'
import "./login_page.css"

function Login_page() {
  return (
   <>
     <div className="login-page-wrapper">
        <div className="row justify-content-center">
          <div className="col-md-4  login-card-shell border-0 p-0">
            <Login_form />
          </div>
        </div>
      </div>
   </>
  )
}

export default Login_page