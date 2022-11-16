import { SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'
import { AntDesign } from '@expo/vector-icons';

export default class Input extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        inputmodal: false,
        address:'',
        input:''
      }
    }
    
    Getinput=async()=>{
        // console.log(this.state.address)
    await axios.get(`https://blockchain.info/q/txtotallbtcinput/${this.state.address}`)
        .then((res)=>
        {
            this.setState({input:(res.data)*10**18, inputmodal:true})
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        }
        )
    }

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.div1}>
                <View>
                    <TextInput onChangeText={(item)=>this.setState({address:item})} style={styles.input} placeholder="Enter Hash" placeholderTextColor={"#808080"}/>
                </View>
                
                <View>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.Getinput()}}>
                        <AntDesign name="search1" size={28} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                transparent={true}
                visible={this.state.inputmodal}
            //    visible={true}
              >
                <View style={styles.modalView1}>
                    <View style={styles.div2}>

                        
                        
                        <View>
                            <Text style={styles.btctext}>Total BTC Input:  {parseInt(this.state.input).toFixed(3)} BTC</Text>
                        </View>
                    </View>
                    
                </View>
            </Modal>
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

    input:{
        width: Dimensions.get('screen').width/1.2,
        height: Dimensions.get('screen').height/16,
        borderWidth:1,
        borderColor:"grey",
        borderRadius: 15,
        paddingLeft: 20,
        fontSize: 16,
        color:"#fff"
    },

    div1:{
        flexDirection:'row',
        display:'flex',
        marginTop:50
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 3,
        backgroundColor: "skyblue",
        width: Dimensions.get('screen').width/8,
        height: Dimensions.get('screen').height/17,
        marginHorizontal:10
    },

    text: {
        fontSize: 18,
        color: 'white',
        marginHorizontal:20,
    },

    modalView1:{
        backgroundColor:"white", 
        marginLeft: 20,
        marginHorizontal:10,
        borderRadius:10,
        height:Dimensions.get("screen").height/3,
        width:Dimensions.get("screen").width/1.1,
        position:"absolute",
        bottom:250,
    },

    div2:{
        // flexDirection:'row',
        marginTop:20,
        marginHorizontal: 20
    },

    modalbtn:{
        backgroundColor:"#4770FF",
        justifyContent:'center',
        alignItems:"center",
        height:Dimensions.get("screen").height/19,
        width:Dimensions.get("screen").width/8.9,
        borderRadius: 30,
        marginHorizontal:Dimensions.get("screen").width/1.4,
    },
       
    modalbtntxt:{
        color:"#fff",
        fontSize: 25,
    },

    btctext:{
        fontSize: 20,
        fontWeight:"400"
    }
})