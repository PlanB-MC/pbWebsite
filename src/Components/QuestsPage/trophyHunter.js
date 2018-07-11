
import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
import { apiCall } from "../../api";
import '../../Css/trophyHunter.css'
import SearchBox from './searchBox';

class TrophyHunter extends Component {
    constructor(props) {
        super(props)
        this.state = {
          menuSelected: window.location.pathname.split("/quests/trophyhunter/"),
          blocks: [],
          searchfield: '',
          selectedOption: 'All',
          searboxSetting: ["Search Blocks and Items", "All", "Found", "Not Found"],
          sortOrder: 'A -> Z'
        }
    }
     
    componentDidMount() {
        apiCall("https://api.planb-mc.com/blockConfig.json").then(
          response => this.setState({ blocks: response.blocks, isPending: false })
        )
    }
    
    bCard = (a) => {
        
        const item = this.state.blocks[a]
        const image = 'https://api.planb-mc.com/blocks/' + item.name + '.png'

        if(this.state.selectedOption === "Found") {

        }
      
        return (
            <div className="col-md-4 my-2">
                <div className='card text-center my-3 trophyCard h-75'>
                    <div className="bPhoto"> 
                        <img alt={item.name} className="img-fluid" src={image} onError={(e)=>{e.target.src="https://api.planb-mc.com/blocks/default-image.jpg"}}/>
                        
                    </div>
                    
                    <div className="mt-4 mb-5">
                        <h2 className="itemTitle my-4">{item.name}</h2>
                    </div>
                    {this.isFound(item.found, item.player)}
                </div>
            </div>
        )
    }

    isFound = (found, player) => {
        if(found) {
            return (
                <p className="bg-success text-white p-2 itemFound"><strong className="pr-2">Found By:</strong> {player}</p>
            )
        }else {
            return (
                <p className="bg-danger text-white p-2 itemFound">Not Found</p>
            )
        }
    }

    sortMe = (item, list) => {
        if(this.state.sortOrder === "A -> Z"){
          item.sort(function(a, b){
            let x = list[a]["name"].toLowerCase();
            let y = list[b]["name"].toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
        } else if(this.state.sortOrder === "Z -> A") {
            item.sort(function(a, b){
                let x = list[a]["name"].toLowerCase();
                let y = list[b]["name"].toLowerCase();
              if (x < y) {return 1;}
              if (x > y) {return -1;}
              return 0;
            });
        }
      }

      a2z = () => {
        (this.state.sortOrder === "A -> Z" ? this.setState({ sortOrder: 'Z -> A'}) : this.setState({ sortOrder: "A -> Z"}) );
      }

      onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
      }
      radioChange = (event) => {
        this.setState({ selectedOption: event.target.value });
      }

      whatPage = (bKeys) => {
          switch (this.state.menuSelected) {
                case "blocktracker":
                    return (    
                        <div>
                            <button onClick={this.a2z}>{this.state.sortOrder}</button>
                            <SearchBox searchChange={this.onSearchChange} selectedOption={this.state.selectedOption} radioChange={this.radioChange} settings={this.state.searboxSetting}/>
                        
                            <div className="row ">
                                    {bKeys.map(this.bCard)}
                            </div>
                        </div>
                    )
                case "leaderboard":
                    return (    
                        <h1>Leaderboard</h1>
                    )
                default:
                    return (
                        <div>
                        <h1>Progress</h1>
                        </div>
                    )
            }
        }

    render() {
        const bKeys = Object.keys(this.state.blocks)
        this.sortMe(bKeys, this.state.blocks)
      return (

        <div className="container">
            <div className="py-2 mb-2 bg-dark introBox text-center">
                <Link className="btn btn-outline-warning m-2 px-5 py-2" to={"/quests/trophyhunter/progress"} onClick={() => this.setState({ menuSelected: 'progress'})}>Progress</Link>
                <Link className="btn btn-outline-warning m-2 px-5 py-2" to={"/quests/trophyhunter/blocktracker"} onClick={() => this.setState({ menuSelected: 'blocktracker'})}>Block Tracker</Link>
                <Link className="btn btn-outline-warning m-2 px-5 py-2" to={"/quests/trophyhunter/leaderboard"} onClick={() => this.setState({ menuSelected: 'leaderboard'})}>Leaderboard</Link>
            </div>
            {this.state.selectedOption}
            {this.whatPage(bKeys)}
            
    
            
        </div>)
      
    }
  }
  
  export default TrophyHunter;