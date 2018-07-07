import React, { Component } from 'react';
import '../Css/landingPage.css'
import Servers from '../Components/LandingPage/serverCards';

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
                <h4 className="sectHeader joinUs my-2">Recruiting Now!</h4>
                <p className="text-muted ">Apply today on your chosen site, below</p>
                <a className="btn applyBtn mcfBtn " href="/"></a>
                <a className="btn applyBtn redditBtn" href="/"></a>
            </div>

            <div className="container">
                <div className="py-5">
                    <h1 className="sectHeader serverSectTitle">Servers</h1>
                    <Servers />   
                </div>
            </div>

        </div>
    );
  }
}

export default landingPage;