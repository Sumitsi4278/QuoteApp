import React, { useRef } from 'react'
import './NewQuote.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewQuote = () => {
const navigate = useNavigate();

let userInputRef = useRef();
let quoteInputRef = useRef();
let imgInputRef = useRef();

   async function submithandler(e){
        e.preventDefault();
        // console.log(userInputRef, quoteInputRef);
        const author = userInputRef.current.value;
        const text = quoteInputRef.current.value;
        const img = imgInputRef.current.value;

        const res = await axios.post('http://localhost:3535/quotes', {author, text, img})
        navigate('/');
    }
  return (
    <div className='form-div'>
        <form onSubmit={submithandler}>
            <div>
                <label htmlFor="author">Author :</label>
                <input type="text" id='author' ref={userInputRef} placeholder='Author name' />
            </div>
            <div>
                <label htmlFor="img">Image Link :</label>
                <input type="text" id='img' ref={imgInputRef}  placeholder='Link to Image' />
            </div>
            <div>
                <label htmlFor="quote">Quote :</label>
                <textarea id="quote" cols="30" rows="5" ref={quoteInputRef} placeholder='Write your Quote here..!'></textarea>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default NewQuote