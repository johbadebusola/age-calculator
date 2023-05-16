import React, { useRef, useState } from "react";
import "./App.css";
import arrow from "../src/assets/images/arrow.svg";
const AgeCalculator = () => {
  const yearsValue = useRef();
  const monthsValue = useRef();
  const daysValue = useRef();
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [days, setDays] = useState("--")
  const [years, setYears] = useState("--")
  const [months, setMonths] = useState("--")

  const submit = () => {
    if (yearsValue.current.value.length === 0) {
      setError1(true);
      console.log(error1);
      return
    } else if (monthsValue.current.value.length === 0) {
      setError1(true);
      console.log("error2");
      return
    } else if (daysValue.current.value.length === 0) {
      setError1(true);
      console.log("error3");
      return
    } else {
      setError1(false);
    }

    if (yearsValue.current.value > 2023) {
      setError2(true);
      console.log("not ok");
      return
    } else if (monthsValue.current.value > 12) {
      setError2(true);
      console.log("not 1");
      return
    } else if (daysValue.current.value > 31) {
      setError2(true);
      console.log(" not 2");
      return
    } else {
      setError2(false);
    }

    // Calculations for the output
    var day1 =  daysValue.current.value
    var month1 = monthsValue.current.value
    var year1 = yearsValue.current.value

    var date = new Date()
    var day2 = date.getDate()
    var month2 = 1 + date.getMonth()
    var year2 = date.getFullYear()
    const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31]
  
    if(day1 > day2){
      day2 = day2 + monthDays[month2 -1]
      month2 = month2 - 1
    }

    if(month1 > month2){
      month2 = month2 + 12
      year2 = year2 -1
    }

    var d = day2 - day1
    var m = month2 - month1
    var y = year2 - year1

    setDays(d)
    setMonths(m)
    setYears(y)

    console.log( d , m , y);



  };

  
  return (
    <>
      <div className="cont">
        <div className="inputFeildCont">
          <div className="inputField">
            <label className={error1 ? "error" : " "}> DAY </label>
            <input
              className={error1 ? "error-border" : " "}
              type="text"
              placeholder="DD"
              ref={daysValue}
            />
            <p className={error1 ? "error-message" : " "}>
              This field is required
            </p>
            <p className={error2 ? "error-message" : " "}>
              Must be a valid day
            </p>
          </div>

          <div className="inputField">
            <label className={error1 ? "error" : " "}> MONTH</label>
            <input
              className={error1 ? "error-border" : " "}
              type="text"
              placeholder="MM"
              ref={monthsValue}
            />
            <p className={error1 ? "error-message" : " "}>
              {" "}
              This field is required
            </p>
            <p className={error2 ? "error-message" : " "}>
              Must be a valid month
            </p>
          </div>

          <div className="inputField">
            <label className={error1 ? "error" : " "}> YEAR</label>
            <input
              className={error1 ? "error-border" : " "}
              type="text"
              placeholder="YYYY"
              ref={yearsValue}
            />
            <p className={error1 ? "error-message" : " "}>
              {" "}
              This field is required
            </p>
            <p className={error2 ? "error-message" : " "}>
              Must be a valid year
            </p>
          </div>
        </div>
        <hr />

        <div className="arrow" onClick={submit}>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="output">
          <h2>
           {years} <span> years</span>
          </h2>
          <h2>
           {months} <span> months</span>
          </h2>
          <h2>
            {days} <span> days</span>
          </h2>
        </div>
      </div>
    
    </>
  );
};

export default AgeCalculator;
