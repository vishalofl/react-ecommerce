import React,{ useState,useEffect } from 'react';
import { Link } from "react-router-dom";

import LightBoxFit from 'react-image-lightbox-fit';

const imgData = [	
				{
					imgUrl : "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
				},
				{
					imgUrl:"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
				},
				{
					imgUrl:"https://images.unsplash.com/photo-1502139214982-d0ad755818d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
				},
				{
					imgUrl:"https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
				},
				{
					imgUrl:"https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
				},
				{
					imgUrl:"https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
				},
				{
					imgUrl:"https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
				}
			];


function Details2() {

	const imgThumb = () => imgData.map(function(name, index){
		                    return (
							  	<li className="list-group-item" key={ index }>
							  		<img className="img-fluid" src={name.imgUrl} />
							  	</li>
	                    	);
		                })


    return (

		<div className="container-fluid" style={thumbnailStyle}>
		  	<h1 className="my-4">Page Heading
		    	<small>Secondary Text</small>
		  	</h1>

		  	<div className="row">
			    

			    <div className="col-md-5">
			        <div>
			        	<img className="img-fluid" src={imgData[0]['imgUrl']}></img>
			        </div>

			        <div>
			        	<ul className="list-group list-group-horizontal">
			        		{imgThumb()}
						</ul>
			        </div>
			    </div>

			    <div className="col-md-7">
			      	<h3 className="my-3">Project Description</h3>
			      	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
			      	<h3 className="my-3">Project Details</h3>
			      	<ul>
			        	<li>Lorem Ipsum</li>
			        	<li>Dolor Sit Amet</li>
			        	<li>Consectetur</li>
			        	<li>Adipiscing Elit</li>
			      	</ul>
			    </div>
		  	</div>

		  	<h3 className="my-4">Related Projects</h3>

		  	<div className="row">
		    	<div className="col-md-3 col-sm-6 mb-4">
		      		<Link to="#">
		            	<img className="img-fluid" src="http://placehold.it/500x300" alt="" />
		          	</Link>
		    	</div>

		    	<div className="col-md-3 col-sm-6 mb-4">
		      		<Link to="#">
		            	<img className="img-fluid" src="http://placehold.it/500x300" alt="" />
		          	</Link>
		    	</div>

		    	<div className="col-md-3 col-sm-6 mb-4">
		      		<Link to="#">
		            	<img className="img-fluid" src="http://placehold.it/500x300" alt="" />
		          	</Link>
		    	</div>

		    	<div className="col-md-3 col-sm-6 mb-4">
		      		<Link to="#">
		            	<img className="img-fluid" src="http://placehold.it/500x300" alt="" />
		          	</Link>
		    	</div>

		  	</div>
		</div>
  );
}

export default Details2;

const thumbnailStyle = {
	background : '#ccc'
}

const thumbnailImgStyle = {
	width : '100px;',
	height : '80px;'
}
