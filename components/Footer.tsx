import React from 'react';
import './css/base/Footer.scss';
import logo from './assets/geekfuel-logo.svg';
import arrow_right from '../public/assets/images/Footer/arrow-right.svg';
import facebook_img from '../public/assets/images/Footer/facebook.svg';
import instagram_img from '../public/assets/images/Footer/inst.svg';
import linkedin_img from '../public/assets/images/Footer/linkedin.svg';
import twitter_img from '../public/assets/images/Footer/twitt.svg';
import youtube_img from '../public/assets/images/Footer/yout.svg';


export default function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer__section">
                <div className="footer__section__logo">
                    <img src={logo} alt="" />
                </div>
                <ul className='footer__section__list'>
                    <li>BUNDLES</li>
                    <li>EXCLUSIVE TEES</li>
                    <li>MONDO</li>
                    <li>COLLECTIBLES</li>
                </ul>
                <ul className='footer__section__list'>
                    <li>TEE CLUB</li>
                    <li>GHOSTBUSTERS</li>
                    <li>🎁GIFT</li>
                    <li>LOGIN</li>
                </ul>
                <div className="footer__section__form-wrapper">
                    <div>
                        <h3>Sign up for our news & updates</h3>
                        <div className="input-wrapper">
                            <input type="text" placeholder='Enter your email to subscribe' />
                            <img src={arrow_right} alt="" />
                        </div>
                    </div>
                    <div className="icons">
                        <img src={facebook_img} alt="" />
                        <img src={instagram_img} alt="" />
                        <img src={linkedin_img} alt="" />
                        <img src={twitter_img} alt="" />
                        <img src={youtube_img} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <p>© 2021 Geek Fuel, LLC. All Rights Reserved.</p>
                <p>Privacy Policy  |  Terms & Conditions</p>
            </div>
        </div>
    </footer>
  )
}
