import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {format} from 'date-fns'
import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import './hotelsLists.css'
import { DateRange } from 'react-date-range'
import { SearchItem } from '../../components/searchItem/SearchItem'

export const HotelsListsPage = () => {

  const location = useLocation()
  console.log(location)

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false)

  return (
    <div>
      <Navbar /> 
      <Header type='hotels'/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className='lsTitle'>BUSCAR</h1>
            <div className="lsItem">
              <label htmlFor="">Destino</label>
              <input 
                type="text" 
                placeholder={destination} 
               />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in</label>
              <span onClick={()=> setOpenDate(!openDate)}>
              {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {
                openDate && <DateRange
                  onChange={(item) => setDate([item.selection])} minDate={new Date()}
                  ranges={date}
                />
              }
            </div>
            <div className="lsItem">
              <label>Huespedes</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    <small>Precio minimo por noche</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    <small>Precio maximo por noche</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    <small>Adultos</small>
                  </span>
                  <input 
                    type="number" 
                    min={1}
                    className="lsOptionInput" 
                    placeholder={options.adults}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    <small>Niños</small>
                  </span>
                  <input 
                    type="number" 
                    min={0}
                    className="lsOptionInput" 
                    placeholder={options.children}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    <small>Habitaciòn</small>
                  </span>
                  <input 
                    type="number" 
                    min={1}
                    className="lsOptionInput" 
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Buscar</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}
