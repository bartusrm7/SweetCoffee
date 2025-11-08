import { Col, Container, Row } from "react-bootstrap";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitterX from "../assets/twitter-x.svg";

export default function Footer() {
	const currentDate = new Date().getFullYear();

	return (
		<div className='footer' id="kontakt">
			<Container>
				<Row>
					<Col lg={10} className='mx-auto d-flex'>
						<div className='footer__main-container w-100 my-5'>
							<div className='footer__container'>
								<h4 className='fw-bold'>Godziny otwarcia</h4>
								<div className='footer__open-hours-container'>
									<div className='footer__open-hours-item d-flex justify-content-between'>
										<div className='footer__weekday'>Poniedziałek</div>
										<div className='footer__hours'>08:00 - 18:00</div>
									</div>
									<div className='footer__open-hours-item d-flex justify-content-between'>
										<div className='footer__weekday'>Wtorek</div>
										<div className='footer__hours'>08:00 - 18:00</div>
									</div>
									<div className='footer__open-hours-item d-flex justify-content-between'>
										<div className='footer__weekday'>Środa</div>
										<div className='footer__hours'>08:00 - 18:00</div>
									</div>
									<div className='footer__open-hours-item d-flex justify-content-between'>
										<div className='footer__weekday'>Czwartek</div>
										<div className='footer__hours'>08:00 - 20:00</div>
									</div>
									<div className='footer__open-hours-item d-flex justify-content-between'>
										<div className='footer__weekday'>Piątek</div>
										<div className='footer__hours'>08:00 - 20:00</div>
									</div>
									<div className='footer__open-hours-item d-flex justify-content-between'>
										<div className='footer__weekday'>Sobota</div>
										<div className='footer__hours'>09:00 - 22:00</div>
									</div>
									<div className='footer__open-hours-item d-flex justify-content-between'>
										<div className='footer__weekday'>Niedziela</div>
										<div className='footer__hours'>10:00 - 16:00</div>
									</div>
								</div>
							</div>

							<div className='footer__container'>
								<h4 className='fw-bold'>Kontakt</h4>
								<div className='footer__contact-container mb-2'>
									<div className='footer__contact-item'>
										Telefon: <span className="fw-bold">724 055 104</span>
									</div>
									<div className='footer__contact-item'>
										Adres: <span className="fw-bold">Gotarda 16, 02-692 Warszawa</span>
									</div>
									<div className='footer__contact-item'>
										Email: <span className="fw-bold">sweet_coffee@cafe.com</span>
									</div>
								</div>
							</div>

							<div className='footer__container'>
								<h4 className='fw-bold'>Śledź nas</h4>
								<div className='footer__icons-container d-flex mb-2'>
									<img className='footer__icon m-2 ms-0' src={facebook} alt='Ikona facebook' />
									<img className='footer__icon m-2' src={instagram} alt='Ikona instagram' />
									<img className='footer__icon m-2' src={twitterX} alt='Ikona twitter-x' />
								</div>
							</div>

							<div className='footer__container'>
								<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.283693178837!2d21.0053157146132!3d52.1710070238251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc668d2f1c5d%3A0x2b0c0edce5d3f9df!2sGotarda%2016%2C%20Warszawa!5e0!3m2!1spl!2spl!4v1695650212345!5m2!1spl!2spl' loading='lazy' zoom='15' className='footer__map-container rounded-3' referrerPolicy='no-referrer-when-downgrade'></iframe>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<footer className='p-2 text-center fw-bold'>
				&copy;<span>{currentDate}</span> SweetCoffee
			</footer>
		</div>
	);
}
