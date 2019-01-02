import React, { Component } from 'react';

class Footer extends Component {
    render() { 

        return(
            <div className="footer">
            <h3>Links:</h3>
            
            <ul>
            <li><a href="https://medium.mybridge.co/react-js-top-10-articles-of-the-year-v-2017-e95092964e49">React.js Top Ten Articles of the Year</a></li>
            <li><a href="https://www.youtube.com/watch?v=XxVg_s8xAms">Introduction to Reactjs</a></li>
            <li><a href="https://reactjs.org/docs/components-and-props.html">React Components and Props</a></li>
            <li><a href="https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm">React Props</a></li>
            <li><a href="https://medium.com/react-tutorials/react-state-14a6d4f736f5">React States</a></li>
            <li><a href="https://www.youtube.com/watch?v=-AbaV3nrw6E">React tutorials</a></li>
            </ul>
            </div>
        )
    }
}

export default Footer;