import React, { Component } from 'react';
import General from '../Layouts/general'
import data from '../Configs/pageData.json'


class About extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

    whatImage = () => {
        const bgImage = data.about.bgImage
        let numb = Math.floor((Math.random() * bgImage.length) );
        if(bgImage.length > 1){
            return bgImage[numb]
        }else {
            return bgImage
        }
    }

    box1 = () => {
        return (
            <div className="card p-4">
                <h4 className="text-center text-warning">Performance & Stability</h4>
                <h5 className="text-muted text-center">Are important to us!</h5>
                <p className="card-text text-muted text-justify px-3 pt-3">Any old host, wont do! During the first few months of PlanB, we quickly found how over-sold, poorly maintained and unstable alot of the Minecraft server hosting companies are. This promptly led us to invest in our own premium dedicated server, located in a state of the art datacentre in France</p>
                <h6 className="text-muted px-3 pt-3"><strong>Each server on PlanB, benefits from:</strong></h6>
                <ul className="text-muted">
                    <li>A healthy allocation of RAM, SSD and CPU</li>
                    <li>Regularly updated Minecraft builds (server Jars)</li>
                    <li>Stable and quality plugins</li>
                    <li>Regular restarts for stability</li>
                    <li>Saves backed-up regularly</li>
                    <li>Carefully monitored and maintained</li>
                </ul>
            </div>
        )
    }

    box2 = () => {
        return (
            <div className="card p-4">
                <h4 className="text-center text-success">Joining PlanB</h4>
                <h5 className="text-muted text-center">We're always recruiting!</h5>
                <p className="card-text text-muted text-justify px-3 pt-3">If you would like to join the community, please fill out our application form on your platform of choice:</p>
                
                <div className="row px-3 py-4">
                    <div className="col-md-12 pb-3">
                        <a href="https://www.minecraftforum.net/forums/servers-java-edition/pc-servers/2906931-planb-vanilla-1-13-server-smp-whitelisted-new">
                            <img href="https://test.com" className="img-fluid" src={require('../Images/mcf.png')} alt="MCF"/>
                        </a>
                    </div>

                    <div className="col-md-12 pt-3">
                        <a href="https://www.reddit.com/user/MC_PlanB">
                            <img className="img-fluid" src={require('../Images/reddit.png')} alt="Reddit"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    
  render() {
      const info = data.about
    return (
        <div>
            <General title={info.title} sTitle={info.subtitle} desc={info.desc} bgImage={this.whatImage()} box1={this.box1()} box2={this.box2()}/>  
        </div>
    )



  }
}

export default About;