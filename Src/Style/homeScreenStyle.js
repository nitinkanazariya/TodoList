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
  timetext: {
    color: 'gray',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginLeft: -5,
  },
  notetext: {color: 'gray', fontWeight: 'bold', fontSize: 14},
  removeicon: {
    height: 25,
    width: 25,
  },

  checkicon: {tintColor: 'green', height: 25, width: 25},
  iconview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
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
