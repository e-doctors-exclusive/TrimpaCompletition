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
                    <div className='inputs'>
                        <input type="text" placeholder="First name*" />
                        <input type="text" placeholder="Middle" />
                        <input type="text" placeholder="Last name*" />
                        <input type="text" placeholder="Suffix" />
                        <input id="flexBasis" type="date" placeholder="Date of birth" />
                    </div>
                </div>
            </div>
            <div className='from2'>
                <input type="text" placeholder="Email address*" />
                <input type="text" placeholder="Phone number*" />
                <input type="text" placeholder="Redress number" />
                <input type="text" placeholder="Known traveller number*" />
            </div>
            <div className='form3'>
                <p>Emergency contact information</p>
                <div>
                    <input type="checkbox" />
                    <p>Same as Passenger 1</p>
                </div>
                <div>
                    <input type="text" placeholder="First name*" />
                    <input type="text" placeholder="Last name*" />
                    <input type="text" placeholder="Email adress*" />
                    <input type="text" placeholder="Phone number*" />
                </div>
            </div>
            <div className='bag-info'>
                <p id='title'>Bag information</p>
                <p id='desc'>Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is also free. Second bag check fees are waived for loyalty program members. See the full bag policy.</p>
                <div className='bag-info-checked'>
                    <div className='first'>
                        <p>Passenger 1</p>
                        <p>First Last</p>
                    </div>
                    <div className='second'>
                        <p>Checked bags</p>
                        <div className='inc-btns'>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='choice-btns'>
                <button>Save and close</button>
                <button>Select seats</button>
            </div>
        </div>
        <div>
            <div>
                <div></div>
                <div></div>
            </div>
            <button>Select seats</button>
            <div></div>
        </div>
    </div>
  )
}

export default PassengerInfo