import footerLogo from "../images/logo-eato-footer.png";

const FooterComponent = () => {
    return (
        <div className="bg-gray-900 text-white footer-container">
            {/* <div className="footer-top">
                <div className="newsletter-section">

                </div>
            </div> */}
            <div className="py-10 footer-middle">
                <div className="flex flex-wrap justify-between max-w-screen-xl mx-auto footer-inner-row">
                    <div className="footer-div" id="company-information-section">
                        <div className="company-logo">
                            <img src={footerLogo} alt="company-logo-image" className="w-full max-w-[80px] h-auto mainLogo" />
                        </div>
                        <p>Providing the best food experience, straight to your door.</p>
                        <div className="flex gap-4 social-links">
                            <img></img>
                            <img></img>
                            <img></img>
                            <img></img>
                        </div>
                    </div>
                    <div className="footer-div" id="quick-links-section">
                        <div className="footer-title">
                            <h4 className="text-lg font-bold">Quick Links</h4>
                        </div>
                        <div className="footer-navigation">
                            <ul className="list-disc list-inside">
                                <li><a href="#" className="text-white hover:text-gray-400">Link 1</a></li>
                                <li><a href="#" className="text-white hover:text-gray-400">Link 2</a></li>
                                <li><a href="#" className="text-white hover:text-gray-400">Link 3</a></li>
                                <li><a href="#" className="text-white hover:text-gray-400">Link 4</a></li>
                                <li><a href="#" className="text-white hover:text-gray-400">Link 5</a></li>
                                <li><a href="#" className="text-white hover:text-gray-400">Link 6</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-div" id="useful-links-section">
                        <div className="footer-title">
                            <h4 className="text-lg font-bold">Useful Links</h4>
                        </div>
                        <div className="footer-navigation">
                            <ul className="list-disc list-inside">
                                <li><a href="#" className="text-white hover:text-gray-400">Link 1</a></li>
                                <li><a href="#" className="text-white hover:text-gray-400">Link 2</a></li>
                                <li><a href="#" className="text-white hover:text-gray-400">Link 3</a></li>
                                <li><a href="#" className="text-white hover:text-gray-400">Link 4</a></li>
                                <li><a href="#" className="text-white hover:text-gray-400">Link 5</a></li>
                                <li><a href="#" className="text-white hover:text-gray-400">Link 6</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-div" id="contact-section">
                        <div className="footer-title">
                            <h4 className="text-lg font-bold">Contact Us</h4>
                        </div>
                        <div className="contact-navigation">
                            
                        </div>
                    </div>
                    <div className="footer-div" id="download-app-section">
                        <div className="footer-title">
                            <h4 className="text-lg font-bold">Download App</h4>
                        </div>
                        <div className="download-app-icons">

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 py-4 footer-bottom">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center footer-inner-row">
                    <div className="copyright-section">
                        <p>© 2024, Eato, All Rights Reserved</p>
                    </div>
                    <div className="flex items-center payment-section">
                        <p className="mr-2">Accept for</p>
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
        </div>
    )
}

export default FooterComponent;