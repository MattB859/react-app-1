import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
    <section id='form'>
      <form>
        <h1 className='text-center font-bold email-text'>Sign up to our email list</h1>
        <input type="text" placeholder="search" name="name" />
        <button type="submit" value="Submit">Submit</button>
      </form>
    </section>
    </>
  )
}

export default Form