import React, { Component } from 'react';
import { apiCall } from "../api";
import General from '../Layouts/general'
import pageData from '../Configs/pageData.json'

let questData = []

class Quests extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageData: [""],
      searchfield: '',
      selectedOption: 'All',
      searboxSetting: ["Search Players", "All", "Members", "Staff"],
      admin: ["Mattchow", "Zerolarity", "Xantev", "BrizzleMFD", "Mystic_Nick"],
      dev: ["Valicious15"]
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
    let questName = trimedUrl.substring(trimedUrl, ((indexSlash < 0) ? 100 : indexSlash))
    
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
                    <strong className="pr-4"><i class={status[1]}></i> {status[2]}</strong> {status[3]}
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
    return (
        <div className="container py-4">
            
        </div>
    )
  }



  render() {
      this.whatQuest()
      return(
        <General 
            bgImage={questData.bgImage} 
            title={"Survival Quests"}
            sTitle={questData.title}
            desc={(questData.title === 'Introduction' ? questData.desc : this.questDesc())}
            misc={this.content()}
            status={this.questStatus(questData.status)}
        />
      )
  }
}

export default Quests;