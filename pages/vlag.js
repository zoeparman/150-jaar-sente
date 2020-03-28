import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from "react-bootstrap/Jumbotron";
import Layout from '../components/Layout';

const Vlag = () => (
    <Layout>
        <Jumbotron className="text-center">
            <h1>Vlag bestellen</h1>
            <p>
                Bestel je vlag hier.
            </p>
        </Jumbotron>
        <Container>
            <Row>
                <Col>
                    <Image src="/resources/vlag.png" style={{ height: '40rem' }}/>
                </Col>
                <Col>
                    <h2>
                        Bestel hier uw vlag!
                    </h2>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Emailadres</Form.Label>
                            <Form.Control type="email" placeholder="" />
                            <Form.Text className="text-muted">
                                Wij delen uw emailadres met niemand.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Label>Voornaam</Form.Label>
                            <Form.Control placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Label>Achternaam</Form.Label>
                            <Form.Control placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Leveradres</Form.Label>
                            <Form.Control placeholder="" />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Bestellen
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default Vlag;
