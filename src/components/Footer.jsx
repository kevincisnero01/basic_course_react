import React from "react";

const Footer = ({year}) => {
  return(
    <footer className="container">
      <p>Todos los derechos reservados &copy; {year}</p>
    </footer>
  );
}

export default Footer;