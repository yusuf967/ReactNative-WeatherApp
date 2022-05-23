import React from 'react';
import { View, FlatList, ScrollView, Text,TouchableOpacity } from 'react-native';
import Card from '../../src/components/Card/Card';
import styles from './Details_style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Details({ route,navigation }) {
  function goBack() {
    navigation.goBack();
  }

  const renderWeather = ({ item }) => <Card date={item.date}
    day={item.day}
    description={item.description.toUpperCase()}
    icon={item.icon}
    degree={item.degree}
    night={item.night}
    humidity={item.humidity}
  />


  return (
    <View style={styles.container}>
     <View style={styles.container_top}>
          <TouchableOpacity onPress={goBack} style={styles.top_button}>
          <Icon name='arrow-left-bold' size={25} style={{color:'#000000',padding:5}} />
            <Text style={styles.top_text}>GERİ</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.city}>{route.params.dataCity.toUpperCase()}</Text>
        </View>
      <ScrollView>
        <View>
          <FlatList data={route.params.dataList} renderItem={renderWeather} />
        </View>
      </ScrollView>

    </View>

  );
}

export default Details;
