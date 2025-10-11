'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { name } from '@/app/information'
const Header = () => {
    useEffect(() => {
        $(document).on("click", ".meanmenu-reveal", event => {
            event.preventDefault();
            if ($(".mastermenu").hasClass("d-none")) {
                $(".mastermenu").removeClass("d-none");
            } else {
                $(".mastermenu").addClass("d-none");
            }
        });
        $(document).on("click", ".servicemanuhandler", event => {
            event.preventDefault();
            if ($(".servicemenucontainer").hasClass("d-none")) {
                $(".servicemenucontainer").removeClass("d-none");
            } else {
                $(".servicemenucontainer").addClass("d-none");
            }
        });
    }, [])
    return (
        <header className="header-area header-three">
            <div id="header-sticky" className="menu-area sticky-menu">
                <div className="container">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <Link href="/"><h2>{name}</h2></Link>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="main-menu text-right text-xl-right">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li><Link href="/">Home</Link></li>
                                            <li><Link href="/about">About us</Link></li>
                                            <li><Link href="/blog">Blog</Link></li>
                                            <li className="has-sub">
                                                <a href="#">Services</a>
                                                <ul>
                                                    <li>
                                                        <Link href="/swedish-massage-center-near-me-in-mumbai">
                                                            Swedish Massage
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/thai-massage-center-near-me-in-mumbai">
                                                            Thai Massage
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/deep-tissue-massage-center-near-me-in-mumbai">
                                                            Deep Tissue Massage
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/best-head-massage-center-in-mumbai-angel-spa">
                                                            Head Massage
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/best-aromatherapy-massage-center-in-mumbai-angel-spa">
                                                            Aromatherapy Massage
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/best-spa-centre-in-mumbai">
                                                            Spa Service
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/best-hot-stone-massage-mumbai">
                                                            Hot Stone Massage
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/best-couple-massage-mumbai">
                                                            Couple Massage
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* <li><Link href="/blog">Blog</Link></li> */}
                                            <li><Link href="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-25 mb-25 text-right text-xl-right">
                                <div className="login">
                                    <ul>
                                        <li>
                                            <div className="second-header-btn">
                                                <Link href="/contact" className="btn">Book Appointment</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile-menu mean-container">
                                    <div className="mean-bar">
                                        <a href="#" className="meanmenu-reveal" style={{ background: '', color: '', right: 0, left: 'auto' }}><span><span><span /></span></span></a>
                                        <nav className="mean-nav">
                                            <ul className='d-none mastermenu'>
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about/">About us</Link></li>
                                                <li><Link href="/blog/">Blogs</Link></li>
                                                <li className="has-sub">
                                                    <Link href="#">Services</Link>
                                                    <ul className='d-none servicemenucontainer'>
                                                        <li><Link href="/swedish-massage-center-near-me-in-mumbai/">Swedish Massage</Link></li>
                                                        <li><Link href="/thai-massage-center-near-me-in-mumbai/">Thai Massage</Link></li>
                                                        <li><Link href="/deep-tissue-massage-center-near-me-in-mumbai/">Deep Tissue Massage</Link></li>
                                                        <li><Link href="/best-head-massage-center-in-mumbai-angel-spa/">Head Massage</Link></li>
                                                        <li><Link href="/best-aromatherapy-massage-center-in-mumbai-angel-spa/">Aromatherapy Massage</Link></li>
                                                        <li><Link href="/best-spa-centre-in-mumbai/">Spa Service</Link></li>
                                                        <li><Link href="/best-hot-stone-massage-mumbai/">Hot Stone Massage</Link></li>
                                                        <li><Link href="/best-couple-massage-mumbai/">Couple Massage</Link></li>
                                                    </ul>
                                                    <Link className="mean-expand servicemanuhandler" href="#" style={{ fontSize: 18 }}>+</Link>
                                                </li>
                                                <li className="mean-last"><Link href="/contact/">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header