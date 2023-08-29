import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},

  noteApp: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'black',
    marginTop: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  searchinput: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
    color: 'black',
  },
  FlatList: {marginTop: 10},
  clearAll: {
    color: 'white',
    alignSelf: 'flex-end',
    padding: 5,
    fontSize: 16,
    borderRadius: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'white',
  },
  addNote: {
    position: 'absolute',
    bottom: '10%',
    right: '12%',

    elevation: 5,
    color: 'black',
    backgroundColor: 'darkgreen',
    padding: 10,
    borderRadius: 30,
  },
  addNoteIcon: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },

  listView: {
    padding: 15,
    flex: 0.5,
    marginHorizontal: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: -5,
  },
  timetext: {
    color: 'gray',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginLeft: -5,
  },
  notetext: {color: 'gray', fontWeight: 'bold', fontSize: 14},
  removeicon: {
    height: 22,
    width: 22,
  },

  checkicon: {tintColor: 'green', height: 20, width: 20},
  iconview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
  },

  complateView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: -10,
    padding: 5,
  },
  complateTxt: {
    marginRight: 5,
    fontSize: 12,
    color: 'green',
    fontWeight: 'bold',
  },
});
