import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
// import { round } from "./js/two.js";
// import * as oneFunctions from "./js/one.js";
// example function call: oneFunctions.temp();

// $(document).ready(function () {
//   let request = new XMLHttpRequest();
//   const url = `https://api.nasa.gov/insight_weather/?api_key=${process.env.API_KEY}&feedtype=json&ver=1.0`;
//   request.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       console.log(response);
//       getElements(response);
//     }
//   };
//   request.open("GET", url, true);
//   request.send();
//   function getElements(response) {
//     let currentDay = `${response.sol_keys[1]}`;
//     let earthdate = new Date(`${response[currentDay].First_UTC}`);
//     $(".Temp").text(`${round(response[currentDay].AT.av)}°F`);
//     $(".High").text(`${round(response[currentDay].AT.mx)}°F`);
//     $(".Low").text(`${round(response[currentDay].AT.mn)}°F`);
//     $(".Earthdate").text(earthdate);
//   }
// });
$(document).ready(function () {
  $("form#rover").submit(function (event) {
    event.preventDefault();
    let date = $("#dateinput").val();
    // let roverName = $("input:checkbox[name=rovers]:checked");
    let request = new XMLHttpRequest();
    let url2 = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${process.env.API_KEY}`;
    // console.log(roverName);
    console.log(date);
    console.log(url2);
    // yyyy-mm-dd
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        getElements(response);
      }
    };
    request.open("GET", url2, true);
    request.send();
    function getElements(response) {
      $("#imageStatus").text("Found");
      $("#imageID").src = `${response.photos[0].img_src}`;
      $("#roverCaption").text(`${response.photos[0].rover.name}`);
      $("#landingCaption").text(`${response.photos[0].rover.landing_date}`);
      $("#endingCaption").text(`${response.photos[0].rover.max_date}`);
    }
  });
});
