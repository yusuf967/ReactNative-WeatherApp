import React from 'react';
import { TouchableOpacity,Text } from 'react-native';

import styles from './buton_style';

function Button(props){
    return(
      <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
    );
}

export default Button;