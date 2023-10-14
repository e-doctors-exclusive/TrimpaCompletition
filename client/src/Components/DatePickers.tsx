import "../styles/DatePickers.css";
import "../styles/landing.css";
import React, { useState } from "react";
import CalendarIcon from "../Assets/icons/calendar.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickersProps {
  handleOpenDateModal: () => void; // Define the type of the function
}

const DatePickers: React.FC<DatePickersProps> = ({
  handleOpenDateModal,
}: DatePickersProps) => {

  const [selectedOption, setSelectedOption] = useState("roundTrip");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  /***************************Round trip************************************************/ 

  const [departDate, setDepartDate] = React.useState<Date | null>(null);
  const [arriveDate, setArriveDate] = React.useState<Date | null>(null);
  const handleDepartDateChange = (date: Date | null) => {
    setDepartDate(date);
  };

  const handleArriveDateChange = (date: Date | null) => {
    setArriveDate(date);
  };
  console.log(`depart:${departDate} arrive:${arriveDate}`);
  
  /******************************One way********************************************/
 
  const [oneWayTrip, setOneWayTrip] = React.useState<Date | null>(null);

  const handleOneWayTrip = (date: Date | null) => {
    setOneWayTrip(date);
  };
  

  return (
    <div className="date-picker">
      <div className="date-picker-content">
        <div className="radio_inputs">
          <div className="radios">
            <input 
              type="radio" 
              value="roundTrip"
              checked={selectedOption === "roundTrip"}
              onChange={() => handleOptionChange("roundTrip")}
            />
            <p>Round trip</p>
          </div>
          <div className="radios">
            <input 
              type="radio"
              value="oneWay"
              checked={selectedOption === "oneWay"}
              onChange={() => handleOptionChange("oneWay")}
            />
            <p>One way</p>
          </div>
        </div>
        <div className="data_pickerd_date_container">
          <div className="data_pickerd_date">
            <div className="date_data">
              <img src={CalendarIcon} alt="" />
              <p>{selectedOption === "roundTrip" ? `Depart - Return` : "Depart"}</p>
              {/* <p>Return</p> */}
            </div>
          </div>
          <button onClick={handleOpenDateModal} className="aa">
            Done
          </button>
        </div>
      </div>
      <div className="Round_trip">
      {selectedOption === "roundTrip" ? (
          <>
            <DatePicker
              selected={departDate}
              onChange={handleDepartDateChange}
              dateFormat="MMMM/dd"
              inline
            />
            <DatePicker
              selected={arriveDate}
              onChange={handleArriveDateChange}
              dateFormat="MMMM/dd"
              inline
            />
          </>
        ) : (
          <DatePicker
            selected={oneWayTrip}
            onChange={handleOneWayTrip}
            inline
            dateFormat="MM/dd"
            className="custom-datepicker"
          />
        )}
      </div>
      <div className="One_way">

      </div>
    </div>
  );
};

export default DatePickers;
