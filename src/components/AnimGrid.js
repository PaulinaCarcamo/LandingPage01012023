import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const images = [
    "https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fsunsetgif.gif?alt=media&token=abef48ef-4844-4a0b-9dfc-f47216cc30d8",
    "https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fsunrisegif.gif?alt=media&token=50645def-53fc-4a3b-bf8e-82019c92c6d3"
]

function AnimGrid() {
    return (


            <Container className="my-5">
                <div className="text-light">
                    <h1>Find the images you love</h1>
                    <p>
                        Over the course of time we've seen color photography, digital photography, photography as art, photojournalism, moving photography and just about anything else you can think of. The once-mysterious art has progressed but in its essence, photography is still the means to capture all those special moments.
                    </p>
                </div>

                <Row className="row align-items-md-stretch">
                    <div className="col-md-6 pt-3">
                        <div className="h-100 p-5 rounded-3" style={{
                            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fsunsetgif.gif?alt=media&token=abef48ef-4844-4a0b-9dfc-f47216cc30d8')",
                            backgroundSize: "cover"
                        }}>
                            <h2>Unique moments</h2>
                            <p>From striking portraiture to atmospheric landscape photographs. Expert is all about championing originality. We offer pieces in limited editions, so you can be assured what you are buying is totally unique. No mass-produced prints.</p>
                            <Button variant="outline-light" style={{transition: "0.8s"}}>Browse our Gallery</Button>
                        </div>
                    </div>

                    <div className="col-md-6 pt-3">
                        <div className="h-100 p-5 rounded-3" style={{
                            backgroundImage:
                                "url('https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fsunrisegif.gif?alt=media&token=50645def-53fc-4a3b-bf8e-82019c92c6d3')",
                            backgroundSize: "cover"
                        }}>
                            <h2>Astonishing views</h2>
                            <p>Save, organize, and share content for your creative ideas or your personal collection without jumping between platforms. Keep track of your assets so you can find what you need, when you need it and how you need it.</p>
                            <Button variant="outline-light" style={{transition: "0.8s"}}>Browse our Gallery</Button>
                        </div>
                    </div>


                    {/* <div className="col-md-6">
                    <div className="h-100 p-5 bg-light border rounded-3" style={{
                        backgroundImage:
                            "url('https://i.pinimg.com/originals/5e/11/ac/5e11aca261ae40746983ac7efa1770d7.gif')"
                    }}>
                        <h2>Add borders</h2>
                        <p>Establishing itself in the late 19th and early 20th century, fine art photography is an art form just like any other medium. It involves attention to detail, mastery of equipment and a meticulous developmental process. You can choose from a wide range of subjects and styles.</p>
                        <button className="btn btn-outline-secondary" type="button">Example button</button>
                    </div>
                </div> */}
                </Row>

            </Container>
      
    );
}

export default AnimGrid;