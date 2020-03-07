import React, { Component } from 'react';
import { apiCall } from "../api";
import General from '../Layouts/general'
import MemberSearch from '../Components/MemberPage/memberSearch';
import MemberCards from '../Components/MemberPage/memberCards' 


class Member extends Component {
  constructor(props) {
    super(props)
    this.state = {
      member: [],
      searchfield: '',
      selectedOption: 'All',
      searboxSetting: ["Search Players", "All", "Members", "Staff"],
      admin: ["Mattchow", "Zerolarity", "Xantev", "BrizzleMFD", "Mystic_Nick", "_chix", "Coltrain", "fantasyspices"],
      dev: ["Valicious15"]
    }
  }
  

  componentDidMount() {
    apiCall("https://api.planb-mc.com/whitelist.json").then(
      response => this.setState({ member: response, isPending: false })
    )
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    
  }
  radioChange = (event) => {
    this.setState({ selectedOption: event.target.value });
    
  }

  searchBar = () => {
      return (
        <MemberSearch searchChange={this.onSearchChange} selectedOption={this.state.selectedOption} radioChange={this.radioChange} settings={this.state.searboxSetting} />
      )
  }

  memberCards = () => {
    const { member, searchfield } = this.state;
    const filteredMembers = member.filter(member =>{
      return member.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
        <div className="container">
        <MemberCards member={filteredMembers} rankFilter={this.state.selectedOption} admin={this.state.admin} dev={this.state.dev} sort={this.sortMe} />
        </div>
    )
  }

  sortMe = (event) => {
    event.sort(function(a, b){
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
  });
  }


  render() {
      return(
        <General 
            bgImage={"https://api.planb-mc.com/webImages/about1.png"} 
            title={"Members"}
            desc={this.searchBar()}
            misc={this.memberCards()}
        />
      )
  }
}

export default Member;
