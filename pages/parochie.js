import Layout from '../components/Layout';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Parochie = () => (
    <Layout>
        <Container>
            <Row>
                <h1>150 Jaar Parochie Sente</h1>
            </Row>
            <Row>
                <Col xs={6} style={{
                    marginTop: 25
                }}>
                    <Image src={"resources/parochie/pastorij-kerk.jpg"} fluid rounded/>
                </Col>
                <Col>
                    <Card style={{
                        marginTop: 25
                    }}>
                        <Card.Header style={{fontSize: 32}}>
                            De Parochie Sint-Katharina
                        </Card.Header>
                        <Card.Body style={{fontSize: 24}}>
                            <Card.Text>
                                In 1870, op 15 maart, werd E.H. Adolf Debien als eerste pastoor benoemd in Sint-Katharina. Hij bracht heel wat vernieuwing in Sente. De kapel was te klein geworden. De Sentenaren moesten buiten voor de deur de mis bijwonen. Pastoor Debien wilde een grotere kerk bouwen. De drie gemeenten, Heule, Lendelede en Kuurne beloofden een grotere kerk te bouwen en een kerkhof op te richten op kosten van de drie gemeenten. De neo-romaanse kerk werd op 7 september 1879 ingewijd door de deken van Kortrijk. Sindsdien werd de eerste zondag van september gevierd als kermiszondag. E.H.Debien bouwde ook een schoolgebouw en 4 Zusters van het klooster van Heule kwamen onderwijs geven.
                                <footer className="blockquote-footer">
                                    uit <cite title={"Geschiedenis van St.-Katherina"}>Geschiedenis van St.-Katherina</cite> door K.Suykers
                                </footer>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{marginTop: 25}}>
                <h1>Jaarprogramma</h1>
            </Row>
            <Row>
                <Col>
                    <ul>
                        <li><b>15 maart (uitgesteld):</b> Jubileumviering - opgeluisterd door koor H. Familie - Bosmolens</li>
                        <li><b>24 mei:</b> "Vruchten der Aarde": misviereing op de hoeve Joris Geldhof - Sint-Arnoldusstraat 6, Lendelede</li>
                        <li><b>6 september:</b> Ker(k)misviering</li>
                        <li><b>29 november:</b> Feestviering H. Katharina - verzorgd door Gregoriaans koor</li>
                        <li><b>24 december:</b> Middernachtmis.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default Parochie;
