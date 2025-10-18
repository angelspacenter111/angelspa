import React from 'react'
import Header from '@/app/components/Header';
import Breadcrumb from '@/app/components/Breadcrumb'
import Footer from '@/app/components/Footer';
import { base_url, name } from '@/app/information'
import Link from 'next/link';

export const metadata = {
    title: 'Massage & Spa Wellness Blog | Angel Spa in Mumbai',
    description: "Discover wellness tips, spa guides, massage benefits & relaxation secrets at Angel Spa Blog, Mumbai. Your path to healing, beauty & stress relief starts here.",
    canonical: base_url + "/blog/",
    charSet: "utf-8",
    Keywords: "Best spa center in mumbai, Angel spa, Thai massage center in mumbai, Best spa treatments in Mumbai, Relaxation and wellness blog, Stress relief techniques spa, Holistic healing Mumbai, Aromatherapy and reflexology Mumbai"
}

const page = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb pagename="Blog" />
                <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="center-align mb-50 text-center">
                                    <div className="about-title second-title pb-25">
                                        <h1 className="text-center">Angel Spa - Wellness, Relaxation & Healing in Mumbai.</h1>
                                    </div>
                                    <p className='text-left'>Welcome to the Angel Spa Blog, your go-to space for everything related to wellness, rejuvenation, and holistic healing in the heart of Mumbai. At Angel Spa, we believe self-care is not a luxury but a lifestyle, and through our blogs, we aim to share insights, tips, and inspiration that help you lead a more relaxed, balanced, and healthy life.</p>
                                    <p className='text-left'>From exploring the benefits of traditional Thai massage to discovering the latest trends in spa therapies and relaxation techniques, our blog is crafted to guide you on your journey toward peace of mind and body.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-post2 hover-zoomin">
                                    <div className="blog-thumb2">
                                        <Link href="/blog/couple-massage-in-mumbai"><img src={base_url + "/assets/img/Couple-Massage-at-angelspa.webp"} alt="Couple Massage In Mumbai" /></Link>
                                    </div>
                                    <div className="blog-content2">
                                        <div className="b-meta">
                                            <div className="meta-info">
                                                <ul>
                                                    <li><i className="fal fa-calendar-alt" /> 18th October 2025</li>
                                                    <li><i className="fal fa-user" /> Angel Spa </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><Link href="/blog/couple-massage-in-mumbai">Couple Massage In Mumbai | Angel Spa.</Link></h4>
                                        <div className="blog-btn"><Link href="/blog/couple-massage-in-mumbai">Read More <i className="far fa-long-arrow-right" /></Link></div>
                                    </div>
                                </div>
                            </div>

                            
                            
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
export default page