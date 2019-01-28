import React, { Fragment } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBJumbotron } from "mdbreact";


import takeANote from '../images/takenote.jpg';


function WelcomePage(props) {
    return (
        <Fragment>
            <MDBContainer>
                <MDBCarousel activeItem={1}  showControls={false} showIndicators={false} className="z-depth-1">
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img className="d-block w-100" src={takeANote} alt="First slide" />                                
                                <MDBMask overlay="black-light" />
                            </MDBView>
                        </MDBCarouselItem>                     
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        </Fragment>
    );


};

export default WelcomePage;