import React from "react";
/* import Aos from "aos";
import "aos/dist/aos.css"; */

function Footer(props) {
  return (
    <div class="footerComponent container">
      <div class="card-header">
        copyright @ &nbsp;
        <a href="https://github.com/NaveenKumarSA">Naveen Kumar S A</a>
      </div>
      <div class="card-body">
        <h4 class="card-title">Application Summary</h4>
        <h5>Front End - React.js </h5>
        <h5>
          Api -&nbsp;
          <a href="https://openweathermap.org/api">Open Weather Map.org</a>{" "}
        </h5>
        <h5>libraries used - React-Bootstrap </h5>
        <a href="https://naveenkumarsa.github.io/" class="btn btn-info">
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default Footer;
