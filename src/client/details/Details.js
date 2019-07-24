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
				},
				{
					imgUrl:"https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
				}
			];

function Details() {
	
	const [qtyCount, setQtyCount] = useState(1);

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
                            height: 1200,
                        },
                        enlargedImagePortalId:'display-zoom-img',
                        isHintEnabled:true,
						lensStyle: {
							background: 'hsla(0, 0%, 100%, .3)'
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
			      	<div id="display-zoom-img"></div>
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
								<div className="row">
									<div className="col-md-3 pr-0">
										<button type="button" class="btn btn-light btn-lg w-100" onClick={() => setQtyCount(qtyCount - 1)} disabled={ (qtyCount <= 0) ? 'disabled' : ''  } > - </button>
									</div>									
									
									<div className="col-md-6 pl-0 pr-0">
										<input type="text" className="form-control form-control-lg bg-light text-center" value={ qtyCount } readonly />
									</div>									

									<div className="col-md-3 pl-0">
										<button type="button" class="btn btn-light btn-lg w-100" onClick={ () => setQtyCount(qtyCount + 1) }> + </button>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<button type="button" class="btn btn-primary btn-lg mr-2 rounded w-100"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
							</div>
						</div>

						

						<div class="row mt-5">
							<div className="col-md-12">
								<button type="button" class="btn btn-warning btn-lg mr-2 rounded w-100">BUY IT NOW</button>
							</div>
						</div>
						
						<div class="row mt-5">
							<div className="col-md-12">
								<div id="accordion2">
		                            <div class="sidebar-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="headingOne">
		                                    DESCRIPTION
		                                <span className="float-right">
		                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
		                                </span>
		                            </div>

		                            <div id="collapseOne" class="collapse show pl-4" aria-labelledby="headingOne" data-parent="#accordion2">
		                                <br/>
		                                <p>We are proud to present our best premium Shopify theme - Wokiee.</p>

		                                <p>
		                                	This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy.
		                                </p>

		                                <p>Please, take a look at feature list and compare with our competitors.</p>

		                                <p>Wokiee support DropShipping app Oberlo.</p>
										<p>Wokiee Shopify theme is powerfool tool to create personal webshop.</p>
		                            </div>

		                            <div class="sidebar-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" id="headingTwo">
		                                GENERAL TAB
		                                <span className="float-right">
		                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
		                                </span>
		                            </div>

		                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion2">
		                                <ul class="list-group list-group-flush">
		                                    <li class="list-group-item">5 item</li>
		                                    <li class="list-group-item">6 item</li>
		                                    <li class="list-group-item">7 item</li>
		                                    <li class="list-group-item">8 item</li>
		                                </ul>
		                            </div>
		                            <div class="sidebar-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id="headingThree">
		                                 REVIEW
		                                <span className="float-right">
		                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
		                                </span>
		                            </div>
		                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion2">
		                                <ul class="list-group list-group-flush">
		                                    <li class="list-group-item">
		                                    	<h3 className="custom-text-dark">
		                                    		CUSTOMER REVIEWS <br/>
		                                    		<small className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734; <a href="#">Based on 3 reviews</a></small>
		                                    	</h3>
		                                    </li>
		                                    <li class="list-group-item">
		                                    	<small className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
		                                    	<h5 className="custom-text-dark">LOVE IT!</h5>
		                                    	<small>Annon Emuss on Apr 25, 2019</small>
		                                    	<p>Nice, simply the best.</p>
		                                    </li>

		                                    <li class="list-group-item">
		                                    	<small className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
		                                    	<h5 className="custom-text-dark">BEST</h5>
		                                    	<small>aa Das on Apr 25, 2019</small>
		                                    	<p>The quick brown fox jump over the lazy dog</p>
		                                    </li>
		                                </ul>
		                            </div>
		                        </div>
							</div>
						</div>
					</div>
			    </div>
		  	</div>

		  	<h3 className="my-4">Related Product</h3>

		  	<div className="row">
		    	<div className="col-md-3 col-sm-6 mb-4">
		      		<Link to="#">
		            	<img className="img-fluid" src="https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80" alt="" />
		          	</Link>
		    	</div>

		    	<div className="col-md-3 col-sm-6 mb-4">
		      		<Link to="#">
		            	<img className="img-fluid" src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
		          	</Link>
		    	</div>

		    	<div className="col-md-3 col-sm-6 mb-4">
		      		<Link to="#">
		            	<img className="img-fluid" src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
		          	</Link>
		    	</div>

		    	<div className="col-md-3 col-sm-6 mb-4">
		      		<Link to="#">
		            	<img className="img-fluid" src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
		          	</Link>
		    	</div>

		  	</div>
		</div>
  );
}

export default Details;
