import { Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const images = [
    "https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fcameralogophoto.png?alt=media&token=4844f697-7a86-423f-b80b-4abfc1ebc434"
];

const Banner = () => {
    return (

        <Container fluid className="py-5 text-center text-light"
            style={{
                backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.200), rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.200)), url('https://raw.githubusercontent.com/PaulinaCarcamo/LandingpageProject/main/images/jumbotronphotobg.jpg')",
                backgroundSize: "cover",
            }}>

            <Image className="my-3" height={150} src={images[0]} />

            <h1 className="display-5 fw-bold" style={{ textShadow: "#000 1px 0 10px" }}>Expert Photography</h1>
            <Col className="col-lg-6 mx-auto">
                <p className="lead mt-2 mb-4" style={{ textShadow: "#000 1px 0 10px" }}>
                    As the leading marketplace for art and photography by the world's emerging and established photographers, we've made it easy for new and experienced collectors to discover, acquire, and so much more. Everything you'll ever need to collect art and photography, you'll find here.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center pb-4">
                    <Button variant="secondary" className="py-2 px-4" style={{ transition: "0.5s" }}>Browse</Button>
                    <Button variant="light" className="py-2 px-4" style={{ transition: "0.5s" }}>Sign in</Button>
                </div>
            </Col>
        </Container>
    )
};

export default Banner;