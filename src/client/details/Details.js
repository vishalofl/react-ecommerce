import React,{ useState,useEffect } from 'react';
import { Link } from "react-router-dom";

import LightBoxFit from 'react-image-lightbox-fit';

function Details() {

    return (

		<div className="container">
		  	<h1 className="my-4">Page Heading
		    	<small>Secondary Text</small>
		  	</h1>

		  	<div className="row">
			    <div className="col-md-8">
			        <div id="demo" className="carousel slide" data-ride="carousel">
					  <ul className="carousel-indicators">
					    <li data-target="#demo" data-slide-to="0" className="active"></li>
					    <li data-target="#demo" data-slide-to="1"></li>
					    <li data-target="#demo" data-slide-to="2"></li>
					  </ul>

					  <div className="carousel-inner">
					    <div className="carousel-item active">
	          				{<LightBoxFit showThumbnails={false} images={['http://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg']} height={400} showImageModifiers={false}/>}
					    </div>
					   {/* <div className="carousel-item">
					      	{<LightBoxFit showThumbnails={false} images={['http://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg']} height={400} />}
					    </div>
					    <div className="carousel-item">
					     	{<LightBoxFit showThumbnails={false} images={['http://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg']} height={400} />}
					    </div>*/}
					  </div>

					  {/*<a className="carousel-control-prev" href="#demo" data-slide="prev">
					    <span className="carousel-control-prev-icon"></span>
					  </a>
					  <a className="carousel-control-next" href="#demo" data-slide="next">
					    <span className="carousel-control-next-icon"></span>
					  </a>*/}

					</div>
			    </div>

			    <div className="col-md-4">
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

export default Details;
