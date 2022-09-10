import { BestLodgement } from '../../components/bestLodgement/BestLodgement'
import { Featured } from '../../components/featured/Featured'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { MailList } from '../../components/mailLists/MailList'
import { Navbar } from '../../components/navbar/Navbar'
import { PropertiesList } from '../../components/propertiesList/PropertiesList'
import './home.css'

export const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h2 className="homeTitle">Busca por tipo de alojamiento</h2>
        <PropertiesList/>
        <h2 className="homeTitle">Hospejaes inolvidables</h2>
        <BestLodgement/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}


