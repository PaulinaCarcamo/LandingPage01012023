import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const images = [
    "https://i.postimg.cc/Mp7FrNPq/do2dogeeb.jpg",
    "https://i.postimg.cc/VkFcbJcq/m-PNreptv-O1.jpg",
    "https://i.postimg.cc/hGK5Fs6x/b-A1lgiraffcvp5.jpg",
    "https://i.postimg.cc/ZnvfPMvk/k-I3pbear-Lq9.jpg",
    "https://i.postimg.cc/1tjCqQtc/dk6tigerhm.jpg",
    "https://i.postimg.cc/hP7wVfVJ/9SBdogQC.jpg",
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