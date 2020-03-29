import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Layout from '../components/Layout';

const Vlag = () => (
    <Layout>
        <Container>
            <Row>
                <h1>Bevlag je huizen!</h1>
            </Row>
            <Row>
                <Col>
                    <Image src="/resources/vlag.png" style={{ height: '40rem' }}/>
                </Col>
                <Col>
                    <p>Een vlag bestellen kan via <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_tMuZ1LSZhdtwwdcYNCh-vMkcK5gEqg_dEgevL89aeZJQSA/viewform" target="_blank">Dit formulier.</a></p>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_tMuZ1LSZhdtwwdcYNCh-vMkcK5gEqg_dEgevL89aeZJQSA/viewform?embedded=true"
                            width={640} height={720} frameBorder={0} marginHeight={0} marginWidth={0}>Laden...</iframe>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default Vlag;
