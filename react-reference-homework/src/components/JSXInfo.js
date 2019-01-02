import React, { Component } from 'react';

class JSXInfo extends Component {

    render() { 

        return(
            <div className="jsxInfo">
            <h3>JSXInfo</h3>
            <p>JSX stands for Javascript and XML and it is a syntax extension to JavaScript. It basically allows us to use HTML and JS in the same file. Babel is used to transpile the seemingly looking HTML to javascript that creates the elements and appends them to the DOM.</p>
            </div>
        )
    }
}

export default JSXInfo;