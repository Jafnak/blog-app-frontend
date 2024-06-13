import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>

<div className="container">
    <div className="row g-3">
      
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Email</label>
            <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Password</label>
            <input type="password" name="" id="" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-primary">Login</button>
            
        </div>
    </div>
</div>

    </div>
  )
}

export default Login