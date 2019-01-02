import React, { Component } from 'react';
import ComponentInfo from './ComponentInfo';
import JSXInfo from './JSXInfo';

class Content extends Component {
    render() { 

        return(
            <div className="content">
            {/* <h3>This is the content</h3> */}
            <ComponentInfo/>
            <JSXInfo/>
            </div>
        )
    }
}

export default Content;