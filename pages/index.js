import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Layout from '../components/Layout';
import HoverImage from '../components/HoverImage';

class IndexPage extends React.Component {
    render() {
        let imageLinks = [
            {
                "title": "Knooppuntenwandeling",
                "imageUrl": "/resources/image_links/wandeling.jpg",
                "link": "/wandeling"
            },
            {
                "title": "Sente Kermis",
                "imageUrl": "/resources/image_links/kermis.jpg",
                "link": "/kermis"
            },
            {
                "title": "De Parochie",
                "imageUrl": "/resources/image_links/parochie.jpg",
                "link": "/parochie"
            },
            {
                "title": "Bevlag je huizen!",
                "imageUrl": "/resources/image_links/vlag.jpg",
                "link": "/vlag"
            },
        ];

        return (
            <Layout>
                <Container>
                    <Row>
                        <Col style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image src={"/resources/logo.svg"} fluid style={{
                                margin: 25
                            }}/>
                        </Col>
                    </Row>
                    <Row>
                        {imageLinks.map((value, index) => {
                            return (
                                <Col lg={6} style={{
                                    padding:10
                                }} key={value.title}>
                                    <HoverImage
                                        imageUrl={value.imageUrl}
                                        title={value.title}
                                        link={value.link}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </Layout>
        );
    }
}

export default IndexPage;
