import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Screen, AppTextInput, AppButton, AppText } from '../components';
import colors from '../config';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            {touched.email && <AppText style={styles.error}>{errors.email}</AppText>}
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              keyboardType="email-address"
              placeholder="Password"
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
            />
            {touched.password && <AppText style={styles.error}>{errors.password}</AppText>}
            <AppButton
              title="Login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingHorizontal: 20
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center"
  },
  error: {
    color: 'red'
  }
})

export default LoginScreen;