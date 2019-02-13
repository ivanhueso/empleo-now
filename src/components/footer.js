import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="content">
      <p>
        © {new Date().getFullYear()}, Todos los Derechos Reservados.
        Empleonow.com{' '}
      </p>
      <ul className="nav">
        <li>
          <Link to="/privacy-policy">Política de privacidad</Link>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <Link to="/terms-of-service">Condiciones del servicio</Link>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
