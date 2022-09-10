import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import './hotel.css'
import { MailList } from '../../components/mailLists/MailList'
import { Footer } from '../../components/footer/Footer'
import { useState } from 'react'

const photos =[
  {
    src:'https://t-cf.bstatic.com/xdata/images/hotel/max500/335069940.jpg?k=6211153071b46c3388797e3b9de21db6475762180561f5ea6dd16c9dd33020b6&o=&hp=1'
  },
  {
    src:'https://t-cf.bstatic.com/xdata/images/hotel/max300/335067797.jpg?k=315cac51acf9bdcb6898b7c71d25dcdc05bd13b100b21f15a7c7df4429b93f1a&o=&hp=1'
  }, 
  {
    src:'https://t-cf.bstatic.com/xdata/images/hotel/max500/349336164.jpg?k=24c956e6f6460cb04f70f2d7c8434d2dec05891fb20f0d7a03aec08a1679fb8d&o=&hp=1'
  },
  {
    src:'https://t-cf.bstatic.com/xdata/images/hotel/max300/169927665.jpg?k=1add784d70feaf54c1aec9da586fe2fae63957f7713d7d32490fabd15e65e730&o=&hp=1'
  },

  {
    src:'https://t-cf.bstatic.com/xdata/images/hotel/max300/335071098.jpg?k=9bc0a62d13df9dc004da7ce2de9c1d6264b2a2388b549eecfe617fa6abaa19ed&o=&hp=1'
  },
  {
    src:'https://t-cf.bstatic.com/xdata/images/hotel/max500/335197505.jpg?k=75063241090861964a67a18c9e41db3d8f87d6bb20f30f8f78361ecb3f1b752a&o=&hp=1'
  },
 
  {
    src:'https://t-cf.bstatic.com/xdata/images/hotel/max300/246135666.jpg?k=1c290a942e7afb200bbc2427f3b617a9e42aafeb3dbe2ae5974f3e8f2c78b07e&o=&hp=1'
  }
]


export const HotelPage = () => {
  const [ slideNumber, setSlideNumber ] = useState(0)
  const [ open, setOpen ] = useState(false)

  const handlerOpen = (i) =>{
    setSlideNumber(i)
    setOpen(true)
  }

  const handlerMove = (direction) =>{
    let newSliderIndex;

    if(direction==='l'){
      newSliderIndex = slideNumber === 0 ? 5 : slideNumber-1
    } else{
      newSliderIndex = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber(newSliderIndex)
  }
  
  return (
    <div>
      <Navbar/>
      <Header type='hotels'/>
      <div className="hotelContainer">
        {
          open && 
            <div className="slider">
              <FontAwesomeIcon 
                icon={faCircleXmark} 
                className='close'
                onClick={()=> setOpen(false)}
              />
              <FontAwesomeIcon 
                icon={faCircleArrowLeft}
                className='arrow'
                onClick={()=>handlerMove('l')}
              />
              <div className="sliderWrapper">
              <img 
                src={photos[slideNumber].src} 
                alt='foto' 
                className='sliderImg'
              />
              </div>
              <FontAwesomeIcon 
                icon={faCircleArrowRight}
                className='arrow'
                onClick={()=>handlerMove('r')}
              />
            </div>
          }
        <div className="hotelWrapper">
          <button className='bookNow'>Reserva Ahora</button>
          <h1 className="hotelTitle">
            Waldorf Hotel Boutique
          </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>
              Av. La Industria, Esquina Campo Elias a Puente Anauco,Hotel Waldorf PB, Urbanización La Candelaria, Caracas, 1010 Caracas, Venezuela – Muy buena ubicación.
            </span>
          </div>
          <span className="hotelDistance">
            500mts del Metro
          </span>
          <span className="hotelPriceHighlight">
            Reserva desde $120 la noche con taxi gratis incluido desde el hotel al areopuerto
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => 
              <div className="hotelImageWrapper" key={i}>
                <img 
                  src={photo.src} 
                  alt="Hotel" 
                  className='hotelImg'
                  onClick={() => handlerOpen(i)}
                />
              </div>
            )}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h2 className='hotelSubTitle'>Quedate en el corazon de Caracas</h2>
              <p className='hotelDesc'>
                El Waldorf hotel Boutique se encuentra en Caracas y ofrece restaurante, piscina al aire libre, centro de fitness y bar. Además, hay recepción 24 horas, servicio de habitaciones y WiFi gratuita en todas las instalaciones. El hotel cuenta con jardín y solárium.
                Las habitaciones disponen de aire acondicionado, escritorio, caja fuerte, TV de pantalla plana y baño privado con ducha. Las habitaciones del Waldorf hotel Boutique están equipadas con ropa de cama y toallas.
                Todas las mañanas se sirve un desayuno continental y buffet.
                El Waldorf hotel Boutique alberga un centro de negocios.
                El hotel está cerca del Museo de Bellas Artes de Caracas, la Galería Nacional de Arte y el parque Los Caobos.
                A las parejas les encanta la ubicación — Le han puesto un 8,2 para viajes de dos personas.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h2>Perfecto 9 noches de estadia</h2>
              <span>
                Localizado en el Corazon de Caracas, con una excelente valoracion de 9.00 por parte de los huespedes.
              </span>
              <h3>
                <b>$1080</b> (9 noches)
              </h3>
              <button>RESERVA</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer />
      </div>
    </div>
  )
}
