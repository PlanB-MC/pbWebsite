
import React, { Component } from 'react';
import { NavLink } from "react-router-dom"; 
import { apiCall } from "../../api";
import '../../Css/trophyHunter.css'
import SearchBox from './searchBox';


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
        const jSum = jData.reduce((a, b) => a + b, 0).toString()
        const jFormatted = jSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        return(
            jFormatted
        )
    }

    countCrouch = (cData) => {
        const cSum = cData.reduce((a, b) => a + b, 0).toString()
        const cFormatted = cSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "m"
        return(
            cFormatted
        )
    }
    
    render() {
        const jump = this.state.jump
        const crouch = this.state.crouch
        return (
            <div className="container">
                <div className="row px-4">

                    <div className="col-md-6">
                        <div className='card text-center my-3 p-2 bg-whiteTrans'>
                            <div className="photo"> 
                                <img alt="Jumps" className="img-fluid" src={"https://gooperhermetic.com/wp-content/uploads/2017/05/pojo-placeholder-4-1024x768.png"}/>
                            </div>
                            <div className="px-3 pt-3">
                                <h2 className="memberTitle">Jumps</h2>
                                <p className="text-dark">{this.countJump(jump)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className='card text-center my-3 p-2 bg-whiteTrans'>
                            <div className="photo"> 
                                <img alt="Crouches" className="img-fluid" src={"https://gooperhermetic.com/wp-content/uploads/2017/05/pojo-placeholder-4-1024x768.png"}/>
                            </div>
                            <div className="px-3 pt-3">
                                <h2 className="memberTitle">Crouches</h2>
                                <p className="text-dark">{this.countCrouch(crouch)}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>  
            </div>
        )
      
    }
}
  
  export default Strike;