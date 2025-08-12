/* eslint-disable @typescript-eslint/no-explicit-any */
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { PiAirplaneInFlightLight } from "react-icons/pi";
import { Button } from "../ui/button";

const FlightResults = ({ flights }: { flights: any[] | null }) => {
  return (
    <div>
      {flights && flights.length === 0 && (
        <div className="p-6 rounded-lg bg-blue-50 w-full lg:w-4/5 mx-auto my-8 text-center flex flex-col items-center">
          <h3 className="font-medium text-xl text-gray-700">No flights found for your search</h3>
          <p className="mt-2 text-gray-500 text-sm">We couldn’t find any matching flights. Please modify your search criteria and try again.</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-14">
        {flights?.map((flight) => {
          const airlineCode = flight.validatingAirlineCodes[0];
          const stops = flight.itineraries[0].segments.length - 1;
          const price = `${flight.price.total} ${flight.price.currency}`;
          const duration = flight.itineraries[0].duration
          const formatDuration = duration.slice(2).replace("H", "h ").replace("M", "m")
          const departure = flight.itineraries[0].segments[0].departure.iataCode;
          const arrival = flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode;
           
          console.log(formatDuration)

          return ( 
            <div key={flight.id}>
              <div className="flex flex-col lg:flex-row items-center rounded-lg border text-white bg-[#34699A]">
                <div className="w-full p-5 lg:p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col items-center">
                      <PiAirplaneTakeoffLight className="text-2xl" />
                      {departure}
                    </div>
                    <div className=" w-full text-center text-sm font-semibold ">
                      <div>
                        {formatDuration}
                      </div>
                      <div className="border-0 border-t-2 border-gray-400">
                      {stops === 0 ? "Direct" : `${stops} Stops`}
                    </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <PiAirplaneInFlightLight className="text-2xl" />
                      {arrival}
                    </div>
                  </div>
                </div>

                <div className="w-full p-4 text-center rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
                  <p className="text-xs font-semibold">{airlineCode} Airline</p>
                    <h1 className="text-lg font-semibold md:text-xl mb-3 text-nowrap">{price}</h1>
                    <Button className="bg-white">Select</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlightResults;
