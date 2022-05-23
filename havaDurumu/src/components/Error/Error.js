import React from 'react';
import LottieView from 'lottie-react-native';

function Error() {

    return <LottieView style={{width:250,height:250}} source={require('../../assets/animation/error.json')} autoPlay  />

}
export default Error;