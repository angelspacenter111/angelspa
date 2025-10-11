import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer';
import Breadcrumb from '@/app/components/Breadcrumb'
import { base_url } from '../information';

const page = () => {
    return (
        <>
            <Header />
            <Breadcrumb pagename="Contact" />
            <section id="booking" className="booking-area p-relative pt-120 pb-120" style={{ background: 'url(img/bg/ap-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-bg">
                                <div className="section-title center-align">
                                    <h5>Get In Touch</h5>
                                    <h2>
                                        Get Appointment
                                    </h2>
                                    <p>Aenean ut enim vel lectus rutrum sodales. Aliquam consequat augue eget enim convallis, at maximus libero ullamcorper. Cras sit amet placerat nisi.</p>
                                </div>
                                <form action="" method="post" className="contact-form mt-30">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="firstn" placeholder="First Name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <input type="text" id="email" name="email" placeholder="Eamil" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="contact-field p-relative c-subject mb-20">
                                                <input type="date" id="subject" name="subject" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-message mb-30">
                                                <textarea name="message" id="message" cols={30} rows={10} placeholder="Write comments" />
                                            </div>
                                            <div className="slider-btn">
                                                <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"><span>Submit Now</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="opening-time">
                                <div className="open-img">
                                    <img src={base_url + "assets/img/bg/open-box-img.png"} alt="icon01" />
                                </div>
                                <h3>Opening Hours</h3>
                                <div className="text">
                                    <div className="left-text">Monday to Friday:</div>
                                    <div className="right-text">09:00 am – 10:00 pm</div>
                                </div>
                                <div className="text">
                                    <div className="left-text">Saturday:</div>
                                    <div className="right-text">09:00 am – 08:00 pm</div>
                                </div>
                                <div className="text">
                                    <div className="left-text">Sunday:</div>
                                    <div className="right-text">09:00 am – 05:00 pm</div>
                                </div>
                                <div className="discount">Check out seasonal discounts for best offers.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default page