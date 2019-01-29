import React, { Fragment } from 'react';
import { MDBView, MDBMask } from "mdbreact";


import takeANote from '../images/takenote.jpg';


function WelcomePage(props) {
    return (
        <Fragment>
            
                            <MDBView  >
                                <img className="d-block w-50" src={takeANote} alt="First slide" />                                
                                <MDBMask overlay="black-light" />
                            </MDBView>
                        
        </Fragment>
    );


};

export default WelcomePage;