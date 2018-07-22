import React, { Component } from 'react';
import { apiCall } from "../api";
import General from '../Layouts/general'
import '../Css/questPage.css'
import pageData from '../Configs/questData.json'
import TrophyHunter from '../Components/QuestsPage/trophyHunter';
import Strike from '../Components/QuestsPage/strike'
import QuestIntro from '../Components/QuestsPage/questIntro';
import Cure from '../Components/QuestsPage/cure';
import Mime from '../Components/QuestsPage/mime';

let questData = [];
let questName;

class Quests extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  

  componentDidMount() {
    apiCall("https://api.planb-mc.com/whitelist.json").then(
      response => this.setState({ member: response, isPending: false })
    )
  }

  whatQuest = () => {
    const url = window.location.pathname
    let trimedUrl = url.substring(8)
    let indexSlash = trimedUrl.indexOf("/")
    questName = trimedUrl.substring(trimedUrl, ((indexSlash < 0) ? 100 : indexSlash))
    
    if(questName === ''){
        questData = pageData['questIntro']
    }else {
        questData = pageData[questName]
    }
  }

  questStatus = (status) => {
    if(status) {
        return (
            <div className="container pt-5">
                <div className={"alert alert-" + status[0]}>
                    <strong className="pr-4"><i className={status[1]}></i> {status[2]}</strong> {status[3]}
                </div>
            </div>
        )
    }
  }

  questDesc = () => {
        return (
            <div className="row">
                <div className="col-md-6">
                    <strong className="pr-4">Aim:</strong>{questData.aim}
                </div>
                <div className="col-md-6">
                    <strong className="pr-4">Reward: </strong>{questData.reward}
                </div>
                <div className="col-md-12">
                    <hr className="bg-white"/>
                    {questData.desc}
                </div>
            </div>
        )
  }

  content = () => {
    switch (questName) {
        case 'trophyhunter':
            return (
                <TrophyHunter />
            )
        case 'strikeapose':
            return (
                <Strike />
            )
        case 'cureformadness':
            return (
                <Cure />
            )
        case 'mimeartist':
            return (
                <Mime />
            )
        case '':
            let qKeys = Object.keys(pageData)
            return (
                <div className="container-fluid">
                    <div className="row px-4">
                        <div className="card-deck">
                            {qKeys.map(a =>
                                (a !== 'questIntro' ? <QuestIntro a={a} pageData={pageData} /> : null )  
                            )}
                        </div>
                    </div>
                </div>
            )
      
          default:
              break;
      }
    
  }



  render() {
      this.whatQuest()
      return(
        <General 
            bgImage={questData.bgImage} 
            title={"Survival Quests"}
            sTitle={questData.title}
            desc={(questName === '' ? questData.desc : this.questDesc())}
            misc={this.content(this.whatQuest())}
            status={this.questStatus(questData.status)}
        />
      )
  }
}

export default Quests;