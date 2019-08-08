import React from 'react';

class Break extends React.Component{
    state={}
    onBreakIncrement =()=>{
        // Called when 'break-increment' button pressed, will call the method which
        // was received from the App component
        this.props.onBreakIncrement();
    }
    onBreakDecrement = () => {
        // Called when 'break-decrement' button pressed, will call the method which
        // was received from the App component
        this.props.onBreakDecrement();
    }
    render(){
        return (
            <div>
                <h3 id="break-label">BREAK</h3>
                {/* Display current break state */}
                <div>{this.props.break}</div> 
                {/* Buttons to increment and decrement the break state value in App */}
                <button id="break-increment" onClick={this.onBreakIncrement}>Increment</button>
                <button id="break-decrement" onClick={this.onBreakDecrement}>Decrement</button>

            </div>
        )
    }

}

export default Break;