/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Text, Button, Snackbar, HelperText } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import globalStyles from '../utils/_css/globalStyles';
import { AppStyles } from '../utils/AppStyles';
import { Link } from '@react-navigation/native';

const ChangePasswordScreen = ({ navigation }) => {

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .required("Please Enter Old Password ")
      .min(8, "Password must be at 8 char long"),
    newPassword: Yup.string()
      .required("Please Enter Old Password")
      .min(8, "Password must be at 8 char long"),
    confirmPassword: Yup.string()
      .required("Please Enter Confirm Password")
      .min(8, "Password must be at 8 char long"),
  });

  const formOptions = { resolver: yupResolver(validationSchema), mode: 'onChange' };
  const { control, handleSubmit, formState: { errors } } = useForm(formOptions);

  const onSubmit = () => {
    // navigation.navigate("DrawerStack")
    Alert.alert("Profile Info Updated Successfully")
  };

  return (
    <View style={styles.container}>
      <Text style={{ top: 20, right: 110, fontSize: 20, fontWeight: "700", color: "#0E2254" }}>Old Password</Text>
      <Controller
        control={control}
        name="oldPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry={!oldPassword}
            placeholder="Old Password"
            style={globalStyles.inputStyle}
            mode='outlined'
            // label='Old Password'
            activeOutlineColor={AppStyles.color.secondaryColor}
            outlineColor={AppStyles.color.secondaryColor}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
            right={<TextInput.Icon icon={!oldPassword ? "eye-off" : "eye"} onPress={() => setOldPassword(!oldPassword)} />}
          />
        )}
      />
      <View >
        {errors?.oldPassword && (
          <HelperText style={{ right: 55, fontSize: 15, color: "red" }} type="error" visible={errors?.oldPassword}>
            {errors?.oldPassword?.message}
          </HelperText>
        )}
      </View>
      <Text style={{ top: 20, right: 110, fontSize: 20, fontWeight: "700", color: "#0E2254" }}>New Password</Text>
      <Controller
        control={control}
        name="newPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry={!newPassword}
            placeholder="New Password"
            style={globalStyles.inputStyle}
            mode='outlined'
            // label='New Password'
            activeOutlineColor={AppStyles.color.secondaryColor}
            outlineColor={AppStyles.color.secondaryColor}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
            right={<TextInput.Icon icon={!newPassword ? "eye-off" : "eye"} onPress={() => setNewPassword(!newPassword)} />}
          />
        )}
      />
      {errors?.newPassword && (
        <HelperText style={{ right: 55, fontSize: 15, color: "red" }} type="error" visible={errors?.newPassword}>
          {errors?.newPassword?.message}
        </HelperText>
      )}
      <Text style={{ top: 20, right: 90, fontSize: 20, fontWeight: "700", color: "#0E2254" }}>Confirm Password</Text>
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry={!confirmPassword}
            placeholder="Confirm Password"
            style={globalStyles.inputStyle}
            mode='outlined'
            // label='Confirm Password'
            activeOutlineColor={AppStyles.color.secondaryColor}
            outlineColor={AppStyles.color.secondaryColor}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
            right={<TextInput.Icon icon={!confirmPassword ? "eye-off" : "eye"} onPress={() => setConfirmPassword(!confirmPassword)} />}
          />
        )}
      />
      {errors?.confirmPassword && (
        <HelperText style={{ right: 55, fontSize: 15, color: "red" }} type="error" visible={errors?.confirmPassword}>
          {errors?.confirmPassword?.message}
        </HelperText>
      )}
      <Button style={[globalStyles.inputStyle, { backgroundColor: "#00A2FE", margin: 5, borderRadius: 3 }]} loading={loading} textColor={AppStyles.color.logTextbtn} buttonColor={AppStyles.color.tint} mode="contained-tonal" onPress={handleSubmit(onSubmit)}>
        Update Password
      </Button>
      <View style={styles.linkLogin}>
        <Link to={{ screen: 'LoginScreen' }}>
          <Text style={styles.textLogin}>Cancel</Text>
        </Link>
      </View>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={3000}
      >
        Email & Password does not match with our record
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginHorizontal: -20,
    marginVertical: 30
  },
  linkLogin: {
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: "#000",
    fontWeight: '800',
  },
  textLogin: {
    // color: '#0E2254',
    fontWeight: 800,
    fontSize: 18,
    color: "#0E2254"
  }
})

export default ChangePasswordScreen