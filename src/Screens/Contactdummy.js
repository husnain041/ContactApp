import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Contact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [search, setSearch] = useState('');
  const [contact, setContact] = useState([]);


  // useEffect(()=>{
  //   getCOntacts();
  // },[])

  // const getCOntacts = ()=>{
  //    const data = AsyncStorage.getItem('@Contacts')
  //   const parsedData = JSON.parse(data);
  //   setContact(parsedData)
  // }
  const SaveContact = () => {
    if (!name || !number) {
      Alert.alert('Name and Phone are required');
    }else if(number.length !=11){
      Alert.alert('Please enter 11 digits')
      return;
    }

    const newContact = [...contact, { contactName: name, contactNumber: number }];
    // const jsonContact = JSON.stringify(newContact)
    // AsyncStorage.setItem('@Contacts',jsonContact)
    setContact(newContact);
    setName('');
    setNumber('');
  };

  const deleteContact = (deleteContact) => {
    Alert.alert('Delete Contact')
    const updatedContact = contact.filter((item) => deleteContact !== item.contactNumber);
    //  const jsonContact = JSON.stringify(updatedContact)
    // AsyncStorage.setItem('@Contacts',jsonContact)
    setContact(updatedContact);
  };

  const filteredContacts = contact.filter((item) =>
    (item.contactName || '').toLowerCase().includes(search.toLowerCase())
  );
 
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
        <Text style={{ fontSize: 30, color: 'royalblue', fontWeight: '700', margin: 20 }}>Contacts</Text>
        <View style={{ padding: 20, margin: 10 }}>
        </View>
      </View>
      <TextInput
        placeholder='Name'
        placeholderTextColor={'black'}
        onChangeText={setName}
        value={name}
        style={styles.input}
      />
      <TextInput
        placeholder='Phone'
        placeholderTextColor={'black'}
        onChangeText={setNumber}
        value={number}
        keyboardType='number-pad'
        style={styles.input}
      />
      <TouchableOpacity style={{backgroundColor:'royalblue',borderRadius:20,padding:10,margin:10}} onPress={SaveContact}>
       <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Add Contact</Text>
      </TouchableOpacity>
      {/* <Button title='Add Contact' onPress={SaveContact} /> */}
      <TextInput
        placeholder='🔍 Search'
        placeholderTextColor={'black'}
        onChangeText={setSearch}
        value={search}
        style={styles.input}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={{fontSize:15,fontWeight:'bold',marginBottom:5}}>{item.contactName}</Text>
            <Text>📞{item.contactNumber}</Text>
            <TouchableOpacity style={{marginTop:10,alignItems:'center',borderRadius:20,backgroundColor:'white',padding:10}}
            onPress={()=> deleteContact(item.contactNumber)}>
            <Text style={{color:'red'}}>🗑️ Delete</Text>
            </TouchableOpacity>
          {/* <Button title='Delete'onPress={()=> deleteContact(item.contactNumber)}/> */}
          </View>
        )}
      />
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'royalblue',
    color: 'black',
    padding: 15,
    margin: 10,
  },
   contactItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
});