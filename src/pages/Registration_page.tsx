import React from 'react'
import Registration_form from '../components/Registration_form'

function Registration_page() {
  return (
    <>
        <div className='row' >
          <div className='col-md-4'></div>
          <div className='col-md-4 border border-4 p-4 rounded'>
            <Registration_form/>
          </div>
          <div className='col-md-4'></div>
      </div>
    
    </>
  )
}

export default Registration_page