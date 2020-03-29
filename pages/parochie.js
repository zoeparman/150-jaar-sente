import Layout from '../components/Layout';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import PageTitle from "../components/PageTitle";
import TransparentCard from "../components/TransparentCard";

const Parochie = () => (
    <Layout>
        <Container>
            <PageTitle>150 Jaar Parochie Sente</PageTitle>
            <Row>
                <Col xs={6}>
                    <Image src={"/resources/parochie/pastorij-kerk.jpg"} fluid rounded/>
                </Col>
                <Col>
                    <TransparentCard title={"De Parochie Sint-Katharina"}>
                        <blockquote className={"blockquote mb-0"}>
                            In 1870, op 15 maart, werd E.H. Adolf Debien als eerste pastoor benoemd in Sint-Katharina. Hij bracht heel wat vernieuwing in Sente. De kapel was te klein geworden. De Sentenaren moesten buiten voor de deur de mis bijwonen. Pastoor Debien wilde een grotere kerk bouwen. De drie gemeenten, Heule, Lendelede en Kuurne beloofden een grotere kerk te bouwen en een kerkhof op te richten op kosten van de drie gemeenten. De neo-romaanse kerk werd op 7 september 1879 ingewijd door de deken van Kortrijk. Sindsdien werd de eerste zondag van september gevierd als kermiszondag. E.H.Debien bouwde ook een schoolgebouw en 4 Zusters van het klooster van Heule kwamen onderwijs geven.
                        </blockquote>
                        <footer className="blockquote-footer">
                            uit <cite title={"Geschiedenis van St.-Katherina"}>Geschiedenis van St.-Katherina</cite> door K.Suykers
                        </footer>
                    </TransparentCard>
                </Col>
            </Row>
            <Row id={"programma"}>
                <Col style={{marginTop: 25}}>
                    <TransparentCard title={"Jaarprogramma"}>
                    <ul>
                        <li><b>15 maart (uitgesteld):</b> Jubileumviering - opgeluisterd door koor H. Familie - Bosmolens</li>
                        <li><b>24 mei:</b> "Vruchten der Aarde": misviering op de hoeve Joris Geldhof - Sint-Arnoldusstraat 6, Lendelede</li>
                        <li><b>6 september:</b> Ker(k)misviering</li>
                        <li><b>29 november:</b> Feestviering H. Katharina - verzorgd door Gregoriaans koor</li>
                        <li><b>24 december:</b> Middernachtmis.</li>
                    </ul>
                    </TransparentCard>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default Parochie;
