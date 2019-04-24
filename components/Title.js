import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Title extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.name}</Text>
            </View>
        );
    }
}
export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#262527',
    },
    container: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
    }
    
});