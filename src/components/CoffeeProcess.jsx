import { Col, Container, Row } from "react-bootstrap";

export default function CoffeeProcess() {
	return (
		<div className='coffee-process' id="proces-kawy">
			<Container>
				<Row>
					<Col lg={10} className='coffee-process__main-container mx-auto d-flex flex-column justify-content-center align-items-center min-vh-100'>
						<h3 className='fw-bold text-center label-section my-5 w-100 px-3'>Proces przygotowania kawy w naszej firmie obywa się w następującymi krokami...</h3>
						<div>
							<div className='coffee-process__process-container mb-lg-5 mb-lg-0 mt-lg-0'>
								<div className='coffee-process__process-item rounded-4 p-2 mb-3 mb-sm-0 m-auto'>
									<div className='coffee-process__item-label fw-bold mb-2 text-center'>Zbiór ziaren (Harvesting)</div>
									<div className='coffee-process__item-description'>
										<p>Ziarna kawy zbierane ręcznie lub maszynowo.</p>
										<p>Wybiera się tylko dojrzałe owoce, aby uzyskać najlepszy smak.</p>
									</div>
								</div>
								<div className='coffee-process__process-item rounded-4 p-2 mb-3 mb-sm-0 m-auto'>
									<div className='coffee-process__item-label fw-bold mb-2 text-center'>Suszenie i obróbka (Processing)</div>
									<div className='coffee-process__item-description'>
										<p>Ziarna są suszone na słońcu lub mechanicznie.</p>
										<p>Oddziela się miąższ od ziaren, aby przygotować je do palenia.</p>
									</div>
								</div>
								<div className='coffee-process__process-item rounded-4 p-2 mb-3 mb-sm-0 m-auto'>
									<div className='coffee-process__item-label fw-bold mb-2 text-center'>Palenie (Roasting)</div>
									<div className='coffee-process__item-description'>
										<p>Ziarna podgrzewane w wysokiej temperaturze, co uwalnia aromat i smak</p>
										<p>Proces można dostosować do rodzaju kawy: jasne, średnie lub ciemne palenie.</p>
									</div>
								</div>
								<div className='coffee-process__process-item rounded-4 p-2 mb-3 mb-sm-0 m-auto'>
									<div className='coffee-process__item-label fw-bold mb-2 text-center'>Mielenie (Grinding)</div>
									<div className='coffee-process__item-description'>
										<p>Ziarna mielone tuż przed parzeniem, aby zachować świeżość.</p>
										<p>Grubość mielenia zależy od sposobu przygotowania: espresso, przelew, french press.</p>
									</div>
								</div>
								<div className='coffee-process__process-item rounded-4 p-2 mb-3 mb-sm-0 m-auto'>
									<div className='coffee-process__item-label fw-bold mb-2 text-center'>Parzenie (Brewing)</div>
									<div className='coffee-process__item-description'>
										<p>Gorąca woda przepływa przez zmielone ziarna, uwalniając smak i aromat.</p>
										<p>Można używać ekspresu, drip, aeropress lub klasycznego french press.</p>
									</div>
								</div>
								<div className='coffee-process__process-item rounded-4 p-2 mb-3 mb-sm-0 m-auto'>
									<div className='coffee-process__item-label fw-bold mb-2 text-center'>Serwowanie (Serving)</div>
									<div className='coffee-process__item-description'>
										<p>Kawa nalewana do filiżanki, często dekorowana pianką lub latte art.</p>
										<p>Podawana najlepiej świeża, by cieszyć pełnią smaku.</p>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
