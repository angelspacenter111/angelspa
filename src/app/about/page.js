import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer';
import Breadcrumb from '@/app/components/Breadcrumb'
import { base_url, name } from '@/app/information';


let pageUrl = base_url + "/about"

export const metadata = {
    title: 'Angel Spa: Premier Spa Center in Mumbai - Bandra',
    description: "Angel Spa is the best spa in Mumbai, located in the lively Bandra area. Come and enjoy relaxing therapies and wellness treatments in a peaceful setting. Book your visit today!",
    canonical: pageUrl,
    charSet: "utf-8",
}
const page = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb pagename="About" />
                <section className="about-area about-p p-relative fix pb-105 pt-120">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="about-content s-about-content  wow fadeInRight " data-animation="fadeInRight">
                                    <div className="about-title second-title pb-25">
                                        <h2 className="text-center">Welcome to {name} – A Haven of Relaxation and Rejuvenation.</h2>
                                    </div>
                                    <p>At <b>{name}</b>, we are dedicated to providing you with a soothing and peaceful experience that leaves you feeling refreshed and rejuvenated. Our spa is more than just a place for massages; it's a destination where you can let go of your stress and focus on restoring your body and mind. With our range of services and traditional Thai techniques, {name} brings the essence of Thailand to Mumbai. We are honored to be considered one of the best spas in the city, with four-star facilities in premium locations around Mumbai.</p>
                                    <h4>Why Choose {name}?</h4>
                                    <p>{name} is a sanctuary that combines the beauty of ancient Thai healing methods with the comfort and elegance of a modern spa. Each service we offer is carefully designed to help you unwind and reconnect with yourself. Our experienced therapists use techniques that have been practiced for centuries, offering you the same authentic Thai experience you'd get in Thailand. We believe in providing a complete escape from the daily hustle, whether you're looking to relax or seeking therapeutic relief for physical discomfort.</p>
                                    <h5>Traditional Thai Massage</h5>
                                    <p>The traditional Thai massage is a unique experience that combines acupressure, gentle stretching, and rhythmic compression. Unlike other massages, Thai massage is often performed without oils and focuses on applying pressure along the body's energy lines. This treatment helps improve flexibility, relieve tension, and increase energy flow throughout your body. Many clients report feeling relaxed and invigorated after a session, as if they have pressed a reset button on their bodies.</p>
                                    <h5>Aromatherapy Massage</h5>
                                    <p>Aromatherapy massage uses essential oils to relax the mind and body. At {name}, we use high-quality, natural oils that are known for their healing properties. Each session begins with selecting an essential oil that suits your mood and needs, such as lavender for relaxation, eucalyptus for clearing the mind, or lemongrass for uplifting energy. The combination of aromatherapy and massage provides a multi-sensory experience that leaves you feeling refreshed and balanced.</p>
                                    <h5>Deep Tissue Massage</h5>
                                    <p>Our deep tissue massage is designed for those who need relief from muscle pain and tension. This massage focuses on the deeper layers of muscle and connective tissue, targeting knots and problem areas. Perfect for athletes, fitness enthusiasts, or anyone experiencing chronic muscle stiffness, this massage provides significant relief and helps improve muscle health over time.</p>
                                    <h5>Foot Reflexology</h5>
                                    <p>Based on the principles of reflexology, our foot massage focuses on applying pressure to specific points on the feet that correspond to different organs and systems in the body. This service is not only soothing for tired feet but also promotes overall wellness by stimulating various points that contribute to better health and relaxation. Our therapists are skilled in using traditional techniques to relieve foot pain, reduce tension, and support healing.</p>
                                    <h5>Head and Shoulder Massage</h5>
                                    <p>This is a quick and effective way to relieve stress and tension in the upper body. Ideal for those with busy schedules, the head and shoulder massage focuses on common tension areas like the neck, shoulders, and scalp. This massage is especially beneficial for people who spend long hours at a desk, as it helps alleviate headaches and releases tension caused by poor posture.</p>
                                    <h2 className="text-center">Benefits of Our Massages Services</h2>
                                    <h5>Stress Relief</h5>
                                    <p>One of the main reasons people come to our spa is to escape the stress of daily life. Our massages are specifically designed to relax your muscles, calm your mind, and lower your stress levels. The relaxing environment, soothing music, and gentle touch all work together to ease away your worries.</p>
                                    <h5>Improved Circulation</h5>
                                    <p>Many of our massage techniques improve blood circulation, which is vital for overall health. Better circulation means that more oxygen and nutrients reach your muscles and tissues, promoting faster healing and increased energy levels.</p>
                                    <h5>Pain Relief</h5>
                                    <p>For those dealing with chronic pain, whether from injuries, overexertion, or poor posture, our massages offer relief. Our therapists are skilled at identifying and working on problem areas, providing targeted relief that lasts.</p>
                                    <h5>Enhanced Flexibility and Mobility</h5>
                                    <p>Our massages, especially the traditional Thai massage, involve a lot of stretching and movement. This helps to improve flexibility, mobility, and joint health, making it a great option for anyone looking to stay active and agile.</p>
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