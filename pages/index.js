import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import NavBar from '../components/NavBar';
import styles from '../style/carousel.css'

const Index = () => {
    return (
        <div>
            <NavBar/>
            <Carousel className={styles.carousel}>
                <Carousel.Item className={styles.item}>
                    <Image
                        src="/resources/carousel-1.jpg"
                    />
                </Carousel.Item>
                <Carousel.Item className={styles.item}>
                    <Image
                        src="/resources/carousel-2.jpg"
                    />
                </Carousel.Item>
                <Carousel.Item className={styles.item}>
                    <Image
                        src="/resources/carousel-3.jpg"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Index;
