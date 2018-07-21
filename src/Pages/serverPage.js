
import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
import '../Css/serverPage.css'
import data from '../Configs/serverDetails.json'
import tutData from '../Configs/tutorialData.json'
import General from '../Layouts/general'
import Commands from '../Components/ServerPage/usefulCommands'


class server extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commandMenu: "general",
        }
      }
   
    box1 = (featInfo, features, cmd) => {
        if(featInfo) {
            return (
                <div className="card p-4">
                    <h4 className="text-center text-warning">{featInfo[0]}</h4>
                    <h5 className="text-muted text-center">{featInfo[1]}</h5>
                    <p className="card-text text-muted text-justify px-3 pt-3">{featInfo[2]}</p>
                    {(features) ? <ul className="pl-5 pr-3 text-muted">{features.map(this.featList)}</ul> : <h5 className="text-center"><span className="badge badge-secondary p-2">{cmd}</span></h5>}
                </div>
            )
        }
    }

    featList = (feats, index) => {
        return (
            <li key={index}>{feats}</li>
        )
    }

    box2 = (startInfo, ip) => {
        if(startInfo) {
            return (
                <div className="card p-4">
                    <h4 className="text-center text-success">{startInfo[0]}</h4>
                    <h5 className="text-muted text-center">{startInfo[1]}</h5>
                    <p className="card-text text-muted text-justify px-3 pt-3">{startInfo[2]}</p>
                    <h5 className="text-center"><span className="badge badge-secondary p-2">{ip}</span></h5>
                    <p className="card-text text-muted text-justify px-3 pt-3">{startInfo[3]}</p>
            
                    {(ip === "modded.planb-mc.com" ? null : 
                        <div className="text-center">
                            <h5 className="text-center"><span className="badge badge-success mx-3 p-2 d-block">/server survival</span></h5>
                            <h5 className="text-center"><span className="badge badge-warning mx-3 p-2 d-block">/server creative</span></h5>
                            <h5 className="text-center"><span className="badge badge-primary mx-3 p-2 d-block">/server sky</span></h5>
                        </div>
                    )}
                </div>  
            )
        }
    }

    whatImage = (bgImage) => {
        if(bgImage) {
            if(bgImage.length > 1){
                let numb = Math.floor((Math.random() * bgImage.length) );
                return bgImage[numb]
            }else {
                return bgImage
            }
        }
    }

    hasDownloads = (downloads) => {
        if(downloads) {
            const dwlKeys = Object.keys(downloads)

            const downloadCard = (download, index) => {
                const dItem = downloads[download]
                return (
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" key={index}>
                        <div className="card text-center p-2 my-3">
                            <img className="card-img-top img-fluid rounded" src={dItem[2]} alt={dItem[0]}/>
                            <div className="card-body px-4 pt-3">
                                <h3 className="card-title mb-2 serverCardTitle">{dItem[0]}</h3>
                                <p className="card-text mb-5 text-muted sCardSubtitle">{dItem[3]}</p>
                                <a href={dItem[1]} className="btn btn-outline-dark d-block dwnload">Download</a>
                            </div>
                        </div>
                    </div>
                )
            }

            return (
                <div className="container">
                    <div className="py-4">
                    <div className="subHeading py-3">
                    <h1 className="text-center text-danger">Seasons</h1>
                    
                </div>
                        <div className="row">
                                {dwlKeys.map(downloadCard)}
                        </div>
                    </div>
                </div>
            )

        }
    }
   
    usefulCommands = (commands) => {
        if(commands) {
            return (
                <div className="container">
                    <div className="py-1">
                        <Commands command={commands} menu={this.state.commandMenu} menuChange={this.commandMenuChange}/>
                    </div>
                </div>
            )
        }
    }

    commandMenuChange = (event) => {
        this.setState({ commandMenu: event.target.value }) 
    }

    tuts = (tuts, server) => {
        if(tuts[server]){

            const tutCard = (keys) => {
                let tData = tuts[server][keys]
                return (
                    <div className="col-md-3" key={keys}>
                        <div className="card text-center p-1">
                            <img className="card-img-top" src={tData.image} alt={tData.name}/>
                            <div className="card-body p-4">
                                <h5 className="card-title mb-1">{tData.name}</h5>
                                <p className="card-text mb-3 text-justify"><small className="text-muted">{tData.desc.substring(0,64)}...</small></p>
                                <Link to={"/tutorials/" + server + "/" + keys} className="btn btn-outline-dark d-block">View </Link>
                            </div>
                        </div>
                    </div>
                )
            }

            let keys = Object.keys(tuts[server])
            console.log(keys)
            return (
                <div className="container py-4">
                    <div className="row">
                        {keys.map(tutCard)}
                    </div>
                </div>
            )
        }
    }

    status = (status) => {
        if(status) {
            return (
                <div className="container pt-5">
                    <div className="alert alert-danger">
                        <strong>{status[0]}</strong> {status[1]}
                    </div>
                </div>
            )
        }
    }

    render() {
        const url = window.location.pathname
        let trimedUrl = url.substring(8)
        let indexSlash = trimedUrl.indexOf("/")
        let serverName = trimedUrl.substring(trimedUrl, ((indexSlash < 0) ? 100 : indexSlash))

        const info = data[serverName]
        if(info){
            return (
                <div>
                    <General 
                        bgImage={this.whatImage(info.bgImage)} 
                        title={info.name} sTitle={info.subtitle} 
                        desc={info.desc} 
                        box1={this.box1(info.featInfo, info.features, info.discordCmd)} 
                        box2={this.box2(info.startInfo, info.ip)} 
                        dwnld={this.hasDownloads(info.seasons)}
                        useful={this.usefulCommands(info.commands)}
                        tuts={this.tuts(tutData, serverName)}
                        status={this.status(info.status)}
                    />  
                </div>
            )
        }else{
            return (
                <h1>Herobrine stole this server and its page!</h1>
            )
        }
    }
  }
  
  export default server;