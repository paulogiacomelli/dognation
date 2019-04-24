import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class DogCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                    source={this.props.imageUri}
                    style={styles.imageViewStyle}
                    />
                </View>
                <View style={styles.dogTitle}>
                    <Text>{this.props.name} </Text>
                    <Image 
                    source={require('../assets/fav.png')}
                    style={styles.icon}
                    />                    
                </View>
            </View>
        );
    }
}
export default DogCard;

const styles = StyleSheet.create({
    container: {
        width: 130,
        height: 150,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: '#e5e4ee',
        marginLeft: 20,
    },
    imageContainer: {
        flex: 3,
        backgroundColor: '#f5f3f9',
    },
    imageViewStyle: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    dogTitle: {
        flex: 1, 
        paddingLeft: 15, 
        paddingTop: 15,
        paddingRight: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'nowrap'

    },
    icon: {
        height: 15,
        width: 15,
    }
});