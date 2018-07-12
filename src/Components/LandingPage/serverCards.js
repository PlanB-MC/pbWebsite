import React from 'react';
import { Link } from "react-router-dom"; 
import data from '../../Configs/serverDetails.json';
import '../../Css/serverCards.css'

const Servers = () => {
    let keys = Object.keys(data)
    return (
        <div className="row mt-4">
            {keys.map(whichMenu)}
        </div>
    )
}

const whichMenu = (keys) => {
    const svr = data[keys]
    return (
        <div className="col-md-6" key={keys}>
            <div className="card text-center p-2 my-3">
                <img className="card-img-top img-fluid rounded" src={svr.image} alt={svr.name}/>
                <div className="card-body px-4 pt-3">
                    <h3 className="card-title mb-2 serverCardTitle">{svr.name}</h3>
                    <p className="card-text mb-4 text-muted text-justify sCardSubtitle">{svr.desc}</p>
                    <Link to={svr.infoLink} className="btn btn-outline-dark d-block">View </Link>
                </div>
            </div>
        </div>
    )
}
  
  export default Servers;