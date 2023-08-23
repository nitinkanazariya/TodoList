import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},

  noteApp: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'black',
    padding: 10,
    paddingVertical: 20,
  },
  searchinput: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
    color: 'black',
  },
  FlatList: {marginTop: 10, marginBottom: '35%'},
  addNote: {position: 'absolute', bottom: '10%', right: '12%'},
  addNoteIcon: {
    height: 50,
    width: 50,
  },

  listView: {
    padding: 15,
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 15,
    marginTop: 10,

    backgroundColor: 'white',
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: -10,
  },
  timetext: {color: 'gray', fontSize: 12, alignSelf: 'flex-end'},
  notetext: {color: 'gray', fontWeight: 'bold', fontSize: 14},
  removeicon: {
    height: 22,
    width: 22,
  },
  checkicon: {tintColor: 'green', height: 25, width: 25},
  iconview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
