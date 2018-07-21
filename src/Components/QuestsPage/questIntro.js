
import React from 'react';
import { Link } from "react-router-dom"; 
import '../../Css/questIntro.css'

const QuestIntro = ({ a, pageData  }) => {

    const questStatus = (status) => {
        if(status) {
            return (
                <h5 className="qiStatus">
                    <span className={" py-1  badge badge-" + status[0]}>
                        <strong><i className={status[1]}></i> {status[2]}</strong>
                    </span>
                </h5>
            )
        }
    }

    let quest = pageData[a]
    return (
        <div className="col-md-4 d-flex align-items-stretch">
            <div class="card text-center my-3 p-2 bg-whiteTrans">
                {questStatus(quest.status)}
                <img class="card-img-top" src={quest.bgImage} alt={quest.title} />
                <h5 class="card-title memberTitle mt-2 mb-1">{quest.title}</h5>
                <div class="card-body py-0 mb-2 text-justify">
                    <p class="card-text">{quest.desc.slice(0,100)}...</p>
                </div>
                <div class="card-footer qiFooter">
                    <Link to={'/quests/' + a} className="btn btn-outline-dark d-block">View Quest</Link>
                </div>
            </div>
        </div> 
    )
}
  
export default QuestIntro;