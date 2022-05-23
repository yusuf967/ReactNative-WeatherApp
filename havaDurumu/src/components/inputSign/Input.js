import React from 'react';
import { TextInput, View,TouchableOpacity } from 'react-native';
import styles from './input_style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Input(props) {
    return (
        <View style={styles.container}>
            <TextInput secureTextEntry={props.isSecure} placeholder={props.placeholder} style={styles.input} onChangeText={props.onType} onBlur={props.onBlur} value={props.value} />
            <TouchableOpacity onPress={props.onPress}>
                <Icon name={props.iconName} size={50} color="black" />
            </TouchableOpacity>
            
        </View>

    );
}
export default Input;