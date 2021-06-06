import React from "react";

function Footer() {

var currYear = new Date().getFullYear();


  return (
    <div>
      <footer>
        <p>copyright@{currYear} </p>
      </footer>
    </div>
  );
}
export default Footer;
