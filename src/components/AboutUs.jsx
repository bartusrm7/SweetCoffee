import { Col, Container, Row } from "react-bootstrap";
import Americano from "../assets/americano.jpg";
import Cappuccino from "../assets/cappuccino.jpg";
import Latte from "../assets/latte.jpg";
import Espresso from "../assets/espresso.jpg";

export default function AboutUs() {
	return (
		<div className='aboutus min-vh-100 w-100' id="o-nas">
			<Container>
				<Row>
					<Col lg={10} className='mx-auto d-flex align-items-center min-vh-100'>
						<div className='px-3 my-3'>
							<h3 className='aboutus__paragraph-label label-section fw-bold text-center my-5 w-100 px-3'>Poznaj nas!</h3>
							<div className='aboutus__main-wrapper mb-3 mt-lg-0'>
								<p className=''>Nasza pasja do kawy zaczęła się od prostego pytania: jak sprawić, by każdy poranek smakował wyjątkowo? Właśnie z tego zrodził się nasz sklep - miejsce stworzone z miłości do aromatycznych ziaren i prawdziwego rzemiosła parzenia kawy. W naszej ofercie znajdziesz starannie wyselekcjonowane kawy z najlepszych plantacji na świecie.</p>
								<p>Dbamy o to, aby każda paczka trafiająca w Twoje ręce była świeżo palona i pełna smaku, który pozwoli Ci cieszyć się chwilą. Wierzymy, że kawa to coś więcej niż napój - to rytuał, który łączy ludzi, dodaje energii i inspiruje do działania. Dlatego nie sprzedajemy tylko ziaren, ale dzielimy się pasją i wiedzą, aby każdy mógł odkryć swoją ulubioną kawę.</p>
							</div>

							<div className='aboutus__coffee-container m-auto'>
								<div className='aboutus__coffee-item rounded-4 mb-3 mb-md-0'>
									<div className='aboutus__coffee-item-inner'>
										<div className='aboutus__coffee-item-front'>
											<img className='aboutus__coffee-img' src={Americano} alt='Americano cup' />
										</div>
										<div className='aboutus__coffee-item-back'>
											<ul className='aboutus__coffee-backside p-3'>
												<li>- Klasyczna czarna kawa na bazie espresso z dodatkiem gorącej wody.</li>
												<li>- Idealna dla tych, którzy lubią łagodniejszy smak, ale nadal cenią aromat espresso.</li>
												<li>- Podawana w większej filiżance niż espresso, dzięki czemu jest bardziej rozciągnięta w smaku.</li>
												<li>- Najczęściej przygotowywana przez dolanie gorącej wody do świeżo zaparzonego espresso.</li>
											</ul>
										</div>
									</div>
									<div className='aboutus__coffee-type p-2 text-center fw-bold'>Americano</div>
								</div>
								<div className='aboutus__coffee-item rounded-4 mb-3 mb-md-0'>
									<div className='aboutus__coffee-item-inner'>
										<div className='aboutus__coffee-item-front'>
											<img className='aboutus__coffee-img' src={Cappuccino} alt='Cappuccino cup' />
										</div>
										<div className='aboutus__coffee-item-back'>
											<ul className='aboutus__coffee-backside p-3'>
												<li>- Espresso z aksamitną, spienioną mleczną pianką.</li>
												<li>- Zrównoważone połączenie intensywności kawy i delikatności mleka.</li>
												<li>- Na wierzchu często posypuje się kakao lub cynamonem dla aromatu.</li>
												<li>- Tradycyjnie przygotowywane w proporcji 1/3 espresso, 1/3 gorącego mleka, 1/3 pianki.</li>
											</ul>
										</div>
									</div>
									<div className='aboutus__coffee-type p-2 text-center fw-bold'>Cappuccino</div>
								</div>
								<div className='aboutus__coffee-item rounded-4 mb-3 mb-md-0'>
									<div className='aboutus__coffee-item-inner'>
										<div className='aboutus__coffee-item-front'>
											<img className='aboutus__coffee-img' src={Espresso} alt='Espresso cup' />
										</div>
										<div className='aboutus__coffee-item-back'>
											<ul className='aboutus__coffee-backside p-3'>
												<li>- Mocna, skoncentrowana porcja kawy w małej filiżance.</li>
												<li>- Krótki strzał energii i intensywnego smaku.</li>
												<li>- Zawsze podawana w małej ilości, by wydobyć pełnię aromatu i olejków.</li>
												<li>- Przygotowywana przy użyciu ekspresu ciśnieniowego, który w kilka sekund przepuszcza gorącą wodę przez zmielone ziarna.</li>
											</ul>
										</div>
									</div>
									<div className='aboutus__coffee-type p-2 text-center fw-bold'>Espresso</div>
								</div>
								<div className='aboutus__coffee-item rounded-4 mb-3 mb-md-0'>
									<div className='aboutus__coffee-item-inner'>
										<div className='aboutus__coffee-item-front'>
											<img className='aboutus__coffee-img' src={Latte} alt='Latte cup' />
										</div>
										<div className='aboutus__coffee-item-back'>
											<ul className='aboutus__coffee-backside p-3'>
												<li>- Duża kawa mleczna z jedną porcją espresso.</li>
												<li>- Łagodna, kremowa, świetna do picia w wolnym tempie.</li>
												<li>- Tworzona przez dodanie spienionego mleka do espresso w dużej filiżance.</li>
												<li>- Często dekorowana wzorami latte art na piance mlecznej.</li>
											</ul>
										</div>
									</div>
									<div className='aboutus__coffee-type p-2 text-center fw-bold'>Latte</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<div className='aboutus__bg-img'></div>
		</div>
	);
}
