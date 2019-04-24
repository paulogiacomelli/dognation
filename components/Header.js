import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import Tab from "./Tab"
import Title from "./Title"

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabs}>
                    <Tab name="All" color="#76d4ee"/>
                    <Tab name="Small" color="#ff5338"/>
                    <Tab name="Medium" color="#ffbc17"/>
                    <Tab name="Large" color="#d8178f"/>
                </View>
            </View>
           
        );
    }
}
export default Header;

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 50,
        marginBottom: 20,
    },
    tabs: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#262527',
        marginBottom: 20,
    }
});