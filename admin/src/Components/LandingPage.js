// src/components/LandingPage.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  } from 'mdb-react-ui-kit'
  import test1 from '../images/test1.jpg'
function LandingPage() {
   
    return (
        <div className='Landing'>
        <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
          <MDBIcon fas icon="plane" />
            <span className="h1 fw-bold mb-0">Tripma</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src={test1}
            alt="Login image" className="w-100"  />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
    );
  }

export default LandingPage;
