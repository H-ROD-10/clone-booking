import './searchItem.css'



export const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img 
            src="https://t-cf.bstatic.com/xdata/images/hotel/square600/335069940.webp?k=0a764dc9c1fa93d51b26627e2449d7e6d81df6ce4b777ab078434258fb689f7f&amp;o=&amp;s=1" 
            alt="" 
            className="siImg" 
        />
        <div className="siDesc">
            <h1 className="siTitle">Waldorf Hotel Boutique</h1>
            <span className='siDistance'>Cerca del metro</span>
            <span className='siTaxiOp'>
                Taxi gratis Areopuerto
            </span>
            <span className='siSubtitle'>
                Habitación Deluxe
            </span>
            <span className='siFeatures'> 
                1 cama individual - 1 baño - 21mts2 
            </span>
            <span className='siCancelOp'>
                Cancelación GRATIS • Sin pago por adelantado
            </span>
            <span className='siCancelOpSubtitle'>
                Puedes cancelar más tarde. Aprovecha y consigue un buen precio hoy.
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <div>
                    <span>Excelente</span>
                    <p>345 comentarios</p>
                </div>
                <button>8.9</button>
            </div>
            <div className='siDetailTexts'>
                <span className="siPrice">$120/<small>noche</small></span>
                <span className="siTaxOp">
                    Incluye impuestos y tasas
                </span>
                <button className='siCheckBtn'>
                    Ver Disponibilidad
                </button>
            </div>
        </div>
    </div>
  )
}

