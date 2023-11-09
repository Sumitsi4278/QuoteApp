import React from 'react'
import './Quote.css'
import { useNavigate } from 'react-router-dom'
const Quote = ({item}) => {
  const navigate = useNavigate();
  function clickHandler(id){
    navigate(`/quotes/${id}`);
  }
    return (
      <article onClick={()=>clickHandler(item._id)} className='quote-card'>
          <img src={item.img} alt="" />
          <div className='quote-card-body'>
              <p>
                  <h2>❝</h2>
                  {item.text}
              </p>
              <h3>{item.author}</h3>
          </div>
      </article>
    )
  }

export default Quote