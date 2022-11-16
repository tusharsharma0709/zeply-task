import { SafeAreaView, Text, View, Dimensions, StyleSheet,  TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class AdressSearch extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        
        <View style={{marginTop: 30}}>
          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("confirmtransaction")}>
            <View style={{flexDirection:"row"}}>
              <Image style={styles.img} source={require('../../assets/transaction.png')}/>
              <Text style={styles.text}>Confirmed Transaction</Text>
            </View>
          </TouchableOpacity>
        </View>
              
        <View>
          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("btcreceived")}>
            <View style={{flexDirection:"row"}}>
              <Image style={styles.img} source={require('../../assets/received.png')}/>
            <Text style={styles.text}>Total BTC Received</Text>
          </View>
          </TouchableOpacity>
        </View>
        
        <View >
          <TouchableOpacity style={styles.button}>
            <View style={{flexDirection:"row"}}> 
              <Image style={styles.img} source={require('../../assets/spent.png')}/>
              <Text style={styles.text}>Total BTC Spent</Text>
            </View>
          </TouchableOpacity>
        </View>
              
        <View>
          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("btcunspent")}>
            <View style={{flexDirection:"row"}}>
              <Image style={styles.img} source={require('../../assets/unspent.png')}/>
              <Text style={styles.text}>Total BTC Unspent</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View>
          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("addressbalance")}>
            <View style={{flexDirection:"row"}}>
              <Image style={styles.img} source={require('../../assets/balance.png')}/>
              <Text style={styles.text}>Current Address Balance</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal:10,
    marginTop:3
  },

  img:{
    width: Dimensions.get('screen').width/12,
    height: Dimensions.get('screen').height/25,
    marginLeft: 10
  }
})