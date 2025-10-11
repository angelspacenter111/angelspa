import React from 'react'
import { base_url, contact, name } from '@/app/information';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="footer-bg footer-p pt-90" style={{ backgroundColor: '#252525', backgroundImage: 'url(' + base_url + 'assets/img/bg/footer-bg.png)' }}>
            <div className="footer-top">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title mb-40">
                                    <h1 style={{ color: "white" }}>{name}</h1>
                                </div>
                                <div className="footer-link">
                                    <p>Relax your body, renew your mind, and revive your spirit with Angel Spa.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Other Links</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/contact">Services</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Our Services</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><Link href="/swedish-massage-center-near-me-in-mumbai">Swedish Massage</Link></li>
                                        <li><Link href="/thai-massage-center-near-me-in-mumbai">Thai Massage</Link></li>
                                        <li><Link href="/deep-tissue-massage-center-near-me-in-mumbai">Deep Tissue Massage</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Subscribe Now !</h2>
                                </div>

                            </div>
                            <div className="footer-social mt-10">
                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                <a href="#"><i className="fab fa-instagram" /></a>
                                <a href="#"><i className="fab fa-twitter" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center copyright-wrap">
                        <div className="col-lg-6">
                            <div className="copy-text">
                                Copyright © 2024 <Link href="/">{name}</Link>. All rights reserved.
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="copay-contact">
                                <ul>
                                    <li>
                                        <div className="c-contact">
                                            <div className="icon">
                                                <img src={base_url + "/assets/img/icon/ft-icon02.png"} alt="img" />
                                            </div>
                                            <div className="text">
                                                <span>info@wellspa.com</span>
                                                <h3> Our Email:</h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-contact">
                                            <div className="icon">
                                                <img src={base_url + "/assets/img/icon/ft-icon03.png"} alt="img" />
                                            </div>
                                            <div className="text">
                                                <span>+91 {contact}</span>
                                                <h3>Call Now:</h3>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer