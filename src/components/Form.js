import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <h1 className="us" style={{textalign:"center"}}>Contact Us</h1>
      <form>
        <lable>Your Name</lable>
          <input type="text"></input>
        <lable>Email</lable>
          <input type="email"></input>
        <lable>Subject</lable>
          <input type="text"></input>
        <lable>Message </lable>
          <textarea rows="6" placeholder="Type your message here" />
          <button> submit</button>

      </form>
    </div>
  )
}

export default Form