import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
  inputContainer: {
    margin: 10,
    elevation: 5,
  },
  listStyle: {
    marginHorizontal: 10,
    elevation: 5,
    backgroundColor: '#fff',
    flexGrow: 0,
  },
  separatorStyle: {
    backgroundColor: '#888',
    height: 1,
  },
  itemStyle: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  itemLabelStyle: {
    flex: 1,
    fontSize: 15,
    color: '#555',
  },
  actionContainer: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    width: 130,
    justifyContent: 'space-between',
  },
});
