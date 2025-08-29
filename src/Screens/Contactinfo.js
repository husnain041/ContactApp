import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'



const Contactinfo = ({ route }) => {
    const { contact, deleteContact } = route.params;
const navigation=useNavigation()
  return (
   
    <SafeAreaView style={{flex:1}}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:'row', margin:10}}>
                  <Ionicons name='arrow-back' size={35} color="#000" />
                  
              </TouchableOpacity>
              <View style={{marginTop:30, alignItems:'center', justifyContent:'center'}}>
                <View style={{backgroundColor:'#c129ff', borderRadius:100, width:200, height:200, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:90, color:'white'}}>{contact.contactFirstName?.charAt(0).toUpperCase()}</Text>
     </View>
                <Text style={{fontSize:40}}>{contact.contactFirstName} {contact.contactLastName}</Text>
              </View>
              
                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                    <View style={{backgroundColor:'#c6d3d7ff', borderRadius:50, height:60, width:60, alignItems:'center', justifyContent:'center'}}>
                    <Feather name='phone' size={40}/>
                    </View>
                    <View style={{backgroundColor:'#c6d3d7ff', borderRadius:50, height:60, width:60, alignItems:'center', justifyContent:'center'}}>
                    <Feather name='message-circle' size={40}/>
                    </View>
                </View>
                <View style={{margin:20, backgroundColor:'#c6d3d7ff', padding:10, borderRadius:30}}>
                    <Text style={{margin:10, fontSize:18, fontFamily:'Roboto-SemiBold'}}>Contact info</Text>
                    <View style={{flexDirection:'row'}}>
                        <Feather name='phone' size={25} style={{margin:10}}/>
                        <View>
                           <Text style={{fontSize:16}}t>{contact.contactNumber}</Text>
                           <Text>Mobile</Text>
                        </View>
                    </View>
                </View>
              <View style={{ margin:20, flex:0.5}}>
                                    
                                  <TouchableOpacity  style={{ padding: 20, borderRadius: 10, borderBottomWidth: 2,   justifyContent:'center' }}>
                                      <Text style={{ fontSize: 17, color:'black' }}>Block contact</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity onPress={() => {deleteContact(contact.contactNumber);navigation.goBack();}} style={{ padding: 20, borderRadius: 10, borderBottomWidth: 2,  justifyContent:'center' }}>
                                      <Text style={{ fontSize: 17, color:'black'  }}>Delete contact</Text>
                                  </TouchableOpacity>
                                  </View>
                                   
    </SafeAreaView>
  )
}
export default Contactinfo

const styles = StyleSheet.create({})