import React, { Component } from "react";

export class MyFirstComponent extends Component {

    render() {

        let niceString = this.props.name + " is";

        if (this.props.nice) {
            niceString += " nice";
        }
        else {
            niceString += " not nice";
        }

        return (
            <div>
                <p>Hello {this.props.name}</p>
                <p> {niceString} </p>
            </div>
        );
    }
}
