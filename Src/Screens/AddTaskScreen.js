import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import styles from '../Style/addTaskScreenStyle';

import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const AddTaskScreen = props => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  useFocusEffect(
    React.useCallback(() => {
      loadTasks();
    }),
  );

  const loadTasks = async () => {
    await AsyncStorage.getItem('tasks');
  };
  const SaveTask = async () => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    let noteData = storedTasks ? JSON.parse(storedTasks) : [];

    let Data = {
      id: new Date().getTime().toString(),
      title: title,
      note: note,
      Date: new Date().toLocaleDateString(),
      Time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
    };
    noteData.push(Data);

    if (title !== '' && note !== '') {
      props.navigation.navigate('Home');
      await AsyncStorage.setItem('tasks', JSON.stringify(noteData));
    } else {
      Alert.alert('Enter title and task');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.createNoteText}>Create Note</Text>

        <TextInput
          placeholder="Enter Titel"
          onChangeText={res => setTitle(res)}
          value={title}
          style={styles.addNoteTextInput}
        />

        <TextInput
          placeholder="Enter Task"
          onChangeText={res => setNote(res)}
          value={note}
          multiline
          numberOfLines={5}
          style={styles.addNoteTextInput}
        />

        <TouchableOpacity
          style={styles.onSave}
          onPress={() => {
            SaveTask();
          }}>
          <Text style={styles.saveTxt}> Save </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddTaskScreen;
