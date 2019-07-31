import React,{useState} from 'react';
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, signout } from './apicall';

function ClientLogin() {

	const [values, setValues] = useState({
								email:'',
								password:'',
								error:'',
								success:false,
								loading:false,
								redirectToReferrer:false
							});

   	
	const handleChange = (name) => (event) => {
		setValues({...values, error:false, [name]: event.target.value })
	}

	const { email, password, success, error, loading, redirectToReferrer } = values;

	const clickSubmit = (e) => {

		e.preventDefault();

		setValues({...values, error:false, loading:true })
		
		const userFormData = {email,password}

		signin(userFormData).then(data => {

			if (data != undefined) {
				if (data.error) {
					setValues({ ...values, error:data.error, success:false, loading:false })
				} else {

					authenticate(data,()=>{
						setValues({ ...values, redirectToReferrer:true })
					})
				}
			}
			else
			{
				setValues({ ...values, error:"Email or Password is invalid", success:false, loading:false })
			}
			// console.log(data)
		}).catch((err) => {
			console.log(err)
		})
	} 

	const LoginForm = () => (

			<form>
				<div className="form-group">
                  	<label htmlFor="loginInputName" className="small">E-MAIL <sup>*</sup></label>
                  	<div className="text-muted float-right">* Required Fields</div>
                  	<input type="email" onChange={handleChange('email')} value={email} className="form-control bg-light" id="loginInputName" placeholder="Enter E-mail" />
                </div>

                <div className="form-group">
                  <label htmlFor="loginInputEmail" className="small">PASSWORD <sup>*</sup></label>
                  <input type="password" onChange={handleChange('password')} value={password} className="form-control bg-light" id="loginInputEmail" placeholder="Enter Password" />
                </div>
                <div className="form-group">
                  <button className="btn btn-outline-primary w-100" type="button" onClick={clickSubmit}>LOGIN</button>
                </div>

		  		<br/>
		  		<p className="text-center">- OR EASILY USING -</p>
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

	const showLoading = () => (

		loading &&(
				<div className="alert alert-info">
					Loading.....
				</div>
			)
	)

	const redirectUser = () => {
		if (redirectToReferrer) {
			return <Redirect to="/"/>
		}
	}	

    return (
           
        <div className="container-fluid details_page">
            <div className="row bg-white py-4 row-flex">
                <div className="col-lg-12 mb-4">
                	<h4 className="text-center">ALREADY REGISTERED?</h4>
                </div>

                <div className="col-lg-5 offset-md-1">
                	
                	<div className="card content">
					  <div className="card-body">
					  	<h5 className="custom-text-dark">NEW CUSTOMER</h5>
					  	<p>
					  		By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
					  	</p>

					  	<Link className="btn btn-outline-primary cust-link-tag-btn" to="/register">CREATE ACCOUNT</Link>
					  </div>
					</div>
                </div>

                <div className="col-lg-5">
                	
                	<div className="card content">
					  <div className="card-body">
					  	<h5 className="custom-text-dark">LOGIN</h5>
      					<p> If you have an account with us, please log in.</p>
						  	{showLoading()}
      						{showError()}
      						{LoginForm()}
      						{redirectUser()}
      						
					  </div>
					  {JSON.stringify(values)}
					</div>
                </div>

               
            </div>
        </div>
  	);
}

export default ClientLogin;
