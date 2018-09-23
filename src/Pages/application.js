import React, { Component } from 'react';
import General from '../Layouts/general'
import axios from 'axios';
import '../Css/apply.css'


class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: "",
        ign: "steve",
        age: '',
        timezone: "",
        gender: ""
     }
  }

   onChange = (e) => {
       console.log(e.target.id, e.target.value, e.target.type)
    // If other option is chosen ask for more info
    switch (e.target.value) {
        case "friend":{
            this.userInput(e.target.id, e.target.value, "Please enter your friends IGN")
            break;
        }
        case "other":{
            this.userInput(e.target.id, e.target.value, "Please enter your answer")
            break;
        }
        default:
            this.setState({ [e.target.id]: e.target.value });
            break;
    }
   }

   userInput = (id, value, msg) => {
      

       const uInput = prompt(msg, "");
        const eleID = document.getElementById(id);
        const option = document.createElement("option");
        option.text = `${value} - ${uInput}`;
        eleID.add(option);
        document.getElementById(id).value=`${value} - ${uInput}`
        
        this.setState({ [id]: uInput })

   }
   
   sendHook = () => {
    const hookID = "https://discordapp.com/api/webhooks/492301887605964811/sLT1VH2weMUgSvxNU9idT46yjl4GCtJBi07egj9gmtS-jOWVJqbKOKhj90vYC4t2L5a3"
    const { name, ign, age, timezone, gender } = this.state;
    axios.post(hookID, {  
        
        "embeds": [{
            "title": `New Application from: **${ign}**`,
            "description": "about",
            "color": 1127128,
            "thumbnail": {
                "url": `https://minotar.net/armor/bust/${ign}/100.png`
            },
            "fields": [{
                    "name": "Prefered Name",
                    "value": name,
                    "inline": true
                },
                {
                    "name": "Age",
                    "value": age,
                    "inline": true
                },
                {
                    "name": "Timezone",
                    "value": timezone,
                    "inline": true
                },
                {
                    "name": "Gender",
                    "value": gender,
                    "inline": true
                },
                {
                    "name": "Refered By:",
                    "value": "refered",
                    "inline": true
                }
            ]
        }]
    
         })
        .then((result) => {
            if(result.status === 204) alert("Awesome, your app was sent")
            console.log("RESULT", result.status)
          })
          .catch((err) => {
            alert("An error was detected, please ensure all fields are complete")
            console.log("err", err)
          });
   
   }
    
  render() {
      
    return (
        <div>
            <General title={"Application"} sTitle={"Join Today"} desc={"abc"} bgImage={"https:///api.planb-mc.com/webImages/apply1.png"} 
            misc={
                <div class="container applyForm">
                    <div class="card bg-whiteTrans applybord">
                    <img id="avatar" class="avatar bg-whiteTrans" src={`https://minotar.net/helm/` + this.state.ign} alt="avat"/>
                        <div class="card-body afterav">
          
                          
                            <h2 id="who_message" class="card-title">Who are you ?</h2>
          
                            <div class="row ">
                                <div class="form-group col-md-4">
                                    <input id="name" type="text" class="form-control" placeholder="Name" onChange={this.onChange}/>
                                    <div id="name_feedback" class="invalid-feedback">
        
                                    </div>
                                </div>
                                <div class="form-group col-md-4">
                                    <input id="ign" type="text" class="form-control" placeholder="IGN" onChange={this.onChange}/>
                                    <div id="ign_feedback" class="invalid-feedback">
        
                                    </div>
                                </div>
                                <div class="form-group col-md-4">
                                    <select id="age" class="form-control" onChange={this.onChange}>
                                    <option value="" disabled selected>Select your age group</option>
                                        <option value="16-18">16 - 18</option>
                                        <option value="19-21">19 - 21</option>
                                        <option value="22-25">22 - 25</option>
                                        <option value="26-38">26 - 30</option>
                                        <option value="30+">30+</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <input id="timezone" type="text" class="form-control" placeholder="Country/Time-zone" onChange={this.onChange}/>
                                    <div id="timezone_feedback" class="invalid-feedback">
        
                                    </div>
                                </div>
                                <div class="form-group col-md-4">
                                    
                                   <select id="refered" class="form-control" onChange={this.onChange}>
                                        <option value="" disabled selected>How did you hear about us?</option>
                                        <option value="Reddit">Reddit</option>
                                        <option value="MCF">Minecraft Forum</option>
                                        <option value="friend">Friend</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-4">
                                    <select id="gender" class="form-control" onChange={this.onChange}>
                                        <option value="" disabled selected>Select your gender</option>
                                        <option value="Non Binary">Non Binary</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12">
                                        <textarea id="about" type="textarea" rows="3" class="form-control" placeholder="Tell us a little about yourself"></textarea>
                                        <div id="about_feedback" class="invalid-feedback">
            
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div class="row my-3">
                        <div class="col-md-6">
                            <div class="card bg-whiteTrans">
                                <div class="card-body">
                                    <h2 class="card-title text-center text-danger">You and Minecraft!</h2>
                                    <div class="form-group">
                                        <label for="startMC" class="col-form-label">When did you start playing MC?</label>
                                        <select id="startMC" class="form-control" onChange={this.onChange}>
                                            <option value="" disabled selected>Select version</option>
                                            <option value="1.0 - 1.7">1.0 - 1.7</option>
                                            <option value="1.8 - 1.10">1.8 - 1.10</option>
                                            <option value="1.11">1.11</option>
                                            <option value="1.12">1.12</option>
                                            <option value="1.13">1.13</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="fav" class="col-form-label">What are your favorite things to do in
                                            Minecraft?</label>
                                            <input type="checkbox" name="vehicle" value="Car"/> I have a car
                                        <input type="text" class="form-control" id="fav" placeholder="dig big holes" required/>
                                        <div class="fav-feedback">
        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div class="col-md-6">
                            <div class="card bg-whiteTrans">
                                <div class="card-body">
                                    <h2 class="card-title text-center">You and Us!</h2>
                                    <div class="form-group">
                                        <label for="password" class="col-form-label">What do you want from a server and it's
                                            community?</label>
                                        <input type="password" class="form-control" id="password" placeholder="Friendly atmosphere" required/>
                                        <div class="password-feedback">
        
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="password_conf" class="col-form-label">What drew you to our community</label>
                                        <input type="password" class="form-control" id="password_conf" placeholder="Explain what you like about us?"
                                            required/>
                                        <div class="password_conf-feedback">
        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-3">
                        <button onClick={this.sendHook} type="button" class="btn btn-primary btn-lg btn-block">Sign up !</button>
        
                    </div>

            </div>
            } 
            />  
        </div>
    )



  }
}

export default About;