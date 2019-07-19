import React,{ useState,useEffect } from 'react';
import { Link } from "react-router-dom";

// import LightBoxFit from 'react-image-lightbox-fit';

import ReactImageMagnify from 'react-image-magnify';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const imgData = [	
				{
					imgUrl : "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
				},
				{
					imgUrl:"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
				},
				{
					imgUrl:"https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
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
				}
			];

function Details() {
	
	const settings = {
    	dots: false,
      	infinite: true,
      	speed: 500,
     	slidesToShow: 4,
      	slidesToScroll: 4
    };

    const [thumbnail, setThumbnail] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect( () => {
    	
    	setThumbnail(imgData);
    
    },[])

    const renderThumbnail = () =>{
    	if (thumbnail.length) {
	    	return(
	    			<ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: thumbnail[activeIndex]['imgUrl'],
                        },
                        largeImage: {
                            src: thumbnail[activeIndex]['imgUrl'],
                            width: 1200,
                            height: 1800,
                        }
                    }} />
	    		)
	    }
    }
    

    const imgThumb = () => imgData.map(function(name, index){
		                    return (
							  	<div key={index} className="px-1" onClick={() => setActiveIndex(index)}>
							  		<img className="img-fluid" src={name.imgUrl} style={{'cursor':'pointer'}} />
						        </div>
	                    	);
		                })

    return (

		<div className="container-fluid">
		  	<div className="row mt-3">
			    <div className="col-md-6">
			    	<div className="mb-2">
			        	{renderThumbnail()}
			        </div>

			        <div className="container" style={{'padding':'0px'}}>
				    	<Slider {...settings}>
				          {imgThumb()}
				        </Slider>
			    	</div>
			    </div>
			    <div className="col-md-6">
			      	<div>
						<div>
							<p><span>SKU:</span> 001</p>
							<p><span>Availability:</span> 40 in Stock</p>
						</div>
						<h1 class="custom-text-dark">Cotton Blend Fleece Hoodie</h1>
						
						<div class="text-primary">
							<h2>$29</h2>
						</div>


						<div class="tt-review">
							<small className="">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
							<a href="#">(1 Customer Review)</a>
						</div>
						<p>
							Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
						</p>
						<div class="row">
							<div className="col-md-2 text-right pt-2">
								QTY : 
							</div>
							<div className="col-md-4">
								<input type="txet" className="form-control" value="1" />
							</div>
							<div className="col-md-6">
								<button type="button" class="btn btn-primary btn-lg mr-2 rounded w-100"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
							</div>
						</div>

						<div class="row mt-5">
							<div className="col-md-6">
								<a> Add to WISH LIST </a>
								
								<input type="txet" className="form-control" value="1" />
							</div>
							<div className="col-md-6">
								<button type="button" class="btn btn-primary btn-lg mr-2 rounded w-100"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
							</div>
						</div>

						<div>
							<a class="btn btn-primary" href="#"><i class="icon-n-072"></i>ADD TO WISH LIST</a>
							<a class="btn btn-primary" href="#"><i class="icon-n-08"></i>ADD TO COMPARE</a>
						</div>
					</div>
			    </div>
		  	</div>

		  	<h3 className="my-4">Related Product</h3>

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
