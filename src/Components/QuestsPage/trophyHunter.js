
import React, { Component } from 'react';
import { NavLink } from "react-router-dom"; 
import { apiCall } from "../../api";
import '../../Css/trophyHunter.css'
import SearchBox from './searchBox';


class TrophyHunter extends Component {
    constructor(props) {
        super(props)
        this.state = {
          menuSelected: window.location.pathname.slice(21, 100),
          blocks: [],
          searchfield: '',
          selectedOption: 'All',
          searboxSetting: ["Search Blocks and Items", "All", "Found", "Not Found"],
          sortOrder: 'A -> Z',
          leaders: '',
          blockProg: []
        }
    }
     
    componentDidMount() {
        apiCall("https://api.planb-mc.com/blockConfig.json").then(
          response => this.setState({ blocks: response.blocks, leaders: response.players, blockProg: [ response.data.blockListSize, response.data.blocksFound, response.data.blockListSize - response.data.blocksFound] })
        )
        apiCall("https://api.planb-mc.com/whitelist.json").then(
        response => this.setState({ member: response, isPending: false })
        )
    }
    
    bCard = (bKeys) => {
        console.log(bKeys)
        let sOption = (items) => {
            switch (this.state.selectedOption) {
                case "Found":
                    return items.found
                case "Not Found":
                    return !items.found
            
                default:
                    return true
            }
        }
        

        
            return (
                <div className="row pt-5">
                    { 
                        bKeys.map((item, i) => {
                            const items = this.state.blocks[item]
                            // console.log(items)
                            if(sOption(items) && items.name.toLowerCase().includes(this.state.searchfield.toLowerCase())){
                                return (
                                    <div key={i} className="col-md-4 my-2">
                                        <div className='card text-center my-3 trophyCard h-75 bg-whiteTrans'>
                                            <div className="bPhoto"> 
                                                <img alt={items.name} className="img-fluid" src={'https://api.planb-mc.com/blocks/' + items.name + '.png'} onError={(e)=>{e.target.src="https://api.planb-mc.com/blocks/default-image.jpg"}}/>
                                            </div>
                                            
                                            <div className="mt-4 mb-5">
                                                <h2 className="itemTitle my-4">{items.name}</h2>
                                            </div>
                                            {this.isFound(items.found, items.player)}
                                        </div>
                                    </div>  
                                )} else return ""
                        })
                    }
                </div>
            );
        
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

    sortPlayers = (obj) => {
        // convert object into array
        let sortable=[];
        for(let key in obj)
          if(obj.hasOwnProperty(key))
            sortable.push(obj[key]); // each item is an array in format [key, value]
      
        // sort items by value
        sortable.sort(function(a, b)
        {
          return b.found - a.found; // compare numbers
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
                                <p className="text-dark">Items Found: {user.found}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    whatPage = (bKeys, state, bProg) => {
        switch (state) {
            case "blocktracker":
                return (    
                    <div>                
                        {this.bCard(bKeys)}
                    </div>
                )
            case "leaderboard":
                return (    
                    <div className="px-4">
                        <div className="row">
                            {this.sortPlayers(this.state.leaders)}
                        </div>
                    </div>
                )
            default:
                return (
                    <div className="row px-4">
                        <div className="col-md-4">
                            <div className='card text-center my-3 p-2 bg-whiteTrans'>
                                <div className="photo"> 
                                    <img alt="Total Items" className="img-fluid" src={"https://api.planb-mc.com/webImages/quests/th/blocksTotal.png"}/>
                                </div>
                                <div className="px-3 pt-3">
                                    <h2 className="memberTitle">Total</h2>
                                    <p className="text-dark">{bProg[0]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='card text-center my-3 p-2 bg-whiteTrans'>
                                <div className="photo"> 
                                    <img alt="Found Items" className="img-fluid" src={"https://api.planb-mc.com/webImages/quests/th/blocksFound.png"}/>
                                </div>
                                <div className="px-3 pt-3">
                                    <h2 className="memberTitle">Found</h2>
                                    <p className="text-dark">{bProg[1]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='card text-center my-3 p-2 bg-whiteTrans'>
                                <div className="photo"> 
                                    <img alt="Needed Items" className="img-fluid" src={"https://api.planb-mc.com/webImages/quests/th/blocksNeeded.png"}/>
                                </div>
                                <div className="px-3 pt-3">
                                    <h2 className="memberTitle">Not Found</h2>
                                    <p className="text-dark">{bProg[2]}</p>
                                </div>
                            </div>
                        </div>
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
                <div className="row">
                    <div className="col-sm-12">
                        <NavLink className="btn btn-outline-warning m-2 px-5 py-2 w-25" activeClassName="active" to={"/quests/trophyhunter/progress"} onClick={() => this.setState({ menuSelected: 'progress'})}>Progress</NavLink>
                        <NavLink className="btn btn-outline-warning m-2 px-5 py-2 w-25" activeClassName="active" to={"/quests/trophyhunter/blocktracker"} onClick={() => this.setState({ menuSelected: 'blocktracker'})}>Block Tracker</NavLink>
                        <NavLink className="btn btn-outline-warning m-2 px-5 py-2 w-25" activeClassName="active" to={"/quests/trophyhunter/leaderboard"} onClick={() => this.setState({ menuSelected: 'leaderboard'})}>Leaderboard</NavLink>
                    </div>
                    <div className="col-sm-12">
                        {(this.state.menuSelected === "blocktracker") ? <SearchBox searchChange={this.onSearchChange} selectedOption={this.state.selectedOption} radioChange={this.radioChange} settings={this.state.searboxSetting} sortOrder={this.state.sortOrder} a2z={this.a2z}/> : ""}
                    </div>
                </div>
            </div>

            {this.whatPage(bKeys, this.state.menuSelected, this.state.blockProg)}
            
        </div>)
      
    }
  }
  
  export default TrophyHunter;