import "../styles/FlightFinder.css";
import React, { useEffect ,useState} from "react";
import ArrowDownIcon from "../Assets/icons/chevron down.svg";
import DatePickers from "../Components/DatePickers";
import DepartIcon from "../Assets/icons/departure.svg";
import ArrivalIcon from "../Assets/icons/arrival.svg";
import CalendarIcon from "../Assets/icons/calendar.svg";
import PersonIcon from "../Assets/icons/person solid.svg";
import FlightData from "../Components/FlightData";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBaR";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchAllFlights, fetchFlights } from "../store/flights";
import { useNavigate } from "react-router-dom";

const FlightFinder: React.FC = () => {
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, "this is date");

    setDateFrom(e.target.value);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [departDate, setDepartDate] = React.useState<Date | null>(null);
  const [arriveDate, setArriveDate] = React.useState<Date | null>(null);
const navigate = useNavigate()
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOpenDateModal = () => {
    setDateModalVisible(!dateModalVisible);
  };

  const modalClass = dateModalVisible ? "date_picker_modal" : "hidden";

  const [destFrom, setDestFrom] = useState("");
  const [destTo, setDestTo] = useState<string>("");
  const [dateFrom, setDateFrom] = useState<string>("");

  interface objTypeAll {
    destFrom: string;
    destTo: string;
    dateFrom: Date;
    dateTo: Date;
    price: number;
    brand:any
  }

  const dispatch: AppDispatch = useDispatch();

  const flights = useSelector((state: RootState) => state.flights.Flights);
  // console.log(fligh  ts,"this is flights");

  const allFlight: objTypeAll[] = useSelector(
    (state: RootState) => state.flights.allFlights
  );

  useEffect(() => {
    dispatch(fetchAllFlights());
    console.log(flights)
  }, []);

  let a = allFlight.map((e: objTypeAll) => e.destFrom);
  let b = allFlight.map((e: objTypeAll) => e.destTo);
  let prices = allFlight.map((e: objTypeAll) => e.price);
  let airlines = flights.map((e: objTypeAll) => e.brand.name);
  let times = flights.map((e: objTypeAll) => e.dateTo);
  let flight = { origin: [...new Set(a)], destination: [...new Set(b)], price:[...new Set(prices)], airlines:[...new Set(airlines)],times:[...new Set(times)]};
  // console.log(flight.origin)

  interface flightDatas{
    Reservations: any[];
    Seats: any[];
    Users: any[];
    arrivalTime: string;
    brand: any;
    brandId: any;
    createdAt: string;
    dateFrom: string;
    dateTo: string;
    departureTime: string;
    destFrom: string;
    destTo: string;
    id: number;
    price: number;
    updatedAt: string;
  };

  useEffect(()=>{
    console.log(flights)
  },[])
  return (
    <>
  <Navbar/>
      <div className="flighFinder_main_container">
        <div className="flighFinder_container">
        <div className="landing-inputs"  id="flightfinder-search">
            <div className="landing-input">
              <i className="fa-solid fa-plane-departure"></i>
              <select
                onChange={(e) => setDestFrom(e.target.value)}
                name="from"
                id=""
                placeholder="where are you going"
              >
                <option>where are you going</option>
                {flight.origin.map((e) => (
                  <option value={e}>{e}</option>
                ))}
              </select>
            </div>

            <div className="landing-input">
              <i className="fa-solid fa-plane-arrival"></i>
              <select
                onChange={(e) => setDestTo(e.target.value)}
                name="from"
                id=""
                placeholder="where are you going"
              >
                <option value="">where are you comming</option>
                {flight.destination.map((e) => (
                  <option value={e}>{e}</option>
                ))}
              </select>
            </div>

            <div className="landing-input calendar_check">
              <div className="date_data">
                <img
                  id="dateIcon"
                  src={CalendarIcon}
                  alt=""
                  onClick={handleOpenDateModal}
                />
                <p>Depart - </p>
                <p>Return</p>
              </div>
              <div className="date_picker_modal" id={modalClass}>
                <DatePickers
                  handleOpenDateModal={handleOpenDateModal}
                  setDepartDate={setDepartDate}
                  setArriveDate={setArriveDate}
                />
              </div>
            </div>

            <div className="landing-input">
              <i className="fa-solid fa-user"></i>
              <input type="number" placeholder="Adults" />
            </div>
            <div>
              <button
                className="landing-boutton"
                onClick={() => {
               
                    dispatch(
                      fetchFlights({
                        destFrom,
                        destTo,
                        departDate:
                          departDate
                            ?.toLocaleDateString()
                            .replace(/\//g, "-") ?? "",
                        arriveDate:
                          arriveDate
                            ?.toLocaleDateString()
                            .replace(/\//g, "-") ?? "",
                      })
                    )
                }}
              >
                search
              </button>
            </div>
            
            </div>
            <div className="filter">
               <div className="oneselect">
                <select name="" id="">
                <option>Price</option>
                  {
                    flight.price.map((e)=>{
                      return <option>{e}</option>
                    })
                  }
                </select>
               </div> 
               <div className="oneselect">
               <select name="" id="">
                <option>Duration</option>
                  {
                    flight.airlines.map((e)=>{
                      return <option>{e}</option>
                    })
                  }
                </select>
               </div>
               <div className="oneselect">
               <select name="" id="">
                <option>Times</option>
                  {
                    flight.times.map((e)=>{
                      return <option>{e.toString().slice(0,10)}</option>
                    })
                  }
                </select>
               </div>
               <div className="oneselect">
               <select name="" id="">
                <option>Seat class</option>
                <option>Business class  </option>
                <option>Economy</option>
                </select>
               </div>
               <div className="oneselect">
               <select name="" id="">
                <option>Stop</option>
                  {
                    
                  }
                </select>
               </div>
            </div>
          <div className="flighFinded">
            <div className="flighs_finded_data">
              <p>
                Choose a <span>departing</span> flight
              </p>
              <div className="flight_data_container">
                {/* data li bech tmapi aliha */
                flights.map((oneFlight: flightDatas)=>{
                  return <FlightData oneFlight={oneFlight} />
                })
                }
                {/* data li bech tmapi aliha */}
              </div>
              {/* <button className="show_flights">Show all flights</button> */}
              <div className="trip_direction_map"></div>
            </div>
            <div className="flighs_finded_pricing"></div>
          </div>
        </div>
        <div className="flight_suggestion">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default FlightFinder;
