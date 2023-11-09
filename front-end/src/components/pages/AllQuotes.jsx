import React, { useEffect } from 'react'
import axios from 'axios'
import Quote from '../Quote/Quote';
import { useState } from 'react';
import './AllQuotes.css'
const AllQuotes = () => {

  const [quotes, setQuotes] = useState([]);
  
  async function getQuotes(){
    const res = await axios.get('http://localhost:3535/quotes')
    setQuotes(res.data);
  }

  useEffect(()=>{
    getQuotes();
  }, [])

    return (
    <div className='all-quotes'>
      {quotes.map((item) => {
        return <Quote key={item._id} item={item}/>
      })}
    </div>
  )
}

export default AllQuotes