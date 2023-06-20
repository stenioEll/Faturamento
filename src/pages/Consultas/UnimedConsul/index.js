import React, {useState} from 'react';
import Unimedlogo from '../../../assets/logos/unimed.png';
import Header from '../../../components/Header';

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
//import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faDownload } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";


function UnimedConsul() {
    const [open, setOpen] = useState(true) //criando Quantidade
    const [relative, setRelative] = useState(true)
    const [selectedOption, setSelectedOption] = useState(null)

    const handleButtonClick = (option) => {
        setSelectedOption(option);
      };
    
    
    const handleMenu = () => {

    }

    const consultYear = ()=>{
;
    }

    

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
            <div class="bg-gray-800 h-screen flex flex-col ">
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <Header/>
                <div class="flex flex-wrap justify-center py-8 ">
                    <div class={`
                        overflow-hidden 
                        shadow-2xl 
                        rounded-lg
                        p-8
                        bg-gray-900
                        font-light
                        `}>
                             <div className='flex justify-center gap-4 font-bold text-white'>
                                <button className='py-2 px-8 bg-green-600 hover:bg-green-500 rounded' onClick={() => handleButtonClick('periodo')}>Periodo</button>
                                <button className='py-2 px-4 bg-orange-600 hover:bg-orange-500 rounded' onClick={() => handleButtonClick('atendimento')}>Atendimento</button>
                            </div>
                    
                        <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                        {selectedOption === 'periodo' && (
                            <div class="flex flex-wrap justify-center mt-4 mb-4">
                                <div class="w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="Atendimento">
                                    Data de início
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Atendimento" name="Atendimento" type="text" onChange={handleChange} placeholder="12/04/2023"/>
                                </div>
                                <div class="w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="Atendimento">
                                    Data de Final
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Atendimento" name="Atendimento" type="text" onChange={handleChange} placeholder="12/04/2023"/>
                                </div>
                                <div className='ml-4'>
                                    <button class="bg-gray-700 hover:bg-green-600 text-white font-bold py-3 px-4 mt-6 rounded">
                                        Filtrar
                                    </button>
                                </div> 
                            </div> 
                         )}
                            {selectedOption === 'atendimento' && (
                            <div className='flex'>
                                <div class="w-full md:w-1/2 px-4 ml-8 mb-6 mt-4 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="Atendimento">
                                    Atendimento
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Atendimento" name="Atendimento" type="text" onChange={handleChange} placeholder="12455"/>
                                </div>
                                <div className='ml-4 mt-4'>
                                    <button class="bg-gray-700 hover:bg-green-600 text-white font-bold py-3 px-4 mt-6 rounded">
                                        Filtrar
                                    </button>
                                </div>    
                            </div> 
                            )}
                            </form>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center overflow-x-auto mt-8 p-8 ">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Atendimento
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Origem
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Paciente
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Conta
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Data do Atendimento
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Data da Alta
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    VLR HNL
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    VLR HO
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Total
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Valor Aprovado
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Quantidade
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Observação
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Operação
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    123456
                                </th>
                                <td class="px-6 py-4">
                                    654321
                                </td>
                                <td class="px-6 py-4">
                                    Stênio Ellison
                                </td>
                                <td class="px-6 py-4">
                                    654321
                                </td>
                                <td class="px-6 py-4">
                                    25/01/2023
                                </td>
                                <td class="px-6 py-4">
                                    25/01/2023
                                </td>
                                <td class="px-6 py-4">
                                    R$120,20
                                </td>
                                <td class="px-6 py-4">
                                    R$120,20
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    <div className='flex gap-4 justify-center'>
                                        <button title="Editar" className='p-2 bg-green-600 rounded hover:bg-green-500'>
                                            <FontAwesomeIcon size='lg' icon={faPencil} color='white'/>
                                        </button>
                                        <button title="Clique aqui para baixar o arquivo" className='p-2 bg-orange-600 rounded hover:bg-orange-500'>
                                            <FontAwesomeIcon size='lg' icon={faDownload} color='white'/>
                                        </button>
                                    </div>
                                </td> 
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    123456
                                </th>
                                <td class="px-6 py-4">
                                    654321
                                </td>
                                <td class="px-6 py-4">
                                    Stênio Ellison
                                </td>
                                <td class="px-6 py-4">
                                    654321
                                </td>
                                <td class="px-6 py-4">
                                    25/01/2023
                                </td>
                                <td class="px-6 py-4">
                                    25/01/2023
                                </td>
                                <td class="px-6 py-4">
                                    R$120,20
                                </td>
                                <td class="px-6 py-4">
                                    R$120,20
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    <div className='flex gap-4 justify-center'>
                                        <button title="Editar" className='p-2 bg-green-600 rounded hover:bg-green-500'>
                                            <FontAwesomeIcon size='lg' icon={faPencil} color='white'/>
                                        </button>
                                        <button title="Clique aqui para baixar o arquivo" className='p-2 bg-orange-600 rounded hover:bg-orange-500'>
                                            <FontAwesomeIcon size='lg' icon={faDownload} color='white'/>
                                        </button>
                                    </div>
                                </td> 
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    123456
                                </th>
                                <td class="px-6 py-4">
                                    654321
                                </td>
                                <td class="px-6 py-4">
                                    Stênio Ellison
                                </td>
                                <td class="px-6 py-4">
                                    654321
                                </td>
                                <td class="px-6 py-4">
                                    25/01/2023
                                </td>
                                <td class="px-6 py-4">
                                    25/01/2023
                                </td>
                                <td class="px-6 py-4">
                                    R$120,20
                                </td>
                                <td class="px-6 py-4">
                                    R$120,20
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    <div className='flex gap-4 justify-center'>
                                        <button title="Editar" className='p-2 bg-green-600 rounded hover:bg-green-500'>
                                            <FontAwesomeIcon size='lg' icon={faPencil} color='white'/>
                                        </button>
                                        <button title="Clique aqui para baixar o arquivo" className='p-2 bg-orange-600 rounded hover:bg-orange-500'>
                                            <FontAwesomeIcon size='lg' icon={faDownload} color='white'/>
                                        </button>
                                    </div>
                                </td> 
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    123456
                                </th>
                                <td class="px-6 py-4">
                                    654321
                                </td>
                                <td class="px-6 py-4">
                                    Stênio Ellison
                                </td>
                                <td class="px-6 py-4">
                                    654321
                                </td>
                                <td class="px-6 py-4">
                                    25/01/2023
                                </td>
                                <td class="px-6 py-4">
                                    25/01/2023
                                </td>
                                <td class="px-6 py-4">
                                    R$120,20
                                </td>
                                <td class="px-6 py-4">
                                    R$120,20
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    <div className='flex gap-4 justify-center'>
                                        <button title="Editar" className='p-2 bg-green-600 rounded hover:bg-green-500'>
                                            <FontAwesomeIcon size='lg' icon={faPencil} color='white'/>
                                        </button>
                                        <button title="Clique aqui para baixar o arquivo" className='p-2 bg-orange-600 rounded hover:bg-orange-500'>
                                            <FontAwesomeIcon size='lg' icon={faDownload} color='white'/>
                                        </button>
                                    </div>
                                </td> 
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    123456
                                </th>
                                <td class="px-6 py-4">
                                    654321
                                </td>
                                <td class="px-6 py-4">
                                    Stênio Ellison
                                </td>
                                <td class="px-6 py-4">
                                    654321
                                </td>
                                <td class="px-6 py-4">
                                    25/01/2023
                                </td>
                                <td class="px-6 py-4">
                                    25/01/2023
                                </td>
                                <td class="px-6 py-4">
                                    R$120,20
                                </td>
                                <td class="px-6 py-4">
                                    R$120,20
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    R$240,40
                                </td>
                                <td class="px-6 py-4">
                                    <div className='flex gap-4 justify-center'>
                                        <button title="Editar" className='p-2 bg-green-600 rounded hover:bg-green-500'>
                                            <FontAwesomeIcon size='lg' icon={faPencil} color='white'/>
                                        </button>
                                        <button title="Clique aqui para baixar o arquivo" className='p-2 bg-orange-600 rounded hover:bg-orange-500'>
                                            <FontAwesomeIcon size='lg' icon={faDownload} color='white'/>
                                        </button>
                                    </div>
                                </td> 
                            </tr>
                        </tbody>
                    </table>
                    <div className='mt-8'>
                        <button class="bg-gray-700 hover:bg-green-600 text-white font-bold py-3 px-4 mt-6 rounded">
                            Cadastrar informações
                        </button>
                    </div>
                </div>     
                </div>       
                

            
        </>
            
          )
        }

  
export default UnimedConsul;