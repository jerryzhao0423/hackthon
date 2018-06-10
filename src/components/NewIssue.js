import React, {Component} from 'react'
import './NewIssue.css'
import Navbar from "./Navbar";
import Select from 'react-select'
import 'react-select/dist/react-select.css';


class NewIssue extends Component{
    constructor(props) {
        super(props);
        this.state={
            selectValue:1,
        }
    }
    render(){
        const {selectValue}=this.state;
        return(
            <div>
                <Navbar NIactive={'active'}/>
                <div className='ni-header'>New Issue</div>
                <div className='ni-body'>
                    <div>
                        <label className="ni-label">Category</label>
                        <Select className="ni-select" value={selectValue}
                                clearable={false} optionClassName="ni-option"
                                onChange={(e)=>{this.setState({ selectValue:e })}}
                                menuContainerStyle={{width:'110px'}}
                                options={[{ value: 1, label: 'Shelter' },
                                    { value: 2, label: '36' },
                                    { value: 3, label: '48' },
                                    { value: 4, label: '60' },
                                ]}/>
                    </div>
                    <div>
                        <label className="ni-label">Title</label>
                        <input className='ni-input' placeholder='Enter a title...'/>
                    </div>
                    <div><label className="ni-label">Pic</label><input type="file" accept="image/*"/></div>
                    <div>
                        <label className="ni-label">Description</label>
                        <textarea className='ni-textarea' placeholder='Enter a description...'/>
                    </div>
                    <button className="ni-button">Submit</button>
                </div>



            </div>
        )
    }
}

export default NewIssue