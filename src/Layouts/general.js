import React from 'react';
import '../Css/general.css'

const general = ({title, sTitle, desc, bgImage, box1, box2, dwnld, useful, tuts, status, misc}) => {

    const ifBox = () => {
        if(box1) {
            return (
                <div className="container py-4">
                <div className="card-deck">
                    {box1}
                    {box2}
                </div>
            </div>
            )
        }
    }
    
    return (
        <div className="parrallax" style={{ backgroundImage: "url(" + bgImage + ")"}}>

        <div className="headerSection">
            <div className="titleBar py-4">
                <h1 className="text-center text-white">{title}</h1>
                <h2 className="text-center text-danger">{sTitle}</h2>
            </div>
        </div>

        <div className="transp"> 

            {status}
        
            <div className="container py-4">
                <div className="px-5 py-4 bg-dark introBox">
                    <div className="text-white text-justify m-0">
                        {desc}
                    </div>
                </div>
            </div>

            {ifBox()}

            {dwnld}
            {useful}
            {tuts}
            {misc}
            
        </div>
    </div>
    );
  }


export default general;