import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditQuote = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [author, setAuthor] = useState({});
  const [text, setText] = useState({});
  const inputAuthorRef = useRef();
  const inputTextRef = useRef();
  
 async function submithandler(e){
    e.preventDefault();
    const author = inputAuthorRef.current.value;
    const text = inputTextRef.current.value;

    await axios.patch(`http://localhost:3535/quotes/${params.id}`, {author, text})
    navigate('/')
  }
  async function getQuote(){
    const res = await axios.get(`http://localhost:3535/quotes/${params.id}`)
    // setQuote(res.data.quote)
    setAuthor(res.data.quote.author);
    setText(res.data.quote.text);
  }
  useEffect(()=>{
    getQuote()
  }, [])
  return (
    <div className='form-div'>
    <form onSubmit={submithandler}>
        <div>
            <label htmlFor="author">Authot:</label>
            <input type="text" id='author' ref={inputAuthorRef} value={author} onChange={e => setAuthor(e.target.value)} placeholder='Author name' />
        </div>

        <div>
            <label htmlFor="quote">Quote:</label>
            <textarea id="quote" cols="30" rows="5" ref={inputTextRef} value={text} onChange={e => setText(e.target.value)} placeholder='Write your Quote here..!'></textarea>
        </div>
        <button>Save</button>
    </form>
</div>
  )
}

export default EditQuote
