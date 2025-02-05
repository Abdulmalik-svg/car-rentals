import React from 'react'
import { Facebook, } from "lucide-react";
const Footer = () => {
  return (
    <div>
     <footer>
  <div class="footer-container">
    <div class="footer-section">
    <img src="public/logo.svg" alt="Volta Yacht Logo"/>
      <p>Experience the thrill of luxury yachting with Volta Yacht</p>
    </div>
    <div class="footer-section">
      <h2>Explore</h2>
      <ul>
        <li><a href="#">Yacht Fleet</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Charters</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h2>Get in Touch</h2>
      <ul>
        <li><a href="#"><i class="fa fa-phone"></i> +1 555 123 4567</a></li>
        <li><a href="#"><i class="fa fa-envelope"></i> info@Sonicyacht.com</a></li>
        <li><a href="#"><i class="fa fa-map-marker"></i> 123 Marina Drive, Miami, FL 33101</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h2>Follow Us</h2>
      <ul>
        <li><a href="#">
        <Facebook size={15} className='inline' /> </a></li>
        <li><a href="https://www.instagram.com/volta_yachts?igsh=MXVqODlhOWRrNmV6Yw=="><i class="fa fa-instagram"></i> Instagram</a></li>
        <li><a href="https://x.com/voltayachts?t=D21VZSSrKzV15d3tfpDJXA&s=09"><i class="fa fa-twitter"></i> Twitter</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-copyright">
    &copy; 2023 Sonic Yacht. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default Footer
