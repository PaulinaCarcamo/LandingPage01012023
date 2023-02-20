import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

const images = [
    "https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fyellowcateyes.jpg?alt=media&token=f79954c8-539c-467d-a094-df74fc237560",
    "https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fmongoosethreefaces.jpg?alt=media&token=0343f858-8533-4e79-a188-864c776e16c9",
    "https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fowleyesface.jpg?alt=media&token=210a4361-7298-4e08-9d4c-0e76320ebb34"
]

const ImgCarousel = () => {
    return (
        <Container>
            <div className="text-light">
                <h1>Discover our themes</h1>
                <p>Expert artists offer portraits, landscapes, abstracts, from black-and-white to Technicolor, using traditional, digital and alternative processes. A photographic print adds vibrancy and sophistication to any wall. In Expert photography we offer art online by style, medium, subject. Browse through our galleries to find the perfect photographic print for your home. </p>
            </div>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <Image
                        className="d-block w-100"
                        src={images[0]}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>High-resolution photos</h3>
                        <p>Access to our full library of high-resolution photos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <Image
                        className="d-block w-100"
                        src={images[1]}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Discover quality images</h3>
                        <p>Be the first to discover our new collections and limited time deals.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <Image
                        className="d-block w-100"
                        src={images[2]}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Variety of picture libraries</h3>
                        <p>
                            Incredible content and innovative work, all on one platform.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default ImgCarousel;