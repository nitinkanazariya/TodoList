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
  const [show, setShow] = useState(false);
  const [itemdata, setItemData] = useState([]);

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
                  setItemData(item), setShow(true);
                }}>
                <Text style={styles.timetext}>
                  {item.Date + '  '}
                  {item.Time}
                </Text>
                <Text style={styles.titleText}>
                  {index + 1 + '] '}
                  {item.title}
                </Text>
                <Text style={styles.notetext}>{item.note}</Text>
                <View style={styles.iconview}>
                  <TouchableOpacity
                    onPress={() => check(item.id)}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
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
                    {selact.includes(item.id) ? <Text>Complet Task</Text> : ''}
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('AddTask', item)}>
                    <Image
                      style={styles.removeicon}
                      source={require('../image/delete.png')}
                    />
                  </TouchableOpacity>
                </View>
                <Modal visible={show} transparent={false}>
                  <View
                    style={{
                      justifyContent: 'center',
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text onPress={() => setShow(false)}>{itemdata.title}</Text>
                  </View>
                </Modal>
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
