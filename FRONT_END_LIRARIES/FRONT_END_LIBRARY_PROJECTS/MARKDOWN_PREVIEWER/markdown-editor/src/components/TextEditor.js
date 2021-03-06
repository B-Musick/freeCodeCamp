import React from 'react';


class TextEditor extends React.Component{
    state = {text: ""};

    // Code was lagging to print to screen so used async/ await
    handleChange = async e => {
        // This will take text in textarea and set it to the current state
        await this.setState({text: e.target.value });
        // Pass in the current textarea state to the App to be set to the
        // App's previewerString state
        this.props.onTextChange(this.state.text);
        console.log(this.state.text)

    }

    render(){
        return (
            <div>
                {/* textarea which takes input and handlechange will be called */}
                <textarea id="editor" onChange={this.handleChange}></textarea>
                
            </div>
            // Text editor  
        )
    }
}

export default TextEditor;