
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

function Card({ title, img, qtd, link, subtitle }) {
  
  return (
        <a href={link}>
            <div className='group cursor-pointer bg-gray-700 w-48 h-48 flex flex-col justify-center items-center rounded drop-shadow-md hover:text-green-100 cursor-pointer border-white-100 hover:text-green-100 hover:bg-green-600 hover:border-green-500 hover:drop-shadow-lg transition-transform duration-300 transform-gpu hover:-translate-y-2'>
            <img src={img} className="text-6xl mb-4"/>
            <h1 className="font-semibold text-gray-200 group-hover:text-green-100 text-center break-words">{title}</h1>
            </div>
        </a>
    )   
    }



export default Card;