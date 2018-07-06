import React, { Component } from 'react';
import '../Css/landingPage.css'

class landingPage extends Component {
  render() {
    return (
        <div className="wrapperBanner text-center color-white bg-dark">
            <div className="page-header section-dark">
                <div className="filter"></div>
            
                <div className="content-center">
                    <div className="logoContainer">
                        <div className="title-brand">
                            <h1 className="Logo">PlanB</h1>
                            <p>Minecraft Community</p>
                        </div>
                    </div>
                </div>

                <div className="moving-clouds"></div> 
            </div>

            <div className="home-cta center p-4">
                <h4 className="joinUs my-2">Recruiting Now!</h4>
                <p className="text-muted ">Apply today on your chosen site, below</p>
                <a className="btn applyBtn mcfBtn " href="/"></a>
                <a className="btn applyBtn redditBtn" href="/"></a>
            </div>

            <section className="">
                <div className="container">
                    <div className="srow py-5">
                        <h1 className="text-light">Servers</h1>            
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

export default landingPage;