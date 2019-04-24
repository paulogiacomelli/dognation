import React, {Component} from 'react';
import {Dimensions,Image, Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import DogCard from '../components/DogCard';
import Header from '../components/Header';
import Story from '../components/Story';
import Title from '../components/Title';

const { height, width } = Dimensions.get('window')

export default class Home extends Component {
  render() {
    return (
        <View>
            <Title name="Paws & Wags" />
            <Header />
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <DogCard imageUri={require('../assets/rectangle.png')}
                    name="Barkley"
                />
                <DogCard imageUri={require('../assets/dog1.png')}
                    name="Pumpkin"
                />
                <DogCard imageUri={require('../assets/dog2.png')}
                    name="Ronnie"
                />
            </ScrollView>
            <Title name="Stories" />
            <ScrollView
                horizontal={true}>
                <Story imageUri={require('../assets/photo.png')}
                    name="What 'walkies' say about relationships with your dog?"
                />
            </ScrollView>
            <View style={styles.rect}>

                <Text style={styles.text}>Save a life. Donate to a shelter pet!
                
                </Text>
                <Image 
                source={require('../assets/illustration.png')}
                style={styles.icon}
                />
            </View>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
    rect: {
        width: width - 40,
        height: 80,
        backgroundColor: "#ffbc17",
        borderRadius: 10,
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap'

    },
    text: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 15
    },
    icon: {
        height: 86,
        width: 90,
        marginTop: 'auto'
    }

})
