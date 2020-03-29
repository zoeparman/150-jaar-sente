import Jumbotron from "react-bootstrap/Jumbotron";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Layout from '../components/Layout';
import PageTitle from "../components/PageTitle";
import TransparentCard from "../components/TransparentCard";

const Kermis = () => (
    <Layout>
        <Container>
            <PageTitle>
                150 Jaar Sente Kermis
            </PageTitle>
            <Row>
                <Col lg={6} style={{marginTop: 25}}>
                    <TransparentCard
                        title={"Koerse"}
                        img={"/resources/carousel-2.jpg"}>
                        De vrijdag ist koerse e zeg
                    </TransparentCard>
                </Col>
                <Col lg={6} style={{marginTop: 25}}>
                    <TransparentCard
                        title={"Kindernamiddag"}
                        img={"/resources/carousel-2.jpg"}>
                        De zaterdagmiddag ist kindernamiddag e zeg
                    </TransparentCard>
                </Col>
                <Col lg={6} style={{marginTop: 25}}>
                    <TransparentCard
                        title={"Dirty Daddy's"}
                        img={"/resources/carousel-2.jpg"}>
                        De zaterdagavond komen de dirty daddy's e zeg
                    </TransparentCard>
                </Col>
                <Col lg={6} style={{marginTop: 25}}>
                    <TransparentCard
                        title={"Petanquetornooi"}
                        img={"/resources/carousel-2.jpg"}>
                        De zondag ist petanquetornooi e zeg
                    </TransparentCard>
                </Col>
                <Col lg={6} style={{marginTop: 25}}>
                    <TransparentCard
                        title={"Beenhespe"}
                        img={"/resources/carousel-2.jpg"}>
                        De zondag ist wok beenhespe e zeg
                    </TransparentCard>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default Kermis;
