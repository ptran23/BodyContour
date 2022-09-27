import React from 'react'
import bannerPic from '../assets/Booknow.jpg'
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"
import  "../styles/Booknow.css"

function BookNow() {
  return (
    <div className='bookNow'>

      <div className='banner'>
        <img src={bannerPic} alt=""/>
        <h1>Book Now</h1>
      </div>

      <div className='booknow-container'>

        <div className='contact'>
         <p> Contact Me</p>
          <div className='email'> 
            <div className='email-container'>
              <EmailIcon/> 
            </div> 
            <div className='email-text'>
              <h4>bodyContour@gmail.com</h4>
            </div>
          </div>
          
          <div className='phone'> 
            <div className='phone-container'>
              <PhoneIcon/> 
            </div> 
            <div className='phone-text'>
              <h4>416-434-4356</h4>
            </div>
          </div>

        </div>

        <div className='message'>
        <form   onSubmit={ ''}>
              <div className='Contactform'>

                  <div className='name-wrap'>
                      <input 
                          type = "text" 
                          name ="Fname" 
                          placeholder='First Name' 
                      />
                      <input 
                          type = "text" 
                          name ="Lname" 
                          placeholder='Last Name' 
                      />
                  </div>

                  <div className='email-wrap'>
                      <input 
                          type = "text" 
                          name ="email" 
                          placeholder='Your Email' 
                          />
                  </div>
                  <div className='message-wrap'>
                    <textarea 
                          name = "message"  
                          rows={"15"} 
                          placeholder = "Let us know if you have any questions or request a time slot. " 
                          id ="contactMessage" 
                          />
                    
                  </div>
                  <button  className='sendButton'  type="submit">Send</button>
              </div>
            </form>
        </div>

      </div>
    </div>
  )
}

export default BookNow