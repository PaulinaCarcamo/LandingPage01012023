import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const images = [
    "https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fbluedogbg.jpg?alt=media&token=2e1bd774-09fd-4dad-853f-c76b9b133c49",
    "https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fgreenreptile.jpg?alt=media&token=9cda26e5-41e1-4fd4-a056-919b9344543f",
    "https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fgiraffemoon.jpg?alt=media&token=4fb71eb1-c5f8-4807-8e0c-891ec8591249",
    "https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fpolarbearimage.jpg?alt=media&token=f2e81e2a-05e8-44da-bfbe-1ae6fe9e050b",
    "https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fblueyellowtiger.jpg?alt=media&token=96b52a51-e687-49be-8143-8df0addcf83e",
    "https://firebasestorage.googleapis.com/v0/b/testing-photo-upload.appspot.com/o/photography-images%2Fpugdogwhite.jpg?alt=media&token=8c39c92c-97ba-45e0-b543-bbb5a661d6f5",

]

const ImgGrid = () => {
    return (

        <Container className="mt-5 mb-4">
            <div className="text-light pb-2">
                <h1>Preserve beautiful moments</h1>
                <p>Photography traps light and preserves a moment. A good photograph expresses the full range of emotion with an incredible power found in few other artistic media. In Expert's photographic galleries, you'll find every subject of photographic print, from the traditional to the experimental, figurative to abstract.</p>
            </div>

            <Row>
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src={images[0]}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src={images[2]}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={images[4]}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src={images[5]}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={images[1]}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src={images[3]}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </div>
            </Row>



        </Container>
    );
}

export default ImgGrid;