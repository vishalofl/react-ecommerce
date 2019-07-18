import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import {API} from "../config/config.js";



function ClientRegister() {
    
	const [values, setValues] = useState({
									firstname:'',
									lastname:'',
									email:'',
									password:'',
									error:'',
									success:false
								});


	const handleChange = (name) => (event) => {
		setValues({...values, error:false, [name]: event.target.value })
	}

	const { firstname,lastname,email,password } = values; 

	const clickSubmit = (e) => {
		e.preventDefault();

		signup({firstname,lastname,email,password});


	}
	var headers = {
        'Content-Type': 'application/json'
    }

	const signup = (user) => {

		const userData = JSON.stringify(user);
		
		console.log(userData);

		// axios.post(`${API}/signup`,{data: userData},{headers: headers}).then((res)=>{
		
		// 	console.log(res);
		// 	//on success
		
		// }).catch((error)=>{
		// 	//on error
		// 	console.log(error);
		// })

		// axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{

		// 	console.log(res);
		// })

	}


	const RegisterForm = () => (

		<form>
	  		<div class="form-group">
              	<label htmlFor="firstName" className="small">FRIST NAME <sup>*</sup></label>
              	<div class="text-muted float-right">* Required Fields</div>
              	<input type="text" onChange={handleChange('firstname')} class="form-control bg-light" id="firstName" placeholder="Enter First Name" />
            </div>

            <div class="form-group">
              	<label htmlFor="lastName" className="small">LAST NAME <sup>*</sup></label>
              	<input type="text" onChange={handleChange('lastname')} class="form-control bg-light" id="lastName" placeholder="Enter First Name" />
            </div>

            <div class="form-group">
              	<label htmlFor="email" className="small">EMAIL<sup>*</sup></label>
              	<input type="email" onChange={handleChange('email')} class="form-control bg-light" id="email" placeholder="Enter Email" />
            </div>

            <div class="form-group">
              	<label htmlFor="password" className="small">PASSWORD<sup>*</sup></label>
              	<input type="password" onChange={handleChange('password')} class="form-control bg-light" id="password" placeholder="Enter Password" />
            </div>
	  		<button type="button" onClick={clickSubmit} className="btn btn-outline-primary"> CREATE ACCOUNT</button>
	  	</form>
	)

    return (
    		<div className="container-fluid details_page">
                <div className="row bg-white py-4">
                    <div className="col-lg-12 mb-3">
                    	<h3 className="text-center">CREATE AN ACCOUNT</h3>
                    </div>
                    <div className="col-lg-6 offset-md-3 ">
                    	<div class="card">
						  	<div class="card-body px-5">
						  		<h5 className="custom-text-dark">PERSONAL INFORMATION</h5>
						  		{RegisterForm()}
						  	</div>
						  	{JSON.stringify(values)}
						</div>
                    </div>
                </div>
            </div>
  		);
}

export default ClientRegister;
