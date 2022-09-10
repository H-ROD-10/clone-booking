import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faRoute, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom';

import './header.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)

    const [options, setOptions] = useState({
        adults: 1,
        children:0,
        room:1
    })
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [destination, setDestination] = useState("")

      const navigate = useNavigate()

      const handleOption = (name, operation) =>{
        setOptions( prev =>{
            return{
                ...prev, [name]: operation === 'add'? options[name] + 1 :  options[name] - 1
            }
        })
      }

      const handlerSearch = () =>{
        navigate('/hotels', {state:{destination, date, options}})
      }
  return (
    <div className='header'>
        <div className={type === "hotels"? "headerContainer headerHotels":"headerContainer"}>
            <div className="headerList">
                <div className="headerListItems active">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Quedate</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faRoute}/>
                    <span>Atracciones</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Vuelos</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car-rentals</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Taxis</span>
                </div>
            </div>
          { type !== 'hotels' &&
            <>
              <h1 className="headerTitle">Buscas Diversion? Aqui Es.</h1>
            <p className='headerDesc'>Viaja, come, rumbea, con nosotros, registrate gratis y reclama tu vale de 10% de descuento.</p>
            <button className="headerBtn">Login / Registro</button>
            <div className='headerSearch'>
                <div className="headerSearchItems">
                    <FontAwesomeIcon icon={faBed} className="searchIcon"/>
                    <input 
                        type="text" 
                        placeholder="¿A donde quieres ir?" 
                        className='headerSearchInput' 
                        onChange={(e)=> setDestination(e.target.value)}
                    />
                </div>
                <div className="headerSearchItems">
                    <FontAwesomeIcon icon={faCalendarDays} className="searchIcon"/>
                    <span className='headerSearchText' onClick={()=> setOpenDate(!openDate)}>
                        {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}  `}
                    </span>
                    {
                        openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                    />
                    }
                </div>
                <div className="headerSearchItems">
                    <FontAwesomeIcon icon={faPerson} className="searchIcon"/>
                    <span className='headerSearchText' onClick={() => setOpenOptions(!openOptions)}>
                        {`${options.adults} adults - ${options.children} children - ${options.room} room`}
                    </span>
                    {
                        openOptions && <div className="options">
                        <div className="optionsItems">
                            <span className="optionText">Adult</span>
                            <div className='optionCounter'>
                                <button 
                                    className="optionCounterBtn" 
                                    onClick={() => handleOption("adults", "decrement")} 
                                    disabled={options.adults <= 1}
                                >
                                        -
                                </button>
                                <span className='optionsCountNumber'>{options.adults}</span>
                                <button className="optionCounterBtn" onClick={() => handleOption("adults", "add")}>+</button>
                            </div>
                        </div>
                        <div className="optionsItems">
                            <span className="optionText">Children</span>
                            <div className='optionCounter'>
                                <button 
                                    className="optionCounterBtn" 
                                    onClick={() => handleOption("children", "decrement")}
                                    disabled={options.children <= 0}
                                >
                                    -
                                </button>
                                <span className='optionsCountNumber'>{options.children}</span>
                                <button className="optionCounterBtn" onClick={() => handleOption("children", "add")}>+</button>
                            </div>
                        </div>
                        <div className="optionsItems">
                            <span className="optionText">Room</span>
                            <div className='optionCounter'>
                                <button 
                                    className="optionCounterBtn" 
                                    onClick={() => handleOption("room", "decrement")}
                                    disabled={options.room <= 1}
                                >
                                    -
                                </button>
                                <span className='optionsCountNumber'>{options.room}</span>
                                <button className="optionCounterBtn" onClick={() => handleOption("room", "add")}>+</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <div className="headerSearchItems">
                    <button 
                        className='headerBtn' 
                        style={{backgroundColor: "orangered", color:"white"}}
                        onClick={handlerSearch}
                    >
                        Buscar
                    </button>
                </div>
            </div>
            </>
          }
        </div>
    </div>
  )
}
