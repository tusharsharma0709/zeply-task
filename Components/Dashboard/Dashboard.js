import { SafeAreaView, Text, View, StyleSheet, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { Component } from 'react'

export default class Dashboard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
    }
  render() {
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={{marginTop:80}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("address")}>
                    <ImageBackground style={styles.img} source={require('../../assets/address_search.jpeg')}>
                        <Text style={styles.text}>Address Search</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("transaction")}>
                    <ImageBackground style={styles.img} source={require('../../assets/transaction_search.jpeg')} resizeMode="cover">
                        <Text style={styles.text}>Transaction Search</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
  }
}

const styles= StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor:"#0A0F14",
    },
    img:{
        width:'100%',
        height:'100%',
        bottom:15
    },
    
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        overflow: 'hidden',
        elevation: 3,
        backgroundColor:"skyblue",
        width: Dimensions.get('screen').width/1.4,
        height: Dimensions.get('screen').height/4,
        marginVertical:40,
        marginLeft: 50
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: 'black',
        marginTop: 190,
        // justifyContent:"center"
        textAlign:"center",
        backgroundColor:"skyblue"
    },
})