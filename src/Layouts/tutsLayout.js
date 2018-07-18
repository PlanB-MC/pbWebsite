import React from 'react';
import { Link } from "react-router-dom"; 
import '../Css/tutsLayout.css'

const TutsLayout = ({title, sTitle, desc, bgImage, yt, steps, uInfo, tutData, allData}) => {

    const hasYoutube = (yt) => {
        if(yt) {
            return (
                <div className="container">
                    <div className="flexBox">
                        <div className="card bg-white p-4 text-center">
                            <div className="embed-responsive embed-responsive-21by9 ">
                                <iframe src={yt} title={yt} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const hasBoxes = (steps, uInfo) => {
        if(steps || uInfo) {
            return (
                <div className="container py-4 tutsFlex">
                    <div className="row">
                        <div className="card-deck">
  
                            <div className="card bg-dark pt-4 px-4">
                                {steps ? hasSteps(steps) : ''}
                            </div>
  
                            <div className="card p-4">
                                {uInfo ? hasUseful(uInfo) : <p className="pt-3 text-center">There are currently no useful links to be listed. Suggestions are welcome!</p>}
                            </div>
  
                        </div>
                    </div>
                </div>
            )
        }
    }

    const hasSteps = (steps) => {
        if(steps) {
            return (
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {steps.map(renderIndicators)}
                    </ol>
      
                    <div className="carousel-inner">
                        {steps.map(returnImages)}
                    </div>
                
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            )
        }
    }

    const renderIndicators = (data, index) => {
        return (
            <li data-target="#carouselExampleIndicators" data-slide-to={index} className={(index === 0 ? "active" : "")} key={index}></li>
        )
    }

    const returnImages = (returnImage, index) => {
        return (
            <div className={"carousel-item " + (index === 0 ? "active" : "")} key={index}>
                <img src={returnImage[0]} alt="..." className="img-fluid"/>
                <div className="carousel-caption">
                    <h5>{returnImage[1]}</h5>
                    <p>{returnImage[2]}</p>
                </div>
            </div>
        )
    }

    const hasUseful = (useful) => {
        if(useful) {
            return (
                <div className="flexBox">
                    <h4 className="text-center text-danger">Useful Info</h4>
                    <hr/>
                    {useful.map(returnUseful)}
                </div>
            )
        }
    }
      
    const returnUseful = (useful, iKey) => {
        if(useful.toString().includes("http")){
            return <li key={iKey}><a href={useful[0]} className="text-primary">{useful[1]}</a></li>
        } else{
            return (
                <li key={iKey}>
                    {useful}
                </li>
            )
        }
    }

    const isServPage = (data) => {
        const sKeys = Object.keys(data)
        return (
            <div className="container">
                <div className="row">
                    {sKeys.map(tutCards)}
                </div>
            </div>
        )
    }

    const tutCards = (tuts, iKey) => {
        let tut = tutData[tuts]
        return (
            <div className="col-md-4" key={iKey}>
                <div className="card text-center p-1">
                    <img className="card-img-top" src={tut.image} alt={tut.name}/>
                    <div className="card-body p-4">
                        <h5 className="card-title mb-1">{tut.name.toUpperCase()}</h5>
                        <p className="card-text mb-3"><small className="text-muted">{tut.desc.substring(0, 100) + '...'}</small></p>
                        <Link to={'/tutorials/' + title + "/" + tuts} className="btn btn-outline-dark d-block">View </Link>
                    </div>
                </div>
            </div>
        )
    }

    const isAllTuts = (data) => {
        const aKeys = Object.keys(data)
        return (
            <div className="container">
                <div className="row">
                    {aKeys.map(serverSections)}
                </div>
            </div>
        )

    }

    let currentServer;
    const serverSections = (server, iKey) => {
        const STutsKeys = Object.keys(allData[server])
        currentServer = server
        let exclude = ["notfound", "allTuts", "serverTuts"]

        if (exclude.indexOf(server) === -1) {
        return (
            <div className="col-sm-12 p-4 mb-3" key={iKey}>
                <h2 className="text-white pb-4 text-center">{server.toUpperCase()}</h2>
                <div className="row">
                    {STutsKeys.map(serverCards.bind(server))}
                </div>
            </div>
        )}
    }

    const serverCards = (tuts, iKey) => {
        let tut = allData[currentServer][tuts]
        return (
            <div className="col-md-4" key={iKey}>
                <div className="card text-center p-1">
                    <img className="card-img-top" src={tut.image} alt={tut.name}/>
                    <div className="card-body p-4">
                        <h5 className="card-title mb-1">{tut.name.toUpperCase()}</h5>
                        <p className="card-text mb-3"><small className="text-muted">{tut.desc.substring(0, 100) + '...'}</small></p>
                        <Link to={'/tutorials/' + currentServer + "/" + tuts} className="btn btn-outline-dark d-block">View </Link>
                    </div>
                </div>
            </div>
        )
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
        
                <div className="container py-4">
                    <div className="px-5 py-4 bg-dark introBox">
                        <div className="text-white text-justify m-0 text-center">
                            {desc}
                        </div>
                    </div>
                </div>

                {hasYoutube(yt)}

                {hasBoxes(steps, uInfo)}

                {(tutData ? isServPage(tutData) : null)}

                {allData ? isAllTuts(allData) : null}


                
            
            </div>
        </div>
    );
  }


export default TutsLayout;