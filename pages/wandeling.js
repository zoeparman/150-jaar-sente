import knooppunten from "./wandeling/knooppunten";
import Link from "next/link";
import Jumbotron from "react-bootstrap/Jumbotron";
import Layout from '../components/Layout';
import Container from "react-bootstrap/Container";

const Wandeling = () => (
    <Layout>
        <Container>
            <h1>
                Cultuurwandeling
            </h1>
            <p>
                In het kader van 150 jaar Sente wordt een blijvende knooppuntenwandeling opgezet, waarvan de feestelijke opening of ‘inwandeling’ doorgaat op 28 juni. Afspraak aan buurthuis 't Senter om 14 uur. Er is een basiswandeling opgemaakt van een 8-tal km met daarnaast twee bijkomende lussen, één naar Kuurne en één naar Lendelede. Op een twintigtal punten staat een paaltje waar je met een QR-code informatie kan oproepen, een foto, een filmpje van hoe het er vroeger uit zag. Op 28 juni worden tijdens de wandeling live-acts voorzien.  Er is ook een fotozoektocht verbonden aan het gebeuren die loopt van 28 juni tot eind december en waar iedereen kan aan deelnemen.
            </p>
        </Container>
    </Layout>
);

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
