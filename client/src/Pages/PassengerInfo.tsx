import '../styles/PassengerInfo.css'
import React from 'react'

function PassengerInfo() {
  return (
    <div className='main-container'>
        <div className='passenger-form'>
            <div className='required-info'>
                <p>Passenger information</p>
                <p>Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.</p>
            </div>
            <div className='from1'>
                <p>Passenger 1 (Adult)</p>
                <div className='form1-inputs'>
                    <div>
                        <input type="text" placeholder="First name*" />
                        <input type="text" placeholder="Middle" />
                        <input type="text" placeholder="Last name*" />
                        <input type="text" placeholder="Suffix" />
                        <div>
                            <input id="flexBasis" type="date" placeholder="Date of birth" />
                            <p>MM/DD/YY</p>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default PassengerInfo