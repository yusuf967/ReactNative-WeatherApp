import React, { useState } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

import Input from '../../../src/components/inputSign/Input';
import Button from '../../../src/components/buttonSign/Button';
import styles from './Login_style';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import errorShowMessage from '../../../src/utils/errorShowMessage';
import md5 from 'md5';

const initialFormValues = {
  userMail: '',
  password: '',
};

const validationFormSchema = Yup.object().shape({
  userMail: Yup.string().email('Lütfen E-mail format kurallarına uygun giriniz.').required('Lütfen Epostanızı düzgün ve hatasız giriniz.'),
  password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır.').required('LÜtfen şifrenizi düzgün ve hatasız giriniz.')
});


function Login({ navigation }) {

  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(false);
  const [icon, setIcon] = useState('eye-off');

  function goSign() {
    navigation.navigate("SignPage");
  }

  function secureEye() {
    if (secure) {
      setSecure(false);
      setIcon('eye-off'); 
    } else {
      setSecure(true);
      setIcon('eye');
    }
  }

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.userMail,
        md5(formValues.password),
      );
      showMessage({
        message: 'Kullanıcı girişi başarılı.',
        type: "success",
      });
      navigation.navigate('SearchPage');
      setLoading(false);
    } catch (error) {
      showMessage({
        message: errorShowMessage(error.code),
        type: "danger",
      });
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.container_logo}>
        <Icon name="login" size={150} color="black" />
      </View>

      <View style={styles.container_body}>
        <Formik initialValues={initialFormValues} validationSchema={validationFormSchema} onSubmit={handleFormSubmit}>
          {({ values, touched, errors, handleChange, handleSubmit, handleBlur }) => (
            <>
              <Input isSecure={false}
                value={values.userMail} onType={handleChange('userMail')}
                onBlur={handleBlur('userMail')} placeholder="E-posta Adresinizi Giriniz."
                onPress={() => { console.log('merhaba') }}
                iconName="account" />
              {touched.userMail && errors.userMail &&
                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.userMail}</Text>
              }
              <Input
                isSecure={secure}
                value={values.password} onType={handleChange('password')}
                onBlur={handleBlur('password')} placeholder="Şifrenizi Giriniz."
                onPress={secureEye}
                iconName={icon} />
              {touched.password && errors.password &&
                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
              }
              <Button title='GİRİŞ YAP' onPress={handleSubmit} loading={loading} />
            </>
          )}
        </Formik>
        <View style={styles.container_bottom}>
           <TouchableOpacity style={styles.button} onPress={goSign}>
          <Text style={styles.text}>Hesabın yoksa, hemen kaydol.</Text>
        </TouchableOpacity>
        </View>
       
      </View>

    </View>
  );
}

export default Login;