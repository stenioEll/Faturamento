import React, { useState} from 'react';
import Logo from '../../assets/logos/logo2.png'

function Header({titleRef, yearRef, className}) {


    const [open, setOpen] = useState(true) //criando estado

//#32d2a4
  
    
    return (
        <div className="h-32 w-full  bg-gray-800 border-b border-gray-700 shadow-md">     
                <div  className="flex-grow flex justify-center items-center h-full " >
                    <img src={Logo} className='h-12 w-12 mr-4'/>
                    <h1 className="text-4xl text-gray-200 uppercase" style={{ fontWeight: '600' }}  ref={titleRef}>Faturamento</h1>
                </div>
        </div>
    );
}

export default Header;