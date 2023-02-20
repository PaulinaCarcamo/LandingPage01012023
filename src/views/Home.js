import AnimGrid from '../components/AnimGrid.js';
import Banner from '../components/Banner.js';
import ImgCarousel from '../components/Carousel.js';
import Footer from '../components/Footer.js';
import ImgGrid from '../components/ImgGrid.js';
import Navigation from '../components/Navbar.js';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner/>
            <ImgGrid/>
            <ImgCarousel/>
            <AnimGrid/>
            <Footer />
        </div>
    )
};

export default Home;