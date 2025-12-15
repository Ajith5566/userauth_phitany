import React from 'react'
import Registration_form from '../components/Registration_form'
import "./registration_page.css"


function Registration_page() {
  return (
    <>
      <div className="register-page-wrapper">
        <div className="row justify-content-center">
          <div className="col-md-4 register-card-wrapper border border-0 p-4 rounded">
            <Registration_form />
          </div>
        </div>
      </div>
      

    </>
  )
}

export default Registration_page