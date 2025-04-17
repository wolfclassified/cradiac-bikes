import React from 'react'
import logoWhite from '../assets/logo white.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'

const Footer = () => {
  return (
    <footer class="footer">
        <div class="logo-social">
            <div class="logo-black">
                <img src={ logoWhite } alt="CRADIAC"/>
            </div>
            <div class="social-icons">
                <a href="#"><img src={ twitter } alt="Twitter"/></a>
                <a href="#"><img src={ linkedin } alt="LinkedIn"/></a>
                <a href="#"><img src={ facebook } alt="Facebook"/></a>
            </div>
        </div>
        <div class="footer-menu">
            <div>
                <h4>Bike Groups</h4>
                <ul>
                    <li><a href="#">Men’s Bikes</a></li>
                    <li><a href="#">Women’s Bikes</a></li>
                    <li><a href="#">Boy’s Bikes</a></li>
                    <li><a href="#">Girl’s Bikes</a></li>
                </ul>
            </div>
            <div>
                <h4>Bikes</h4>
                <ul>
                    <li><a href="#">MTB</a></li>
                    <li><a href="#">City Bikes</a></li>
                    <li><a href="#">Hybrid</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">E-Bikes</a></li>
                </ul>
            </div>
            <div>
                <h4>More</h4>
                <ul>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Apparels</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            &copy; 2021 CradiacBikes
        </div>
    </footer>
  )
}

export default Footer