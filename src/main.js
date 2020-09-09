import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { round } from "./js/two.js";
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
      `Average temp on Mars today ${round(response[currentDay].AT.av)}°F
      with a High of ${round(
        response[currentDay].AT.mx
      )}°F and a low of ${round(response[currentDay].AT.mn)}°F`
    );
    $(".Earthdate").text(
      `Todays date on Earth is ${Date(response[currentDay].First_UTC)}`
    );
    $(".YTemp").text(
      `Average temp on Mars yesterday ${round(response[yesterday].AT.av)}°F
      with a High of ${round(response[yesterday].AT.mx)}°F and a low of ${round(
        response[yesterday].AT.mn
      )}°F`
    );
    $(".YEarthdate").text(
      `Yesterday date on Earth is ${Date(response[yesterday].First_UTC)}`
    );
    console.log(`${response[yesterday].First_UTC}`);
  }
});
