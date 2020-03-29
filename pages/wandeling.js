import Layout from '../components/Layout';
import Container from "react-bootstrap/Container";
import PageTitle from "../components/PageTitle";
import TransparentCard from "../components/TransparentCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image";

class Wandeling extends React.Component {
    render() {
        let imageRoot = "/resources/wandeling/liveacts/";
        let liveActs = [
            {"image": "scarminkel.png", "caption": "Volkskunstgroep Scarminkel", "link": "http://www.scarminkel.be"},
            {"image": "koor.png", "caption": "Koninklijk Sint-Ceciliakoor", "link": "http://sentekoor.blogspot.com"},
            {"image": "corenmuyzen.png", "caption": "De Corenmuyzen", "link": "https://www.facebook.com/corenmuyzen"},
            {"image": "surprise.png", "caption": "Surprise act"}
        ];

        return (
            <Layout>
                <Container>
                    <PageTitle>Knooppuntenwandeling</PageTitle>
                    <Row>
                        <Col>
                            <TransparentCard>
                                In het kader van 150 jaar Sente wordt een blijvende knooppuntenwandeling opgezet, waarvan de feestelijke opening of ‘inwandeling’ doorgaat op 28 juni. Afspraak aan buurthuis 't Senter om 14 uur. Er is een basiswandeling opgemaakt van een 8-tal km met daarnaast twee bijkomende lussen, één naar Kuurne en één naar Lendelede. Op een twintigtal punten staat een paaltje waar je met een QR-code informatie kan oproepen, een foto, een filmpje van hoe het er vroeger uit zag. Op 28 juni worden tijdens de wandeling live-acts voorzien.  Er is ook een fotozoektocht verbonden aan het gebeuren die loopt van 28 juni tot eind december en waar iedereen kan aan deelnemen.
                            </TransparentCard>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 25}}>
                        <Col><h1 className={"display-4"}>Live-acts</h1></Col>
                    </Row>
                    <Row>
                        {liveActs.map((value, index) => {
                            return (
                                <Col lg={6} style={{marginTop: 25}}>
                                    <TransparentCard
                                        title={value.link
                                            ? <a href={value.link} target="_blank">{value.caption}</a>
                                            : value.caption}>
                                        <Image src={imageRoot + value.image} fluid rounded/>
                                    </TransparentCard>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </Layout>
        );
    }
}

export default Wandeling;

/*
        <Jumbotron className="text-center">
            <h1>Wandeling</h1>
            <p>
                We doen een wandeling.
            </p>
        </Jumbotron>
        {knooppunten.map((loop, _) => {
            return (
                <div>
                    <h1>{loop.name}</h1>
                    <ul>
                        {loop.nodes.map((node, _) => {
                            return (
                                <li>
                                    <Link href={`/wandeling/${node.location}`}>
                                        <a>{node.name}</a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        })}
 */
