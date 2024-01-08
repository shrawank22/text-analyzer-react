import React from 'react'

export default function Alert({alert}) {
  return (
    alert && <div className={`mt-2 alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{alert.type}!</strong> {alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}
