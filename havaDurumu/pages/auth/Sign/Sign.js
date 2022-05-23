import React, { useState } from 'react';
import { View, Text } from 'react-native'

import Input from '../../../src/components/inputSign/Input';
import Button from '../../../src/components/buttonSign/Button';
import styles from './Sign_style';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from 'react-native-flash-message';
import errorShowMessage from '../../../src/utils/errorShowMessage';
import * as Yup from 'yup';
import md5 from 'md5';

const initialFormValues = {
  userMail: '',
  password: '',
  repassword: '',
};

const validationFormSchema = Yup.object().shape({
  userMail: Yup
    .string()
    .email('Lütfen E-mail format kurallarına uygun giriniz. ')
    .required('Lütfen Epostanızı düzgün ve hatasız giriniz.'),
  password: Yup
    .string()
    .min(6, 'Şifre en az 6 karakter olamlıdır.')
    .required('Lütfen şifrenizi düzgün ve hatasız giriniz.'),
  repassword: Yup
    .string()
    .required('Lütfen şifrenizi düzgün ve hatasız giriniz.')
    .equals([Yup.ref("password"), null], "Parolalar eşleşmeli")
});


function Sign({ navigation }) {

  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(false);
  const [secure2, setSecure2] = useState(false);
  const [icon, setIcon] = useState('eye-off');


  function goLogin() {
    navigation.goBack();
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
      await auth().createUserWithEmailAndPassword(
        formValues.userMail,
        md5(formValues.password),
      );
      
      showMessage({
        message: 'Kullanıcı oluşturuldu.',
        type: 'success',
      });
      navigation.navigate('LoginPage');
      setLoading(false);
    } catch (error) {
      showMessage({
        message: errorShowMessage(error.code),
        type: 'danger',
      });
      setLoading(false);
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.container_logo}>
        <Icon name="account-plus" size={150} color="black" />
      </View>
      <View style={styles.container_body}>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} validationSchema={validationFormSchema}>
          {({ values, handleChange, handleSubmit, handleBlur, touched, errors }) => (
            <>
              <Input 
              isSecure={false}
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
               onBlur={handleBlur('password')} placeholder="Şifreyi Giriniz." 
               onPress={secureEye}
               iconName={icon} />
              {touched.password && errors.password &&
                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
              }
              <Input 
              isSecure={secure} 
              value={values.repassword} onType={handleChange('repassword')}
               onBlur={handleBlur('repassword')} placeholder="Şifreyi Tekrar Giriniz."
               onPress={secureEye}  iconName={icon} />
              {touched.repassword && errors.repassword &&
                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.repassword}</Text>
              }
              <Button title='KAYDOL' onPress={handleSubmit} loading={loading} />
            </>
          )}
        </Formik>
        <Button title='GERİ DÖN' onPress={goLogin} />
      </View>

    </View>
  );
}

export default Sign;