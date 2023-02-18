import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Empresa</h3>
          <p>sed molestie eros sit amet vulputate aliquam</p>
        </div>
        <div className="footer-column">
          <h3>Etiam</h3>
          <ul>
            <li><p href="#">Lorem Ipsum</p></li>
            <li><p href="#">Lorem Ipsum</p></li>
            <li><p href="#">Lorem Ipsum</p></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Explore Us</h3>
          <ul>
            <li><p href="#">ELorem Ipsum</p></li>
            <li><p href="#">Lorem Ipsum</p></li>
            <li><p href="#">Lorem Ipsum</p></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect Us</h3>
          <ul>
            <li><p>support@empresa.id</p></li>
            <li><p>021-022-023-024</p></li>
            <li><p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p></li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        © 2023 Todos los derechos reservados. Empresa.
      </p>
    </div>
  )
}

export default Footer