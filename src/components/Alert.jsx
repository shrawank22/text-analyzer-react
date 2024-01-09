import React from 'react'

export default function Alert({alert}) {
  return (
    <div className="container mt-1" style={{height: '45px'}}>
      {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{alert.type}!</strong> {alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
    </div>
    
  )
}
