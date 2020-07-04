import React from "react";
import { connect } from "react-redux";
import { startLogin } from "./../actions/auth";

export const Login = ({ startLogin }) => { //if you import this then you need curly braces in file which you're importing because its named export
    return(
      <div className="box-layout"> 
        <div className="box-layout__box">
         <h1 className="box-layout__title">Boilerplate</h1>
          <h5>Tagline for your app</h5>
           <button className="button" onClick={startLogin}>Login (Google)</button> 
        </div>
        </div>
    
    )
}

export default connect(null,{ startLogin })(Login); //no need of curly braces for this while importing