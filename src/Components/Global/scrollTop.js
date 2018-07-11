import { Component } from 'react'
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      if(this.props.location.pathname.includes("trophyhunter/")){
        return null
      }else if (this.props.location !== prevProps.location && "/quests/trophyhunter/progress") {
        window.scrollTo(0, 0)
      }
    }
  
    render() {
      return this.props.children
    }
  }
  
  export default withRouter(ScrollToTop)