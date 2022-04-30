import React from 'react'
import './FormStyles.css'
const Form = () => {
  return (
    <div className='form'>
        <form action=''>
            <label htmlFor=""> Name </label>
            <input type="text" placeholder='Enter your Name' />
            <label htmlFor=""> Email </label>
            <input type="email" placeholder='Enter your Email' />
            <label htmlFor=""> Mobile No </label>
            <input type="text" placeholder='Enter your Mobile Number'/>
            <label htmlFor=""> Message </label>
            <textarea type="text" rows='6' placeholder='Enter your Message' />
            <button className='btn'>Submit</button>





        </form>

    </div>
  )
}

export default Form