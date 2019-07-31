import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { signup } from './apicall';


function ClientRegister() {
    
	const [values, setValues] = useState({
								email:'',
								password:'',
								mobile:'',
								error:'',
								success:false
							});

	const handleChange = (name) => (event) => {
		setValues({...values, error:false, [name]: event.target.value })
	}

	const { email, password, mobile, success, error } = values; 

	const clickSubmit = (e) => {

		e.preventDefault();

		setValues({...values, error:false })

		const userFormData = { email,password }

		signup(userFormData).then(data => {

			if (data.error) {
				setValues({ ...values, error:data.error, success:false })
			} else {
				setValues({ ...values, email:'', password:'', mobile:'', error:'', success:true })
			}
		}).catch((err) => {
			console.log(err)
		})
	}


	const RegisterForm = () => (

		<form>
            <div className="form-group">
              	<label htmlFor="email" className="small">EMAIL<sup className="text-danger">*</sup></label>
              	<input type="email" onChange={handleChange('email')} value={email} className="form-control bg-light" id="email" placeholder="Enter Email" autoComplete="off" />
            </div>

            <div className="form-group">
              	<label htmlFor="password" className="small">PASSWORD<sup className="text-danger">*</sup></label>
              	<input type="password" onChange={handleChange('password')} value={password} className="form-control bg-light" id="password" placeholder="Enter Password" autoComplete="off" />
            </div>
          
            <div className="form-group">
              	<label htmlFor="mobile" className="small">Mobile<sup className="text-danger">*</sup></label>
              	<input type="text" onChange={handleChange('mobile')} value={mobile} className="form-control bg-light" id="mobile" placeholder="Enter Mobile No" autoComplete="off" />
            </div>

	  		<button type="button" onClick={clickSubmit} className="btn btn-primary w-100"> CREATE ACCOUNT</button>
	  		
	  		<br/>
	  		<br/>
	  		<p className="text-center">- OR SIGN UP USING -</p>
	  		<hr/>
	  		<div className="row">
	  			<div className="col-md-6">
	  				<button type="button" className="btn btn-lg w-100 cust-signup-btn shadow-sm"><img src="/assets/images/facebook.png" alt="Facebook" /> <p>FACEBOOK</p></button>
	  			</div>
	  			<div className="col-md-6">
	  				
	  				<button type="button" className="btn btn-lg w-100 cust-signup-btn shadow-sm"><img src="/assets/images/search.png" alt="Google" /> <p>GOOGLE</p></button>
	  			</div>
	  		</div>
	  	</form>
	)


	const showError = () => (
		<div className="alert alert-danger" style={{ display: error ? '' : 'none'}}>
			{error}
		</div>
	)

	const showSuccess = () => (
		<div className="alert alert-success" style={{ display: success ? '' : 'none'}}>
			New Account is Created. Please <Link to="/login">SIgn in.</Link>
		</div>
	)

    return (

    		<div className="container-fluid details_page">
            <div className="row bg-white py-4 row-flex">
                <div className="col-lg-12 mb-4">
                	<h4 className="text-center">CREATE ACCOUNT</h4>
                </div>

                <div className="col-lg-5 offset-md-1">
                	
                	<div className="card content">
					  <div className="card-body">
					  	<h5 className="custom-text-dark">ALREADY REGISTERED?</h5>
					  	<p>
					  		By loging with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
					  	</p>

					  	<Link className="btn btn-outline-primary cust-link-tag-btn" to="/login">LOGIN TO ACCOUNT</Link>
					  </div>
					</div>
                </div>

                <div className="col-lg-5">
                	
                	<div className="card content">
					  <div className="card-body">
					  	<h5 className="custom-text-dark">REGISTER</h5>
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
