import logo from "../images/logo-eato.jpg";

const FooterComponent = () => {
    return (
        <div className="footer-container">
            {/* <div className="footer-top">
                <div className="newsletter-section">

                </div>
            </div> */}
            <div className="footer-middle">
                <div className="company-information-section footer-div">
                    <div className="company-logo">
                        <img src={logo} alt="company-logo-image" className="mainLogo" />
                    </div>
                    <p>Providing the best food experience, straight to your door.</p>
                    <div className="social-links">
                        <img></img>
                        <img></img>
                        <img></img>
                        <img></img>
                    </div>
                </div>
                <div className="quick-links-section footer-div">
                    <div className="footer-title">
                        <h4>Quick Links</h4>
                    </div>
                    <div className="footer-navigation">
                        <ul>
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                            <li><a href="#">Link 4</a></li>
                            <li><a href="#">Link 5</a></li>
                            <li><a href="#">Link 6</a></li>
                        </ul>
                    </div>
                </div>
                <div className="useful-links-section footer-div">
                    <div className="footer-title">
                        <h4>Useful Links</h4>
                    </div>
                    <div className="footer-navigation">
                        <ul>
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                            <li><a href="#">Link 4</a></li>
                            <li><a href="#">Link 5</a></li>
                            <li><a href="#">Link 6</a></li>
                        </ul>
                    </div>
                </div>
                <div className="contact-section footer-div">
                    <div className="footer-title">
                        <h4>Contact Us</h4>
                    </div>
                    <div className="contact-navigation">
                        
                    </div>
                </div>
                <div className="download-app-section footer-div">
                    <div className="footer-title">
                        <h4>Download App</h4>
                    </div>
                    <div className="download-app-icons">

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="copyright-section">
                    <p>© 2024, Eato, All Rights Reserved</p>
                </div>
                <div className="payment-section">
                    <p>Accept for</p>
                    <div className="paypal-icon">
                        <img></img>
                    </div>
                    <div className="visa-icon">
                        <img></img>
                    </div>
                    <div className="mastercard-icon">
                        <img></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent;