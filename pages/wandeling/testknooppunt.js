import Layout from "../../components/Layout";
import {Container} from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import Gallery from "react-grid-gallery";

function Testknooppunt() {
    const IMAGES =
        [{
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
            {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "Boats (Jeshu John - designerspics.com)"
            },

            {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212
            }]
    return (
        <Layout>
            <Container>
                <PageTitle>Beiaard</PageTitle>
                <Gallery images={IMAGES}/>
            </Container>
        </Layout>
    );
}

export default Testknooppunt;