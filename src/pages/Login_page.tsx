import React from 'react'
import Login_form from '../components/Login_form'

function Login_page() {
  return (
   <>
      <div className='row mt-1' >
          <div className='col-md-4'></div>
          <div className='col-md-4 border border-4 p-4 rounded'>
            <Login_form/>
          </div>
          <div className='col-md-4'></div>
      </div>
   </>
  )
}

export default Login_page