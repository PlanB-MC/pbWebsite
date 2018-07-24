
import React, { Component } from 'react';
import { apiCall } from "../../api";
import '../../Css/trophyHunter.css'

class Strike extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "jump": [],
            "crouch": []
        }
    }
     
    componentDidMount() {
        apiCall("https://stats.planb-mc.com/survival/data/rankings/jump.json").then(
            response => this.setState({ jump: response.map(a => a.value)})
        )
        apiCall("https://stats.planb-mc.com/survival/data/rankings/crouch.json").then(
            response => this.setState({ crouch: response.map(a => a.value)})
        )
    }

    countJump = (jData) => {
        const jSum = jData.reduce((a, b) => a + b, 0)
        const jFormatted = jSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        return(
            jFormatted
        )
    }

    countCrouch = (cData) => {
        const cSum = cData.reduce((a, b) => a + b, 0)
        const meters = cSum / 100000
        return(
            meters
        )
    }
    
    render() {
        const jump = this.state.jump
        const crouch = this.countCrouch(this.state.crouch)
        return (
            <div className="container">
                <div className="row px-4">

                    <div className="col-md-6">
                        <div className='card text-center my-3 p-2 bg-whiteTrans'>
                            
                            <div className="px-3 pt-3">
                                <h2 className="memberTitle">Jumps</h2>
                                <p className="text-dark">{this.countJump(jump)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className='card text-center my-3 p-2 bg-whiteTrans'>
                            
                            <div className="px-3 pt-3">
                                <h2 className="memberTitle">Crouched</h2>
                                <p className="text-dark">{Math.round(crouch * 100) / 100} Km</p>
                            </div>
                        </div>
                    </div>
                    
                </div>  
            </div>
        )
      
    }
}
  
  export default Strike;