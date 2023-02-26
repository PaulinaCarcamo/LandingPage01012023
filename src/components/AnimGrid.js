import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';

const AnimGrid = () => {
    return (
        <Container className="my-5">
            <div className="text-light">
                <h1>Find the perfect capture</h1>
                <p>
                    Over the course of time we've seen color photography, digital photography, photography as art, photojournalism, moving photography and just about anything else you can think of. The once-mysterious art has progressed but in its essence, photography is still the means to capture all those special moments.
                </p>
            </div>
            <Row>
                <Col lg={true} className="mt-3">
                    <div className="h-100 p-5 rounded-3" style={{
                        backgroundImage: "url('https://i.postimg.cc/LXcWWSp4/z-JUBsunrnda.gif')",
                        backgroundSize: "cover"
                    }}>
                        <h2>Unique moments</h2>
                        <p>From striking portraiture to atmospheric landscape photographs. Expert is all about championing originality. We offer pieces in limited editions, so you can be assured what you are buying is totally unique. No mass-produced prints.</p>
                        <Button variant="outline-light" style={{ transition: "0.8s" }}>Browse our Gallery</Button>
                    </div>
                </Col>

                <Col lg={true} className="mt-3">
                    <div className="h-100 p-5 rounded-3" style={{
                        backgroundImage:
                            "url('https://i.postimg.cc/RF2rzfcB/BJfsunrz-JUB.gif')",
                        backgroundSize: "cover"
                    }}>
                        <h2>Astonishing views</h2>
                        <p>Save, organize, and share content for your creative ideas or your personal collection without jumping between platforms. Keep track of your assets so you can find what you need, when you need it and how you need it.</p>
                        <Button variant="outline-light" style={{ transition: "0.8s" }}>Browse our Gallery</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AnimGrid;