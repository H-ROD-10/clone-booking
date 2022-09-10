
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { HotelPage } from "./pages/hotel/HotelPage";
import { HotelsListsPage } from "./pages/hotels/HotelsListsPage";



function App() {
 

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hotels" element={<HotelsListsPage />} />
      <Route path="/hotel/:id" element={<HotelPage />} />

     </Routes>
    </BrowserRouter>
  )
}

export default App
