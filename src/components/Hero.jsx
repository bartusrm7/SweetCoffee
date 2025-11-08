import {  Col, Container, Row } from "react-bootstrap";
import coffeeCupImg from "../assets/coffee-cup-hero-section.png";

export default function Home() {
	return (
		<Container className='hero' id="strona-główna">
			<Row>
				<Col lg={10} className='vh-100 mx-auto d-flex justify-content-between align-items-center'>
					<div className='hero__main-container d-flex flex-column flex-md-row align-items-center'>
						<div>
							<div className='hero__label-container text-center'>
								<h1>Najlepsza kawa specjalnie dla Ciebie</h1>
								<h5>Obudź się czymś wyjątkowym</h5>
							</div>
							<div className='d-flex justify-content-center mt-5'>
								<a href="#menu" className='hero__offer-btn custom-btn px-4 py-2 rounded-5'>Sprawdź ofertę!</a>
								<div className='hero__coffee-img-container'></div>
							</div>
						</div>
						<div className='m-auto'>
							<img className='hero__coffee-cup-img' src={coffeeCupImg} alt='Coffee Cup' />
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
