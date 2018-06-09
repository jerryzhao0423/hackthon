import React, {Component} from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component{
    render(){
        const {NIactive, ILactive}=this.props;
        return(
            <div className='nav-bar'>
                <ul className='nav-list'>
                    <li className='nav-item'>Login</li>
                    <li className={cx("nav-item", NIactive)}>
                        <Link to='/new-issue' className="nav-link">New Issue</Link>
                    </li>
                    <li className={cx("nav-item", ILactive)}>
                        <Link to='/issue-list' className="nav-link">Issue List</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar