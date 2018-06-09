import React, {Component} from 'react'
import Navbar from "./Navbar";


class IssueList extends Component{
    render(){
        return(
            <div>
                <Navbar ILactive={'active'}/>
            </div>
        )
    }
}

export default IssueList