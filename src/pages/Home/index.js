
import '../../index.css';
import React, {useState} from 'react';
import Unimed from '../../assets/logos/unimed.png';
import Card from '../../components/Cards';
import Header from '../../components/Header';


function Home() {
    const [open, setOpen] = useState(true) //criando estado
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
        { title: 'Unimed', img: Unimed, link:'faturamento/unimed' },
        { title: 'Unimed', img: Unimed, link:'faturamento/unimed' },
        { title: 'Unimed', img: Unimed, link:'faturamento/unimed' },
        { title: 'Unimed', img: Unimed, link:'faturamento/unimed' },
        { title: 'Unimed', img: Unimed, link:'faturamento/unimed' },
        { title: 'Unimed', img: Unimed, link:'faturamento/unimed' },
        { title: 'Unimed', img: Unimed, link:'faturamento/unimed' },
        { title: 'Unimed', img: Unimed, link:'faturamento/unimed' },
      ];  
     
      return (
        <>
            <div class="bg-gray-800 h-screen flex flex-col  items-center">
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <Header/>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-8 max-w-max">
                {cardsData.map((card, index) => (
                  <Card key={index} title={card.title} img={card.img} icon={card.icon} link={card.link}  />
                ))}
                </div>
              </div>
        </>
            
          )
        }

  
export default Home;