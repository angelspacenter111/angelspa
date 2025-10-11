// import { useEffect } from 'react'
import { name, base_url } from '@/app/information'
import Header from '@/app/components/Header'
import Footer from './components/Footer';
import Link from 'next/link';

export const metadata = {
	title: 'Best spa and massage center in Mumbai bendra | Angel Spa',
	description: "Experience authentic Thai spa treatments in bendra at Angel Spa. Relax, rejuvenate, and unwind with our luxurious massages and wellness therapies.",
	canonical: base_url,
	charSet: "utf-8",
}
export default function Home() {
	return (
		<>
			<Header />
			<main>
				<section id="home" className="slider-area fix p-relative">
					<div className="slider-active" style={{ background: '#00173c' }}>
						<div className="single-slider slider-bg d-flex align-items-center"
							style={{ backgroundImage: 'url(' + base_url + 'assets/img/slider/slider_img02.webp)', backgroundSize: 'cover' }}>
							<div className="container">
								<div className="row justify-content-center align-items-center">
									<div className="col-lg-6 col-md-6">
										<div className="slider-content s-slider-content mt-20">
											<h5>Welcome to {name}</h5>
											<h3>Best Spa and massage center In Mumbai.</h3>
											<p>Relax your body, renew your mind, and revive your spirit with {name}.</p>
											<div className="slider-btn mt-30">
												<Link href="/about" className="btn ss-btn mr-15">Discover More</Link>
												<Link href="/contact" className="btn ss-btn active">Book Now</Link>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 p-relative">
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="about-area about-p pt-120 pb-120 p-relative fix" style={{ background: 'url(' + base_url + 'assets/img/bg/about-bg.png)', backgroundSize: 'contain', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
					<div className="container">
						<div className="row justify-content-center align-items-center">
							<div className="col-lg-12 col-md-12 col-sm-12">
								<div className="about-content s-about-content  wow fadeInRight " data-animation="fadeInRight">
									<div className="about-title second-title pb-25">
										<h3>Angel Spa Your Path to Wellness Starts with a Touch of Serenity.</h3>
									</div>
									<p>At <Link href={"/"}><b>{name}</b></Link>, we understand the importance of taking a break from the hustle and bustle of everyday life. In today's fast-paced world, it's easy to become overwhelmed by stress, tension, and fatigue. That's why we've created a sanctuary where you can escape, relax, and rejuvenate both your body and mind. Our spa is a place designed for you to unwind, let go of daily stress, and focus on your well-being. Whether you're seeking relief from a busy schedule, muscle tension, or simply in need of some quiet time, we are here to make sure you leave feeling completely refreshed.</p>
									<p>From the moment you walk into <Link href={"/about"}><b>{name}</b></Link>, you'll be greeted by a calming atmosphere – the soft sounds of peaceful music, the gentle fragrance of essential oils, and a warm, inviting environment that instantly makes you feel at ease. Our team is dedicated to providing exceptional care with a personal touch, ensuring that every visit is a truly soothing experience. We believe that self-care should be a priority, not a luxury, and our goal is to help you embrace relaxation and wellness in every aspect of your life.</p>
									<div className="slider-btn mt-20">
										<Link href="/about" className="btn ss-btn smoth-scroll">Explore More</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="feature-area p-relative fix">
					<div className="containe-fluid">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-sm-12" style={{ background: "#dcc5e2" }}>
								<div className="feature-box">
									<div className="text">
										<h3 style={{ color: "#884cd2" }}>Swedish Massage - Top Swedish Massage Services For Men in Mumbai</h3>
										<Link href="/swedish-massage-center-near-me-in-mumbai">Start Now</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="feature-box">
									<div className="text">
										<h3 style={{ color: "#884cd2" }}>Thai Massage: More than Just a Massage, a Healing Experience In Mumbai</h3>
										<Link href="/thai-massage-center-near-me-in-mumbai">Start Now</Link>
									</div>
									<img src={base_url + "assets/img/features/banner-01.webp"} alt="Best Spa and massage center In Mumbai - Angel spa" />
								</div>
							</div>

							<div className="col-lg-4 col-md-6 col-sm-12" style={{ background: "#efc9a6" }}>
								<div className="feature-box">
									<div className="text">
										<h3 style={{ color: "#884cd2" }}>Deep Tissue Massage in Mumbai: Relieve Stress and Tension and Boosts Immune System</h3>
										<Link href="/deep-tissue-massage-center-near-me-in-mumbai">Start Now</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="service-details2" className="service-details-two pb-105 p-relative pt-120" style={{ background: 'url(' + base_url + 'assets/img/bg/services-bg.png)', backgroundSize: 'contain', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-12">
								<div className="section-title center-align mb-50 text-center">
									<h5>Our Services</h5>
									<h2>
										What We Provide
									</h2>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="about-content s-about-content">
									<ul className="sr-tw-ul ">
										<li>
											<div className="icon-right"><img src={base_url + "assets/img/icon/fe-icon01.png"} alt="Best Spa and massage center In Mumbai - Angel spa" /></div>
											<div className="text">
												<h4><Link href="/swedish-massage-center-near-me-in-mumbai">Swedish Massage</Link></h4>
												<p>Swedish massage promotes relaxation, improves circulation, and relieves muscle tension, offering a calming reset for body and mind.</p>
											</div>
										</li>
										<li>
											<div className="icon-right"><img src={base_url + "assets/img/icon/fe-icon05.png"} alt="Best Spa and massage center In Mumbai - Angel spa" /></div>
											<div className="text">
												<h4><Link href="/about">Aromatherapy Massage</Link></h4>
												<p>This massage combines essential oils with massage techniques to relieve stress, improve mood, and enhance overall relaxation.</p>
											</div>
										</li>
										<li>
											<div className="icon-right"><img src={base_url + "assets/img/icon/fe-icon07.png"} alt="Best Spa and massage center In Mumbai - Angel spa" /></div>
											<div className="text">
												<h4><Link href="/deep-tissue-massage-center-near-me-in-mumbai/">Deep Tissue Massage</Link></h4>
												<p>Aimed at relieving chronic pain, deep tissue massage targets deeper muscle layers and connective tissues, perfect for relieving stress and muscle knots.</p>
											</div>
										</li>
										<li>
											<div className="icon-right"><img src={base_url + "assets/img/icon/fe-icon07.png"} alt="Best Spa and massage center In Mumbai - Angel spa" /></div>
											<div className="text">
												<h4><Link href="/best-head-massage-center-in-mumbai-angel-spa/">Head Massage</Link></h4>
												<p>Welcome to Angel Spa Center, your sanctuary for relaxation and wellness. Nestled in the heart of Mumbai, our spa is renowned for providing exceptional head..</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 text-center d-none d-lg-block">
								<div className="sd-img">
									<img src={base_url + "assets/img/features/services-img-details2.png"} alt="Best Spa and massage center In Mumbai - Angel spa" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="about-content s-about-content">
									<ul className="sr-tw-ul sr-thr-ul">
										<li>
											<div className="icon"><img src={base_url + "assets/img/icon/fe-icon04.png"} alt="Best Spa and massage center In Mumbai - Angel spa" /></div>
											<div className="text pt-10">
												<h4><Link href="/thai-massage-center-near-me-in-mumbai">Thai massage</Link></h4>
												<p>Thai massage combines gentle stretching, acupressure, and rhythmic movements to restore energy flow, flexibility, and harmony in body and mind.</p>
											</div>
										</li>
										<li>
											<div className="icon"><img src="assets/img/icon/fe-icon06.png" alt="Best Spa and massage center In Mumbai - Angel spa" /></div>
											<div className="text pt-10">
												<h4><Link href="/about">Hot stone masssage:</Link></h4>
												<p>A blend of acupressure, stretching, and compression techniques, Thai massage is ideal for boosting flexibility and energy levels.</p>
											</div>
										</li>
										<li>
											<div className="icon"><img src={base_url + "assets/img/icon/fe-icon08.png"} alt="Best Spa and massage center In Mumbai - Angel spa" /></div>
											<div className="text pt-10">
												<h4><Link href="/about">Balinese Massage:</Link></h4>
												<p>This combines gentle stretches, acupressure, and aromatherapy to relax the body, reduce tension, and improve blood flow.</p>
											</div>
										</li>
										<li>
											<div className="icon"><img src={base_url + "assets/img/icon/fe-icon08.png"} alt="Best Spa and massage center In Mumbai - Angel spa" /></div>
											<div className="text pt-10">
												<h4><Link href="/about">Foot Reflexology</Link></h4>
												<p>Focuses on specific pressure points in the feet that correspond to various organs and systems, promoting relaxation and health throughout the body.</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>


				<section className="about-area about-p p-relative fix">
					<div className="container">
						<div className="row justify-content-center align-items-center">
							<div className="col-lg-12 col-md-12 col-sm-12">
								<div className="about-content s-about-content  wow fadeInRight " data-animation="fadeInRight">
									<div className="about-title second-title pb-25">
										<h3>{name} offers a peaceful place where guests can relax and forget their everyday stress.</h3>
									</div>
									<p>Welcome to {name}, your perfect place for beauty and relaxation! We are here to give you a complete experience of pampering and care, with services designed to help you feel refreshed and renewed. From the moment you walk through our doors, our goal is to help you look and feel amazing, inside and out. At {name}, we offer a variety of treatments to suit everyone’s needs. If you’re looking for a soothing massage, a refreshing facial, or just a relaxing day to yourself, we have it all! Our team of trained professionals is here to make each visit special, bringing expertise and a little luxury to every session.</p>
									<p>Our manicure and pedicure services leave your hands and feet feeling soft, healthy, and beautifully polished. From classic nail care to trendy nail designs, we ensure your nails look their best. Each nail service includes relaxing touches that make the experience enjoyable from start to finish, using high-quality products that keep your nails and skin in great condition.For skincare, our facials are customized to meet your unique needs. Whether you need deep cleaning, anti-aging, or a hydration boost, our facials leave your skin glowing and refreshed. Our estheticians use quality, natural products to ensure you get the best results for your skin type. Each facial not only revitalizes your skin but also relaxes your mind, giving you a true moment of calm.</p>
									<p>Our body treatments are perfect for relaxation and wellness. From body wraps and scrubs to calming massages, each treatment uses natural ingredients to help your body feel fresh and renewed. Our wraps and scrubs work to remove toxins and improve circulation, giving your skin a healthy glow. These treatments help release stress and bring a deep sense of relaxation to your body and mind.If you’re looking for a new hairstyle, our beauty salon offers a range of styling options to help you look your best. Our skilled stylists can create the perfect haircut or hair color to bring out your natural beauty. They keep up with the latest trends and techniques, making sure you leave with a style that’s just right for you. Whether you’re going for a complete makeover or a simple trim, our stylists are here to make you feel amazing.</p>
								</div>
							</div>
						</div>
					</div>
				</section>


				<section id="booking" className="booking-area p-relative pt-120 pb-120" style={{ background: 'url(' + base_url + 'assets/img/bg/ap-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-12">
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
						</div>
					</div>
				</section>

				<section className="feature-area p-relative fix">
					<div className="containe-fluid">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-sm-12" style={{ background: "#dcc5e2" }}>
								<div className="feature-box">
									<div className="text">
										<h3 style={{ color: "#884cd2" }}>Swedish Massage - Top Swedish Massage Services For Men in Mumbai</h3>
										<Link href="/swedish-massage-center-near-me-in-mumbai">Start Now</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="feature-box">
									<div className="text">
										<h3 style={{ color: "#884cd2" }}>Thai Massage: More than Just a Massage, a Healing Experience In Mumbai</h3>
										<Link href="/thai-massage-center-near-me-in-mumbai">Start Now</Link>
									</div>
									<img src={base_url + "assets/img/features/banner-01.webp"} alt="Best Spa and massage center In Mumbai - Angel spa" />
								</div>
							</div>

							<div className="col-lg-4 col-md-6 col-sm-12" style={{ background: "#efc9a6" }}>
								<div className="feature-box">
									<div className="text">
										<h3 style={{ color: "#884cd2" }}>Deep Tissue Massage in Mumbai: Relieve Stress and Tension and Boosts Immune System</h3>
										<Link href="/deep-tissue-massage-center-near-me-in-mumbai">Start Now</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				

			</main>
			<Footer />
		</>
	);
}
