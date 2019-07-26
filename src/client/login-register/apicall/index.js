import axios from 'axios';
import {API} from "../../config/config.js";



export const signup = (user) => {

		return axios({
	  			url: `${API}/signup`,
	  			method: 'POST',
	  			data: user,
	  			headers: {
	  				Accept:'application/json',
	  				'Content-Type': 'application/json',
	  			},
			})
			.then(function (resp) {
				
			    return resp.data;
			})
			.catch(function (error) {
			   // your action on error success
			    console.log(error);
			});
	}


export const signin = (user) => {

		return axios({
	  			url: `${API}/signin`,
	  			method: 'POST',
	  			data: user,
	  			headers: {
	  				Accept:'application/json',
	  				'Content-Type': 'application/json',
	  			},
			})
			.then(function (resp) {
				
			    return resp.data;
			})
			.catch(function (error) {
			   // your action on error success
			    console.log(error);
			});
	}


export const authenticate = (data,next) => {

		if(typeof window != 'undefined'){

			localStorage.setItem('jwt', JSON.stringify(data))

			next();
		}
	}

export const signout = (next) => {

		if(typeof window != 'undefined'){

			localStorage.removeItem('jwt')

			next();

			return axios({
	  			url: `${API}/signout`,
	  			method: 'GET',
			})
			.then(function (resp) {
				
			    console.log(resp)
			})
			.catch(function (error) {
			   // your action on error success
			    console.log(error);
			});
		}
	}