import { useState } from "react";
import { View , Text, StyleSheet, FlatList } from "react-native";
const NoteScreen = () =>{
    const [notes, setNotes] = useState([
        {id: 1, text: 'First Note'},
        {id: 2, text: 'Second Note'},
        {id: 3, text: 'Third Note'},
    ]);
    return (
        <View style={Styles.container}>
            <FlatList 
            data = {notes}
            keyExtractor={(item) =>item.id} 
            renderItem = {({item}) => (
                <View style = {Styles.noteItem}>
                    <Text style = {Styles.noteText}> {item.text}</Text>
                </View>
            )}/>
        </View>
    );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
  noNotesText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 15,
  },
});

export default NoteScreen;