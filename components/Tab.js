import React, { Component } from "react";
import { Text } from "react-native";

class Tab extends Component {
    render() {
        return (
            <Text style={{
                color: this.props.color,
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: .5,
            }}>{this.props.name}</Text>
        );
    }
}
export default Tab;