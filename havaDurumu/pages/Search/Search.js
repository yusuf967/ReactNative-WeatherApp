import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './Search_style';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import Loading from '../../src/components/Loading/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function Search({ navigation }) {

  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [go, setGo] = useState(false);


  function goSignOut() {
    navigation.navigate("LoginPage");
    auth().signOut();
  }


  useEffect(() => {
    setCity('');
    setList([]);
    setLoading(false);
  }, [go]);

  async function fetchData() {

    try {
      setLoading(true);
      const api = "https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=" + city.toString();
      var response = await axios.get(api, {
        headers: {
          "content-type": "application/json",
          "authorization": "apikey YOUR APİ KEY"
        }
      });
      console.log('liste:' + response.data.result);
      if (response.data.result) {
        setList(response.data.result);
        setCity(response.data.city);
        setLoading(false);

        navigation.navigate('DetailsPage', {
          dataList: list,
          dataCity: city,
        });

      } else {
        showMessage({
          message: 'Lütfen şehrinizi veya ilçenizi düzgün yazınız.',
          type: 'danger',
        });

        setLoading(false);
      }


    } catch (Error) {
      console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
      showMessage({
        message: 'Lütfen şehrinizi veya ilçenizi düzgün yazınız.',
        type: 'danger',
      });

      setLoading(false);
    }
    setGo(true);
  }


  if (loading) {
    return <Loading />;
  }


  return (

    <View style={styles.container}>
      <ImageBackground style={{ flex: 1 }} source={require('../../src/assets/Image/sky.jpg')} resizeMode="cover" >
        <View style={styles.container_top}>
          <TouchableOpacity onPress={goSignOut} style={styles.button}>
          <Icon name='logout' size={25} style={{color:'#000000',padding:5}} />
            <Text style={styles.button_text}>ÇIKIŞ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_weatherText}>
          <Text style={styles.weatherText}>HAVA DURUMU</Text>
        </View>
        <View style={styles.container_search}>
          <TextInput style={styles.container_search_text}
            placeholder="Lütfen şehrinizi veya ilçenizi giriniz."
            onChangeText={setCity} />
          <TouchableOpacity onPress={fetchData} style={styles.btnAra}>
            <Text style={styles.textAra}>ARA</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>

  );



}

export default Search;
