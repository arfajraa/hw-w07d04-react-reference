import React, { Component } from 'react';

class LifeCycleInfo extends Component {
    render() { 

        return(
            <div className="lifeCycleInfo">
            <h3>Lifecycle Info</h3>
            <h4>Commonly used lifecycle methods:</h4>
            <ul>
                <li>render()</li>
                <li>constructor()</li>
                <li>componentDidMount()</li>
                <li>componentDidUpdate()</li>
                <li>componentWillUnmount()</li>
            </ul>
            </div>
        )
    }
}

export default LifeCycleInfo;