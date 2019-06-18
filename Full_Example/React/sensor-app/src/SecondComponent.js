import React, { Component } from "react";

export class SecondComponent extends Component {

    render() {
        return (
            <div>
                <h1>Second Component</h1>
                <p>{this.props.otherProp}</p>
            </div>
        ); 
    }
}
