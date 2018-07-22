
import React, { Component } from 'react';
import { apiCall } from "../../api";
import '../../Css/trophyHunter.css'

class Shulker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "shulkers": []
        }
    }
     
    componentDidMount() {
        apiCall("https://api.planb-mc.com/pbConfig.json").then(
            response => this.setState({ test: response, shulkers: response.pbShulker.shulkers})
        )
    }
    
    render() {
        return (
            <div className="container">
                <div className="row px-4">

                    <div className="col-md-6">
                        <div className='card text-center my-3 p-2 bg-whiteTrans'>
                            
                            <div className="px-3 pt-3">
                                <h2 className="memberTitle">Killed</h2>
                                <p className="text-dark">{this.state.shulkers.found}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className='card text-center my-3 p-2 bg-whiteTrans'>
                            
                            <div className="px-3 pt-3">
                                <h2 className="memberTitle">Remaining</h2>
                                <p className="text-dark">{(this.state.shulkers.need - this.state.shulkers.found).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </div>
                        </div>
                    </div>
                </div>  
                
            </div>
        )
      
    }
}
  
  export default Shulker;