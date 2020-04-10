import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from '../components/Layout';
import PageTitle from "../components/PageTitle";
import TransparentCard from "../components/TransparentCard";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import {Accordion, Button} from "react-bootstrap";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Kermis = () => (
    <Layout>
        <Container fluid style={{width: "80%"}}>
            <PageTitle>
                150 Jaar Sente Kermis
            </PageTitle>
            <Row>
                <Col md={12}>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <h1 className={"display-6"}>Vrijdag 04/09/2020 <FontAwesomeIcon icon={faAngleDown}/></h1>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0" className="justify-content-md-center">
                                <Col xl={{span: 6, offset: 3}} lg={12}>
                                    <CardDeck>
                                        <TransparentCard
                                            title={"Feestelijke opening"}
                                            img={"/resources/kermis/receptie.jpg"}
                                            footer="18u00 - 19u30">
                                            We beginnen het kermisweekend met een feestelijke opening en receptie.
                                        </TransparentCard>
                                        <TransparentCard
                                            title={"Silent disco"}
                                            img={"/resources/kermis/Silent-Disco.jpg"}
                                            footer="19u30 - ...">
                                            Vanaf 19u30 smijten we onze beentjes op de dansvloer in de silent disco,
                                            met een selectie aan streekbiertjes voor de liefhebbers.
                                        </TransparentCard>
                                    </CardDeck>
                                </Col>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <h1 className={"display-6"}>Zaterdag 05/09/2020 <FontAwesomeIcon icon={faAngleDown}/></h1>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1" className="justify-content-md-center">
                                <Col>
                                    <CardDeck>
                                        <TransparentCard
                                            title={"Kindernamiddag"}
                                            img={"/resources/kermis/kindernamiddag.jpg"}
                                            footer="13u30 - 18u00">
                                            De zaterdagnamiddag staat in thema van de jongsten onder ons.
                                            Springen op het springkasteel, schminken, ravotten, ... Het kan allemaal,
                                            terwijl mama en papa ondertussen gezellig iets drinken in het zonnetje.
                                        </TransparentCard>
                                        <div className="w-100 d-none d-sm-block d-md-none"/>
                                        <TransparentCard
                                            title={<a href="https://www.facebook.com/thewoodbeez/" target="_blank">The Woodbeez</a>}
                                            img={"/resources/kermis/woodbeez.jpg"}
                                            footer="20u30 - 21u30">
                                            's Avonds genieten we van een gezellig optreden van The Woodbeez.
                                        </TransparentCard>
                                        <div className="w-100 d-none d-sm-block d-lg-none"/>
                                        <TransparentCard
                                            title={<a href="https://www.youtube.com/watch?v=FHefmNmb0Uo" target="_blank">Dirty Daddies</a>}
                                            img={"/resources/kermis/dirty\ daddies.jpg"}
                                            footer="22u00 - 23u30">
                                            Met meer dan 500 shows in de benen is de kans dat je nog nooit van The Dirty Daddies gehoord hebt klein.
                                            Zeer klein. De eerste en enige coverband ooit die op eigen kracht twee keer AFAS Live uitverkocht heeft,
                                            was al te zien bij RTL Late Night, NOS op 3 en BNN en sloten festivals als Zwarte Cross, Paaspop en Concert At Sea af.
                                        </TransparentCard>
                                        <div className="w-100 d-none d-sm-block d-md-none"/>
                                        <TransparentCard
                                            title={"Afterparty"}
                                            img={"/resources/kermis/afterparty.jpg"}
                                            footer="23u30 - ...">
                                            We sluiten de zaterdagavond met een afterparty tot in de vroege uurtjes.
                                        </TransparentCard>
                                    </CardDeck>
                                </Col>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    <h1 className={"display-6"}>Zondag 06/09/2020 <FontAwesomeIcon icon={faAngleDown}/></h1>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2" className="justify-content-md-center">
                                <div>
                                    <Col>
                                        <CardDeck>
                                            <TransparentCard
                                                title={"Eucharistieviering"}
                                                img={"/resources/kermis/eucharistie.jpg"}
                                                footer="10u00 - 11u00">
                                                Zondagmorgen worden is iedereen welkom in de kerk voor de eucharistieviering, ook in thema van 150 jaar sente.
                                            </TransparentCard>
                                            <div className="w-100 d-none d-sm-block d-lg-none"/>
                                            <TransparentCard
                                                title={"Aperitiefconcert"}
                                                img={"/resources/kermis/aperitiefconcert.jpg"}
                                                footer="11u00 - 12u30">
                                                Na de misviering genieten we van zon, drank, muziek, sfeer en gezelligheid bij het aperitiefconcert.
                                            </TransparentCard>
                                            <div className="w-100 d-none d-sm-block d-lg-none"/>
                                            <TransparentCard
                                                title={"Cote à l'os"}
                                                img={"/resources/kermis/cotealos.jpg"}
                                                footer="12u30 - 14u00">
                                                Zondagmiddag worden we weer verwend met heerlijke cote à l'os op de barbecue. Niet te missen!
                                            </TransparentCard>
                                        </CardDeck>
                                    </Col>
                                    <Col xl={{span: 6, offset: 3}}>
                                        <CardDeck>
                                            <TransparentCard
                                                title={"Pétanquetornooi"}
                                                img={"/resources/kermis/petanque.jpg"}
                                                footer="14u00 - 19u00">
                                                Zondagnamiddag volgt de strijd der titanen: het pétanquetornooi. Wie gaat dit jaar met de felbegeerde titel lopen?
                                            </TransparentCard>
                                            <div className="w-100 d-none d-sm-block d-md-none"/>
                                            <TransparentCard
                                                title={"Verrassing!"}
                                                img={"/resources/kermis/surprise.png"}
                                                footer="???">
                                                Verrassing!
                                            </TransparentCard>
                                        </CardDeck>
                                    </Col>
                                </div>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    <h1 className={"display-6"}>Maandag 07/09/2020 <FontAwesomeIcon icon={faAngleDown}/></h1>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3" className="justify-content-md-center">
                                    <Col lg={{span:6, offset: 3}}>
                                        <Card style={{marginTop: 25}}>
                                            <Card.Img variant="top" src="/resources/kermis/koen-crucke.jpg" style={{height: 350, objectFit: "cover"}}/>
                                            <Card.Body>
                                                <Card.Title style={{fontWeight: "bold"}}>Seniorennamiddag met Koen Crucke</Card.Title>
                                                We sluiten het kermisweekend af met een namiddag voor de nieuwe jeugd, met entertainment door Koen Crucke.
                                            </Card.Body>
                                            <Card.Footer>
                                                13u00 - 16u30
                                            </Card.Footer>
                                            <style jsx global>{`
                          .card {
                            background-color: rgba(245, 245, 245, 0.7) !important;
                          }
                        `}</style>
                                        </Card>
                                    </Col>
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default Kermis;
