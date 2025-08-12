import { useState } from 'react'
import FlightResults from './components/modules/FlightResults'
import FlightSearchForm from './components/modules/FlightSearchForm'
import type { ISearchData } from './types'
import getAccessToken from './utils/getAccessToken'
import HeroSection from './components/modules/HeroSection'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'

function App() {

  const [flights, setFlights] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleSearch = async (formData: ISearchData) => {
    setLoading(true)
    console.log(formData)
    const token = await getAccessToken();

    const queryParams = new URLSearchParams({
      originLocationCode: formData.from,
      destinationLocationCode: formData.to,
      departureDate: formData.date,
      adults: String(formData.passengers),
      max: String(5),
    });
    const res = await fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?${queryParams}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const flight = await res.json();
    setFlights(flight.data || []);
    setLoading(false)
    console.log(flight)
  }

  return (
    <>
      <div className='w-[95%] md:w-[85%] lg:max-w-7xl mx-auto'>
        <Navbar />
        <FlightSearchForm onSearch={handleSearch} loading={loading} />
        <FlightResults flights={flights} />
        <HeroSection />
      </div>
      <Footer />
    </>
  )
}

export default App
