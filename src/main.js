import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
//import { temp } from "./js/one.js";
// import * as oneFunctions from "./js/one.js";
// example function call: oneFunctions.temp();

$(document).ready(function () {
  let request = new XMLHttpRequest();
  const url = `https://api.nasa.gov/insight_weather/?api_key=${process.env.API_KEY}&feedtype=json&ver=1.0`;

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      getElements(response);
    }
  };

  request.open("GET", url, true);
  request.send();

  function getElements(response) {
    let currentDay = `${response.sol_keys[1]}`;
    let yesterday = `${response.sol_keys[0]}`;

    console.log(currentDay);

    `${response[currentDay].AT.av}`;
    console.log(`${response[currentDay].AT.av}`);

    $(".Temp").text(
      `Average temp on Mars today ${response[currentDay].AT.av}°F
      with a High of ${response[currentDay].AT.mx}°F and a low of ${response[currentDay].AT.mn}°F`
    );
    $(".Earthdate").text(
      `Todays date on Earth is ${response[currentDay].First_UTC}`
    );
    $(".YTemp").text(
      `Average temp on Mars yesterday ${response[yesterday].AT.av}°F
      with a High of ${response[yesterday].AT.mx}°F and a low of ${response[yesterday].AT.mn}°F`
    );
    $(".YEarthdate").text(
      `Yesterday date on Earth is ${response[yesterday].First_UTC}`
    );
    console.log(`${response[yesterday].First_UTC}`);
  }
});
