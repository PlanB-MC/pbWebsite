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
                <div className="alert alert-danger">
                    <strong><i class="fas fa-lock"></i> {status[0]}</strong> {status[1]}
                </div>
            </div>
        )
    }
  }

  content = () => {
    const url = window.location.pathname
    let trimedUrl = url.substring(8)
    let indexSlash = trimedUrl.indexOf("/")
    let questName = trimedUrl.substring(trimedUrl, ((indexSlash < 0) ? 100 : indexSlash))

    return (
        <div className="container">
        <div className="bg-dark text-light"> 
            URL: {url}<br/>
            Trimmed: {trimedUrl} <br/>
            indexSlash: {indexSlash} <br/>
            questName: {questName} <br/>
            questData: {questData[1]}
        </div>
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
            desc={questData.desc}
            misc={this.content()}
            status={this.questStatus(questData.status)}
        />
      )
  }
}

export default Quests;