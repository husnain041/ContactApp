import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native';


const Contactapp3 = () => {
  const [search, setSearch] = useState('');
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [number, setNumber] = useState('')
  const [contact, setContact] = useState([{ contactFirstName: 'Joe', contactLastName: 'Goldberg', contactNumber: '14084672893' }, { contactFirstName: 'James', contactLastName: 'Greg', contactNumber: '14084673725' }])
  const saveContact = () => {
    const addContact = [...contact, { contactFirstName: firstname, contactLastName: lastname, contactNumber: number }]
    setContact(addContact);
    // navigation.goBack()
  }
  const deleteContact = (deletedphone) => {
    // console.log(deletedphone)
    const updatedContacts = contact.filter((item) => deletedphone != item.contactNumber)

    // console.log(contacts)
    // console.log(updatedContacts)
    setContact(updatedContacts)
    //     const goToContactList = () => {
    //     navigation.navigate('ContactListScreen', { contactList: contact });
  };
  // const editContacts = contact.filter((item)=>editdphone != item.contactNumber)
  const filteredContacts = contact.filter((item) =>
    (item.contactName || '').toLowerCase().includes(search.toLowerCase())
  );
  const name = 'ASHSDASDSDADSSAD'

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ justifyContent: 'center', marginHorizontal: 10 }}>
          <AntDesign name='close' size={30} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, margin: 10 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular' }}>Create Contact</Text>
          <TouchableOpacity onPress={saveContact} style={{ borderRadius: 30, backgroundColor: '#2d606d', padding: 13, paddingHorizontal: 25 }}><Text style={{ color: 'white', fontFamily: 'Roboto-SemiBold' }}>Save</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ borderRadius: 40 }}><FontAwesome6 name='circle-user' size={100} /></View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TextInput placeholder="Enter First Name" value={firstname} onChangeText={setFirstname} style={{ borderWidth: 1, padding: 10, borderRadius: 5, width: 300, height: 50, marginVertical: 10 }} />
        <TextInput placeholder="Enter Last Name" value={lastname} onChangeText={setLastname} style={{ borderWidth: 1, padding: 10, borderRadius: 5, width: 300, height: 50, marginVertical: 10 }} />
        <TextInput placeholder="Enter Phone Number" value={number} onChangeText={setNumber} keyboardType='numeric' style={{ borderWidth: 1, padding: 10, borderRadius: 5, width: 300, height: 50, marginVertical: 10 }} />
      </View>
      <TextInput placeholder='Search' placeholderTextColor='black' onChangeText={setSearch} value={search} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, margin: 10, fontSize: 16, backgroundColor: 'white', color: 'black' }} />
      <Text>{}</Text>
      <FlatList
        data={filteredContacts}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#c129ff', borderRadius: 50, width: 60, height: 60, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                <Text style={{ fontSize: 25, color: 'white' }}>{item.contactFirstName?.charAt(0).toUpperCase()}</Text>
              </View>
              <TouchableOpacity style={{ padding: 20, borderRadius: 10, borderBottomWidth: 2, flex: 1 }}>
                <Text style={{ fontSize: 17 }}>{item.contactFirstName} {item.contactLastName}</Text>
                <Text>{item?.contactNumber}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleEdit(index)} style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 10, marginRight: 5 }}>
                <Text style={{ color: 'white' }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 10, alignItems: 'center', borderRadius: 20, backgroundColor: '#2d606d', padding: 10 }}
                onPress={() => deleteContact(item.contactNumber)}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </TouchableOpacity>
            </View>

          )
        }}
      />
    </SafeAreaView>
  )
}

export default Contactapp3

const styles = StyleSheet.create({})