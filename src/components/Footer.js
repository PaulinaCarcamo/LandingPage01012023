import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faDove, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#0000001a" }}>
            <footer className="py-5 text-light mt-5">
                <div className="row px-5">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Animals</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Aquatic</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Wild life</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Livestock</a></li>


                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Landscape</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Dessert</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mountain</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Jungle</a></li>


                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Surreal</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Dreams</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Historical</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Calligramme</a></li>


                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control w-50" placeholder="Email address" />
                                <Button variant="secondary" style={{transition: "0.5s"}}>Subscribe</Button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between px-5 py-4 my-4 mb-0 border-top border-dark border-2">
                    <p>&copy; 2022 Expert, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        {/* <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><a href="#twitter" /></svg></a></li> */}
                        <li className="ms-3"><a href="#" className="text-light"><FontAwesomeIcon icon={faCameraRetro} /></a></li>
                        <li className="ms-3"><a href="#" className="text-light"><FontAwesomeIcon icon={faDove} /></a></li>
                        <li className="ms-3"><a href="#" className="text-light"><FontAwesomeIcon icon={faEnvelope} /></a> </li>
                        <li className="ms-3"><a href="#" className="text-light"><FontAwesomeIcon icon={faGlobe} /></a> </li>

                    </ul>
                </div>
            </footer>
        </div>
    )
};

export default Footer;