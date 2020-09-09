import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { temp } from "./js/one.js";
// import * as oneFunctions from "./js/one.js";
// example function call: oneFunctions.temp();

$(document).ready(function () {
  $("#weatherLocation").click(function () {
    const zipcode = $("#zip").val();
    $("#zip").val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${process.env.API_KEY}`;
    console.log(process.env.API_KEY);

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $(".nameOfCity").text(`You requested information on ${response.name}.`);
      $(".showHumidity").text(`The humidity in ${zipcode} is ${response.main.humidity}%`);
      $(".showTemp").text(`The temperature in fahrenheit is  ${temp(response.main.temp)} degrees.`);
    }
  });
});
