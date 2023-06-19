import React, { useState} from 'react';
import Logo from '../../assets/logos/unimed.png'

function HeaderConv({titleRef, yearRef, className}) {


    const [open, setOpen] = useState(true) //criando estado

//#32d2a4
  
    
    return (
        <div  className="flex-grow flex justify-center items-center" >
            <img src={Logo} className='h-6 w-6 mr-4'/>
            <h1 className="text-2xl text-teal-400 uppercase" style={{ fontWeight: '600' }}  ref={titleRef}>Unimed</h1>
        </div>
    );
}

export default HeaderConv;