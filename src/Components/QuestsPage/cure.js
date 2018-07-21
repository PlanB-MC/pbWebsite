
import React, { Component } from 'react';
import { apiCall } from "../../api";
import '../../Css/trophyHunter.css'

class Cure extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "horse": []
        }
    }
     
    componentDidMount() {
        apiCall("https://stats.planb-mc.com/survival/data/rankings/kill_horse.json").then(
            response => this.setState({ horse: response.map(a => a.value)})
        )
    }

    countDeadHorses = (hData) => {
        const hSum = hData.reduce((a, b) => a + b, 0).toString()
        const hFormatted = hSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        return(
            hFormatted
        )
    }
    
    render() {
        const horse = this.state.horse
        return (
            <div className="container">
                <div className="row px-4">

                    <div className="col-md-6">
                        <div className='card text-center my-3 p-2 bg-whiteTrans'>
                            
                            <div className="px-3 pt-3">
                                <h2 className="memberTitle">Horses Killed</h2>
                                <p className="text-dark">{this.countDeadHorses(horse)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className='card text-center my-3 p-2 bg-whiteTrans'>
                            
                            <div className="px-3 pt-3">
                                <h2 className="memberTitle">Remaining</h2>
                                <p className="text-dark">{(100 - horse)}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>  
            </div>
        )
      
    }
}
  
  export default Cure;