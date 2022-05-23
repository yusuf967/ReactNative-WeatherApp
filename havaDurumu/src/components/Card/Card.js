import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
function Card(props) {
    return (

        <View style={styles.container}>
                <View style={styles.date}>
                    <Text style={styles.date_text}>{props.date},{props.day}</Text>
                </View>
                <View style={styles.container_body}>
                    <Text style={styles.degree}>{props.degree}°</Text>
                    <Image
                        source={{
                            uri: props.icon,
                        }}
                        resizeMode="cover"

                        style={styles.icon_image}
                    />
                </View>
                <View style={styles.container_bottom}>
                    <Text style={styles.night}>Gece:{props.night}°</Text>
                    <Text style={styles.humidity}>Nem:{props.humidity}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </View>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 4,
        backgroundColor: '#2077d8',
        borderRadius: 10,
        padding: 5,
        borderColor: '#000000',
        borderWidth: 2,
    },
    date: {
        margin: 2,
    },
    date_text: {
        fontSize: 20,
        color: '#000000',
    },
    container_body: {
        marginTop: 3,
        marginBottom: 3,
        flexDirection: 'row',
    },
    degree: {
        fontSize: 50,
        color: '#000000',
        marginLeft: 5,
    },
    icon_image: {
        width: 100,
        height: 100,
        marginLeft: 75,
        marginBottom: 10,
    },
    container_bottom: {
        marginTop: 3,
        flexDirection: 'row'
    },
    night: {
        fontSize: 17,
        color: '#000000',
        margin: 2,

    },
    humidity: {
        fontSize: 17,
        color: '#000000',
        margin: 2,
        marginLeft: 4,

    },
    description: {
        fontSize: 17,
        color: '#000000',
        margin: 2,
        marginLeft: 5,
    }
}
);

export default Card;