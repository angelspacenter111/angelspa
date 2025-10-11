import React from 'react'
import Link from 'next/link'
import { contact } from '@/app/information'
const Servicesidebar = () => {
    return (
        <aside className="sidebar services-sidebar">
            <div className="sidebar-widget categories">
                <div className="widget-content">
                    <ul className="services-categories">
                        <li><Link href="/swedish-massage-center-near-me-in-mumbai"> Swedish Massage</Link></li>
                        <li><Link href="/thai-massage-center-near-me-in-mumbai">Thai Massage</Link></li>
                        <li><Link href="/deep-tissue-massage-center-near-me-in-mumbai">Deep Tissue Massage</Link></li>
                        <li><Link href="/best-head-massage-center-in-mumbai-angel-spa">Head Massage</Link></li>
                        <li><Link href="/best-aromatherapy-massage-center-in-mumbai-angel-spa">Aromatherapy Massage</Link></li>
                        <li><Link href="/best-spa-centre-in-mumbai">Spa Service</Link></li>
                        <li><Link href="/best-hot-stone-massage-mumbai">Hot Stone Massage</Link></li>
                        <li><Link href="/best-couple-massage-mumbai">Couple Massage</Link></li>
                    </ul>
                </div>
            </div>
            <div className="service-detail-contact" style={{ visibility: 'visible', animationDelay: '1.1s' }}>
                <h3 className="h3-title">If You Need Any Help Contact With Us</h3>
                <a href={"tel:+91 " + contact} style={{ color:"#00173c" }} title="Call now">+91 {contact}</a>
            </div>
        </aside>
    )
}

export default Servicesidebar