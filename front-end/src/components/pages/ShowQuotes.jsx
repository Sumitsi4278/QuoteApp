import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {FaTrash} from 'react-icons/fa'
import {BiSolidEditAlt} from 'react-icons/bi'

const ShowQuotes = () => {

    const navigate = useNavigate();
    const [quote, setQuote] = useState({});
    const params = useParams();
    
async function getQuote(){
    const response = await axios.get(`http://localhost:3535/quotes/${params.id}`)
    console.log(response);
    setQuote(response.data.quote);
    }
    
    useEffect(()=>{
        getQuote();
    }, [])

    async function delethandler(id){
        await axios.delete(`http://localhost:3535/quotes/${id}`)
        navigate('/');
    }
    async function editHandler(id){
        navigate(`/quotes/${id}/edit`);

    }
  return (
    <article style={{margin:'20px'}} className='quote-card'>
          <img src={quote.img} alt="" />
          <div className='quote-card-body'>
              <p>
                  <h2 style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <span>❝</span>
                    <span className='btns'>
                        <span onClick={()=>{editHandler(quote._id)}}><BiSolidEditAlt/></span>
                        <span onClick={()=> delethandler(quote._id)}><FaTrash/></span>
                    </span>
                  </h2>
                  {quote.text}
              </p>
              <h3>{quote.author}</h3>
          </div>
      </article>
  )
}

export default ShowQuotes