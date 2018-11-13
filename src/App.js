import React, {Component} from 'react'
import Map from "./components/Map";
import Navbar from "./components/Navbar";


class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Map/>
            </div>
        )
    }
}

export default App