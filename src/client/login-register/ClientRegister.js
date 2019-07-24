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

	const { firstname, lastname, email, password, success, error } = values; 

	const clickSubmit = (e) => {

		e.preventDefault();

		const userFormData = {firstname,lastname,email,password}

		signup(userFormData).then(data => {

			if (data.error) {
				setValues({ ...values, error:data.error, success:false })
			} else {
				setValues({ ...values, firstname:'', lastname:'', email:'', password:'', error:'', success:true })
			}
		}).catch((err) => {

			console.log(err)
		
		})
	}

	var headers = {
        'Content-Type': 'application/json'
    }

	const signup = (user) => {

		return axios({
	  			url: `${API}/signup`,
	  			method: 'post',
	  			data: user
			})
			.then(function (resp) {
				
			    return resp.data;
			})
			.catch(function (error) {
			   // your action on error success
			    console.log(error);
			});
	}


	const RegisterForm = () => (

		<form>
	  		<div className="form-group">
              	<label htmlFor="firstName" className="small">FRIST NAME <sup>*</sup></label>
              	<div className="text-muted float-right">* Required Fields</div>
              	<input type="text" onChange={handleChange('firstname')} value={firstname} className="form-control bg-light" id="firstName" placeholder="Enter First Name" autoComplete="off" />
            </div>

            <div className="form-group">
              	<label htmlFor="lastName" className="small">LAST NAME <sup>*</sup></label>
              	<input type="text" onChange={handleChange('lastname')} value={lastname} className="form-control bg-light" id="lastName" placeholder="Enter First Name" autoComplete="off" />
            </div>

            <div className="form-group">
              	<label htmlFor="email" className="small">EMAIL<sup>*</sup></label>
              	<input type="email" onChange={handleChange('email')} value={email} className="form-control bg-light" id="email" placeholder="Enter Email" autoComplete="off" />
            </div>

            <div className="form-group">
              	<label htmlFor="password" className="small">PASSWORD<sup>*</sup></label>
              	<input type="password" onChange={handleChange('password')} value={password} className="form-control bg-light" id="password" placeholder="Enter Password" autoComplete="off" />
            </div>
	  		<button type="button" onClick={clickSubmit} className="btn btn-outline-primary"> CREATE ACCOUNT</button>
	  	</form>
	)


	const showError = () => (
		<div className="alert alert-danger" style={{ display: error ? '' : 'none'}}>
			{error}
		</div>
	)

	const showSuccess = () => (
		<div className="alert alert-success" style={{ display: success ? '' : 'none'}}>
			New Account is Created. Please SIgn in.
		</div>
	)

    return (
    		<div className="container-fluid details_page">
                <div className="row bg-white py-4">
                    <div className="col-lg-12 mb-3">
                    	<h3 className="text-center">CREATE AN ACCOUNT</h3>
                    </div>
                    <div className="col-lg-6 offset-md-3 ">
                    	<div className="card">
						  	<div className="card-body px-5">
						  		<h5 className="custom-text-dark">PERSONAL INFORMATION</h5>
						  		
						  		{showError()}
						  		{showSuccess()}
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
