import React, { Component } from 'react';
import '../Css/general.css'

class general extends Component {
  render() {
    return (
        <div className="parrallax" style={{ backgroundImage: "url(https://api.planb-mc.com/webImages/about1.png)"}}>

        <div className="headerSection">
            <div className="titleBar py-4">
                <h1 className="text-center text-white">Title</h1>
                <h2 className="text-center text-danger">SubTitle</h2>
            </div>
        </div>

        <div className="transp"> 
        
            <div className="container py-4">
                <div className="px-5 py-4 bg-dark introBox">
                    <p className="text-white text-justify m-0">
                        Description
                    </p>
                </div>
            </div>

            <div className="container py-4">
                <div className="card-deck">

                    <div className="card p-4">
                        BOX 1
                    </div>
                        
                    <div className="card p-4">
                        BOX 2
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
    );
  }
}

export default general;