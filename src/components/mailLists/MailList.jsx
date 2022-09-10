import './mailList.css'

export const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">¡Ahorra tiempo y dinero!</h1>
        <p className="desc">Regístrate y te enviaremos las mejores ofertas para ti</p>
        <div className="mailInputContainer">
            <input 
                type="email" 
                name="" 
                className=""
                placeholder='Ingresa tu email'
             />
             <button>Suscribete</button>
        </div>
    </div>
  )
}
