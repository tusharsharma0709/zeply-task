import { SafeAreaView, Text, View, Dimensions, StyleSheet,  TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

export default class TransactionSearch extends Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
          <View style={{marginTop: 30}}>
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("input")}>
              <View style={{flexDirection:"row"}}>
                <Image style={styles.img} source={require('../../assets/input.png')}/>
                <Text style={styles.text}>Total BTC Input</Text>
              </View>
            </TouchableOpacity>
          </View>
                
          <View>
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("output")}>
              <View style={{flexDirection:"row"}}>
                <Image style={styles.img} source={require('../../assets/output.png')}/>
                <Text style={styles.text}>Total BTC Output</Text>
              </View>
            </TouchableOpacity>
          </View>
                
          <View>
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("transactiondetail")}>
              <View style={{flexDirection:"row"}}>
                <Image style={styles.img} source={require('../../assets/detail.png')}/>
                <Text style={styles.text}>Transaction Detail</Text>
              </View>
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
    
  button: {
    // alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: "skyblue",
    width: Dimensions.get('screen').width/1.2,
    height: Dimensions.get('screen').height/16,
    marginVertical:15,
    marginHorizontal:30
  },
  
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal:20,
    marginTop: 5
  },

  img:{
    width: Dimensions.get('screen').width/12,
    height: Dimensions.get('screen').height/25,
    marginLeft: 10
  }
  })