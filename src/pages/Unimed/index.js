
import '../../index.css';
import React, {useState} from 'react';
import Unimedlogo from '../../assets/logos/unimed.png';
import Header from '../../components/Header';

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderConv from '../../components/HeaderConv';


function Unimed() {
    const [open, setOpen] = useState(true) //criando Quantidade
    const [relative, setRelative] = useState(true)
    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState(2023);
  
    
    const handleMenu = () => {

    }

    const consultYear = ()=>{
;
    }

    const handleYearChange= (event) => {
        setSelectedYear(event.target.value);
    };

    const handleDiv = (e) => {
        setRelative(e.target.value)
    }

    const cardsData = [
        { title: 'Unimed', img: Unimedlogo },   
      ];
    
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({}) //definindo o Quantidade e a função

    const handleChange = (event) => { //atualiza o Quantidade do formulário.
    const name = event.target.name; //recupera o nome do input que disparou o evento onChange
    const value = event.target.value; //recupera o valor digitado pelo usuário no input.
    setInputs(values => ({...values, [name]: value}));
    }

    
    const handleSubmit = (event) => {
    event.preventDefault();

    // Simulando salvamento local dos dados
    console.log(inputs);
    alert('Dados salvos localmente!');
    // Você pode adicionar mais lógica aqui para salvar os dados em algum lugar, como localStorage, por exemplo.
    };

      return (
        <>
            <div class="bg-gray-800 h-screen flex flex-col items-center">
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <Header/>
                <div class="flex flex-wrap place-items-center justify-center h-screen py-8 ">
                    <div class={`
                        overflow-hidden 
                        shadow-2xl 
                        rounded-lg
                        p-8
                        bg-gray-900
                        font-light 
                        flex
                        flex-col
                        `}> 
                            <HeaderConv/>
                            <div className='mb-8 mt-8 text-center text-gray-100'>
                                <h1>Qual opção é desejada?</h1>
                            </div>
                            <div className='flex gap-8'>
                                <a href='/faturamento/unimed/cadastro'>
                                    <button class="bg-gray-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                        Cadastrar
                                    </button>
                                </a>
                                <a href='/faturamento/unimed/consulta'>
                                    <button class="bg-gray-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
                                        Consultar                             
                                    </button>
                                </a>
                            </div>
                            </div>
                    </div>
                    </div>
                
            
        </>
            
          )
        }

  
export default Unimed;