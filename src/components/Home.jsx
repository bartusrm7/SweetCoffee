import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import Hero from "./Hero";

export default function Home() {
	return (
		<Container>
			<Row>
				<Col lg={10} className='mx-auto d-flex justify-content-between align-items-center'>
					<Navigation />
					<Hero />
				</Col>
			</Row>
		</Container>
	);
}
