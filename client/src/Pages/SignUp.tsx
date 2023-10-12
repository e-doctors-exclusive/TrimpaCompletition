import React, { useState } from 'react'
import '../styles/SignUp.css'
import img from '../image/user.png'
import email from '../image/gmail.png'
import pass from '../image/padlock.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form , setForm] = useState({})


  return (
    <div>
      <div className="form-box">
        <form className="form" >
          <span className="title">Sign up for Tripma</span>
          <span className="subtitle"> Tripma is totally free to use. Sign up using your email  <br />address or phone number below to get started.</span>
          <div className="form-container1">
            <input type="text" className="input1" placeholder="Email or Phone number" />
            <input type="password" className="input1" placeholder="Password" />
          </div>
          <div className="check">
            <div className="checkboxes">
              <input type="checkbox" id="scales" name="scales" />

              <label >I agree to the <span style={{ color: "#605DEC" }}>terms and conditions</span></label>
            </div>

            <div className="checkboxes">
              <input type="checkbox" id="horns" name="horns" />
              <label >Send me the latest deal alerts</label>
            </div>
          </div>
          <button className='btn'>Create account</button>


          <div className="frame">
            <div className="divider" />
            <div className="description">or</div>
            <div className="divider" />
          </div >

          <div>
            <div className="google">
              <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="google_icon" width={12} height={12} />
              <span style={{ color: "#605DEC" }}>Continue With Google</span>
              <span style={{ color: "#fff" }}>3dr</span>

            </div>
            <div className="google">
              <img src="https://www.svgrepo.com/show/69341/apple-logo.svg" alt="google_icon" width={12} height={12} />
              <span style={{ color: "#605DEC" }}>Continue With Apple </span>
              <span style={{ color: "#fff" }}>3dr</span>

            </div>
            <div className="google">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png" alt="google_icon" width={12} height={12} />
              <span style={{ color: "#605DEC" }}>Continue With Facebook</span>
              <span style={{ color: "#fff" }}>3dr</span>

            </div>

          </div>
        </form>

      </div>

<div>
  hh
</div>
      {/* sign in  */}
      <div className="form-box">
        <form className="form" >
          <span className="title">Sign In </span>
          <span className="subtitle"> Tripma is totally free to use. Sign In using your email  <br />address or phone number below to get started.</span>
          <div className="form-container1">

            <div className='userName'>
              <img src={img} alt="user_icon" />
            <input type="text" className="input1" placeholder="UserName" />
            </div>

            <div className='userName'>
              <img src={email} alt="email_icon" />
            <input type="text" className="input1" placeholder="Email or Phone number" />
            </div>
           <div className="userName">
            <img src={pass} alt="pass" />
           <input type="password" className="input1" placeholder="Password" />

           </div>
          </div>
          <div className="check">
            <div className="checkboxes">
              <input type="checkbox" id="scales" name="scales" />

              <label >I agree to the <span style={{ color: "#605DEC" }}>terms and conditions</span></label>
            </div>

            <div className="checkboxes">
              <input type="checkbox" id="horns" name="horns" />
              <label >Send me the latest deal alerts</label>
            </div>
          </div>
          <button className='btn'>Sign In</button>

        </form>

      </div>



    </div>

  )
}

export default SignUp
