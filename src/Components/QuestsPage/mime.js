
import React, { Component } from 'react';
import { apiCall } from "../../api";
import '../../Css/trophyHunter.css'

class Mime extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "placed": []
        }
    }
     
    componentDidMount() {
        apiCall("https://api.planb-mc.com/pbConfig.json").then(
            response => this.setState({ test: response, placed: response.pbBarrier.amount, leaders: response.pbBarrier.players})
        )
    }

    sortPlayers = (obj) => {
        // convert object into array
        let sortable=[];
        for(let key in obj)
          if(obj.hasOwnProperty(key))
            sortable.push(obj[key]); // each item is an array in format [key, value]
      
        // sort items by value
        sortable.sort(function(a, b)
        {
          return b.score - a.score; // compare numbers
        });
        return this.leaderBoard(sortable); // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
    };
        

    leaderBoard = (sorted) => {
        return (
            sorted.map((item, i) => {
                let user = item
                return(
                    <div className="col-md-4" key={i}>
                        <div className='card text-center my-3 p-3 bg-whiteTrans'>
                            <div className="photo"> 
                                <img alt={user.name} className="img-fluid" src={"https://visage.surgeplay.com/head/250/" + user.uuid}/>
                            </div>
                            <div>
                                <h2 className="memberTitle">{user.name}</h2>
                                <p className="text-dark">Glass Placed: {user.score}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    
    render() {
        return (
            <div className="container">
                <div className="row px-4">

                    <div className="col-md-6">
                        <div className='card text-center my-3 p-2 bg-whiteTrans'>
                            
                            <div className="px-3 pt-3">
                                <h2 className="memberTitle">Placed</h2>
                                <p className="text-dark">{this.state.placed}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className='card text-center my-3 p-2 bg-whiteTrans'>
                            
                            <div className="px-3 pt-3">
                                <h2 className="memberTitle">Remaining</h2>
                                <p className="text-dark">{(100000 - this.state.placed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </div>
                        </div>
                    </div>
                    {this.sortPlayers(this.state.leaders)}
                </div>  
                
            </div>
        )
      
    }
}
  
  export default Mime;