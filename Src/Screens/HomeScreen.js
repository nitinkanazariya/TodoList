import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import styles from '../Style/homeScreenStyle';

import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Modal,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
const HomeScreen = props => {
  const [search, setSearch] = useState('');
  const [selact, setSelact] = useState([]);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      loadSavedSelection();
      loadTasks();
    }, []),
  );
  const loadTasks = async () => {
    const savedTasks = await AsyncStorage.getItem('tasks');
    setData(JSON.parse(savedTasks));
  };
  const loadSavedSelection = async () => {
    const selected = await AsyncStorage.getItem('check');
    if (selected) {
      setSelact(JSON.parse(selected));
    }
  };
  const check = async itemId => {
    if (selact.includes(itemId)) {
      setSelact(selact.filter(id => id !== itemId));
    } else {
      setSelact([...selact, itemId]);
    }
  };

  const removeTask = async id => {
    const updatedTasks = data.filter(task => task.id !== id);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setData(updatedTasks);
  };

  const searchFilterFunction = text => {
    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchData(filteredData);
    setSearch(text);
  };

  useEffect(() => {
    AsyncStorage.setItem('check', JSON.stringify(selact));
  }, [selact]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />

      <Text style={styles.noteApp}>NOTE APP</Text>
      <View style={{padding: 10}}>
        <TextInput
          placeholder="Search here"
          value={search}
          onChangeText={searchFilterFunction}
          style={styles.searchinput}
        />

        <FlatList
          style={styles.FlatList}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.listView}
                onPress={() => {
                  props.navigation.navigate('AddTask', item);
                }}>
                <TouchableOpacity
                  onPress={() => check(item.id)}
                  style={styles.complateView}>
                  {selact.includes(item.id) ? (
                    <Text style={styles.complateTxt}>Complet Task</Text>
                  ) : null}
                  <Image
                    style={[
                      styles.checkicon,
                      {
                        tintColor: selact.includes(item.id)
                          ? 'green'
                          : 'lightgray',
                      },
                    ]}
                    source={require('../image/check.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.titleText}>
                  {index + 1 + '] '}
                  {item.title}
                </Text>
                <View style={styles.iconview}>
                  <Text style={styles.timetext}>
                    {item.Date + '  '}
                    {item.Time}
                  </Text>

                  <TouchableOpacity onPress={() => removeTask(item.id)}>
                    <Image
                      style={styles.removeicon}
                      source={require('../image/delete.png')}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
          data={search == '' ? data : searchData}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('AddTask');
        }}
        style={styles.addNote}>
        <Image
          style={styles.addNoteIcon}
          source={require('../image/add.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
