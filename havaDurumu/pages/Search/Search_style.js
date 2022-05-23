import React from 'react';
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf2',
  },

  container_top: {
    margin: 2,
    flexDirection: 'row',
  },
  button: {
    padding: 5,
    flexDirection: 'row',
  },
  button_text: {
    color: '#000000',
    fontSize: 20,
    padding: 5,
  },
  city: {
    marginLeft: 20,
    padding: 2,
    color: '#000000',
    fontSize: 30,
    autoCapitalize: 'word',
  },
  container_weatherText:{
   margin:20,
   alignItems:'center'
  },
  weatherText:{
  color:'#000000',
  fontSize:90,
  },
  container_search: {
    margin: 7,
    marginTop:100
  },
  container_search_text: {
    borderColor: "#000000",
    borderWidth: 2,
    backgroundColor: '#e2e2e2',
    borderRadius: 10,
    marginBottom: 5,
  },
  btnAra: {
    borderColor: "#000000",
    borderWidth: 2,
    backgroundColor: '#ffe719',
    borderRadius: 10,
    alignItems: 'center',
    height: 40,
    width: 200,
    marginLeft: 90
  },
  textAra: {
    color: '#000000',
    fontSize: 30,
    paddingBottom: 5,
  }
}
);