import React, { Component } from 'react';

class StateInfo extends Component {
    render() { 

        return(
            <div className="stateInfo">
            <h3>State Info</h3>
            <p>State affects how a component behaves and renders. Unlike properties, there’s no way to define what state should be applied to components via JSX</p>
            </div>
        )
    }
}

export default StateInfo;