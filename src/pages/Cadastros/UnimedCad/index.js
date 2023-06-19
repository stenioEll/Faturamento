import React, {useState} from 'react';
import Unimedlogo from '../../../assets/logos/unimed.png';
import Header from '../../../components/Header';

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
//import axios from "axios";
import { useNavigate } from "react-router-dom";


function UnimedCad() {
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
                        `}>
                        <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="Atendimento">
                                        Atendimento
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Atendimento" name="Atendimento" type="text" onChange={handleChange} placeholder="12455"/>
                                    </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="Atendimento">
                                    Conta
                                    </label>
                                    <input class=" appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="telefone" name="telefone" type="text" onChange={handleChange} placeholder="Puxa do banco"/>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="Nome">
                                    Nome
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nome" name="rua" type="text" onChange={handleChange} placeholder="Puxa do banco"/>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-zip">
                                    Valor Aprovado
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Valor Aprovado" name="Valor Aprovado" type="text" onChange={handleChange} placeholder="R$ 90.210"/>
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="Quantidade">
                                    Quantidade
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Quantidade" name="Quantidade"  type="text" onChange={handleChange} placeholder=""/>
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="Observação">
                                    Observação
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Observação" name="Observação" type="text" onChange={handleChange} placeholder=""/>
                                </div>
                            </div>
                            <div class="justify-center flex mt-8">
                            <button class="bg-gray-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                Cadastrar
                            </button>
                            </div>

                        </form>
                    </div>
                    </div>
                
            </div>
        </>
            
          )
        }

  
export default UnimedCad;