

import React, { Component } from 'react';
import data from '../Configs/tutorialData.json'
import TutsLayout from '../Layouts/tutsLayout';

class Tutorial extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    pageType = (t) => {
        const url = this.props.location.pathname
        const urlTrim = url.slice(1, 200).replace(/\/$/, '') //If last char is / removed it
        const urlSegments = urlTrim.split("/")
        const serverName = urlSegments[1]
        const tutName = urlSegments[2]
        let hBrine = t["notfound"]
        let tut;
        switch (urlSegments.length) {
            case 1:
                return(
                    <TutsLayout
                        bgImage={"https://api.planb-mc.com/webImages/tuts/tuts.png"} 
                        title={"Complete"} 
                        sTitle={"Tutorial List"} 
                        desc={"You will find a collection of all tutorials for each server"}
                        allData={t}
                    /> 
                )
            case 2:
                tut = t[serverName]
                return(
                    <TutsLayout
                        bgImage={(tut ? "https://api.planb-mc.com/webImages/tuts/" + serverName + ".png" : hBrine.image)} 
                        title={(tut ? serverName : hBrine.nameServ)} 
                        sTitle={(tut ? "Tutorial List" : hBrine.sub)} 
                        desc={(tut ? "You will find a collection of all tutorials for " + serverName + " server" : hBrine.desc)}
                        tutData={tut}
                        allData={(tut ? null : t)}
                    />
                )
            default:
                let foundStatus = "ok";
                if(t[serverName]) { 
                    (t[serverName][tutName] !== undefined
                        ? (tut = t[serverName][tutName], foundStatus = "ok") 
                        : (tut = t["notfound"], foundStatus = "noTut") 
                    )
                }else { 
                    (tut = t["notfound"], foundStatus = "noServer")
                }

                return(
                    <TutsLayout
                        bgImage={tut.image} 
                        title={(foundStatus === "noServer" ? tut.nameServ : tut.name)}
                        sTitle={tut.sub} 
                        desc={(foundStatus === "noServer" ? tut.descServ : tut.desc)} 
                        yt={tut.youtube}
                        steps={tut.steps}
                        uInfo={tut.useful}
                        allData={(foundStatus === "noServer" ? t : null)}
                        tutData={(foundStatus === "noTut" ? t[serverName] : null)}
                        
                    /> 
                )
        }

    }

    render() {
        return (
            this.pageType(data)
        )
    }
  }
  
  export default Tutorial;