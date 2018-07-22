import React from 'react'

import '../../Css/footer.css'

const Footer = () => {
    return (
        <footer className="nb-footer">
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="about">
        
                            <div className="social-media">
                                <ul className="list-inline">
                                    <li className="list-inline-item px-3"><a href="https://youtube.com" title=""><i className="fab fa-youtube"></i></a></li>
                                    <li className="list-inline-item px-3"><a href="https://twitter.com" title=""><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item px-3"><a href="https://google.com" title=""><i className="fab fa-google-plus"></i></a></li>
                                    <li className="list-inline-item px-3"><a href="http://facebook.com/" title=""><i className="fab fa-facebook"></i></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="footer-info-single">
                            <h2 className="title">Community</h2>
                            <ul className="list-unstyled">
                                <li><a href="/about" title=""><i className="fa fa-angle-double-right"></i> About Us</a></li>
                                <li><a href="/members" title=""><i className="fa fa-angle-double-right"></i> Members</a></li>
                                <li><a href="/about" title=""><i className="fa fa-angle-double-right"></i> Join Us</a></li>
                                <li><a href="/donations" title=""><i className="fa fa-angle-double-right"></i> Donations</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="footer-info-single">
                            <h2 className="title">Servers</h2>
                            <ul className="list-unstyled">
                                <li><a href="/server/survival" title=""><i className="fa fa-angle-double-right"></i> Survival</a></li>
                                <li><a href="/server/creative" title=""><i className="fa fa-angle-double-right"></i> Creative</a></li>
                                <li><a href="/server/skyisland" title=""><i className="fa fa-angle-double-right"></i> Sky Island</a></li>
                                <li><a href="/server/modded" title=""><i className="fa fa-angle-double-right"></i> Modded</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="footer-info-single">
                            <h2 className="title">Server Maps</h2>
                            <ul className="list-unstyled">
                                <li><a href="/maps" title=""><i className="fa fa-angle-double-right"></i> Survival</a></li>
                                <li><a href="/maps" title=""><i className="fa fa-angle-double-right"></i> Creative</a></li>
                                <li><a href="/maps" title=""><i className="fa fa-angle-double-right"></i> Sky Island</a></li>
                                <li><a href="/maps" title=""><i className="fa fa-angle-double-right"></i> Modded</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="footer-info-single">
                            <h2 className="title">Tutorials</h2>
                            <ul className="list-unstyled">
                                <li><a href="/tutorials/survival" title=""><i className="fa fa-angle-double-right"></i> Survival Tuts</a></li>
                                <li><a href="/tutorials/creative" title=""><i className="fa fa-angle-double-right"></i> Creative Tuts</a></li>
                                <li><a href="/tutorials/skyisland" title=""><i className="fa fa-angle-double-right"></i> Sky Island Tuts</a></li>
                                <li><a href="/tutorials/modded" title=""><i className="fa fa-angle-double-right"></i> Modded Tuts</a></li>
                            </ul>
                        </div>
                    </div>
                
                </div>
            </div>

            <section className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <p>Copyright © {new Date().getFullYear()} - PlanB MC</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
  );
}

  export default Footer;