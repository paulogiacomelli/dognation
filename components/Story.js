import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image, 
    Dimensions
} from "react-native";
import Title from './Title'

const { height, width } = Dimensions.get('window')

class Story extends Component {
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
                    <Text style={styles.storyTitle}>{this.props.name}</Text>                   
                </View>
                <View style={styles.storyInfo}>
                    <Image 
                    source={require('../assets/Group.png')}
                    style={styles.icon}
                    />  
                    <Text style={styles.author}>Emma Johnson {"\n"} 
                    <Text style={styles.time}>26, Nov, 2018 - 3 min read</Text>
                    </Text>
                    <Image 
                    source={require('../assets/like.png')}
                    style={styles.icon}
                    />  
                </View>
                
            </View>
        );
    }
}
export default Story;

const styles = StyleSheet.create({
    container: {
        width: width - 40,
        height: 200,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: '#e5e4ee',
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
    },
    imageContainer: {
        flex: 2,
        backgroundColor: '#f5f3f9',
    },
    imageViewStyle: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    storyTitle: {
        color: '#262527',
        fontSize: 15,
        fontWeight: '500',
    },
    dogTitle: {
        flex: 1, 
        paddingLeft: 15, 
        paddingTop: 15,
        paddingRight: 15,
       
    },
    storyInfo: {
        marginTop: 10,
        paddingRight: 15,
        paddingLeft: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,

    },
    storyTimeStamp: {
        paddingRight: 15,
        paddingLeft: 15,
        fontSize: 10,
        marginLeft: 20,
        marginTop: 0
    },
    time: {
        fontSize: 10,
        color: '#262527',
    },
    author: {
        color: '#ff5338',
        fontSize: 12,
        marginRight: 'auto'
    },
    icon: {
        height: 25,
        width: 25,
        marginRight: 5
    }

});