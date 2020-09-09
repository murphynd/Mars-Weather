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
    let currentDay = `${response.sol_keys[0]}`;

    console.log(currentDay);

    `${response[currentDay].AT.av}`;
    console.log(`${response[currentDay].AT.av}`);

    $(".sol").text(`${response[currentDay].AT.av}`);
    $(".date").text(`${response[currentDay].First_UTC}`);
    console.log(`${response[currentDay].First_UTC}`);
  }
});
