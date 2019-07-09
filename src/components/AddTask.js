import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    state = {  
        text: '',
        checked: false,
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
        checked: e.target.checked
        })
    }
    
    handleClick = () => {
        const {text, checked} = this.state;
        if (text.length<3){
            alert('Please input at least 3 characters.')
        }else{
        const add = this.props.add(text, checked);

        if(add){
            this.setState({
                text: '',
                checked: false,
            })
        }
    }
    }

    render() { 
              
        return (
            <div className="form">
                <div className="input-div">
                    <input className="input-box" type="text" placeholder="Input element to be purchased" value={this.state.text} onChange={this.handleText}/>
                    <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox}/>
                    <label htmlFor="important"></label>
                    <button class="button-to-add-element" onClick={this.handleClick}>Add</button>
            </div>
                <br/>
                
            </div>
          );
    }
}
 
export default AddTask;
