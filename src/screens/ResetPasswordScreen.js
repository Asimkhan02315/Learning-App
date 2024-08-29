/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button, Snackbar, HelperText } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import globalStyles from '../utils/_css/globalStyles';
import { AppStyles } from '../utils/AppStyles';
import { Link } from '@react-navigation/native';

function ResetPasswordScreen({ navigation }) {

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string()
            .required("Password is mandatory")
            .min(8, "Password must be at 8 char long"),
        confirmPassword: Yup.string()
            .required("Confirm Password is mandatory")
            .oneOf([Yup.ref("password")], "Passwords does not match"),
    });

    const formOptions = { resolver: yupResolver(validationSchema), mode: 'onChange' };
    const { control, handleSubmit, formState: { errors } } = useForm(formOptions);

    const onSubmit = () => {
        navigation.navigate("DrawerStack")
    };

    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.title, { marginTop: 70, marginBottom: 30 }]}>Reset Password </Text>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={globalStyles.inputStyle}
                        mode='outlined'
                        label='Email'
                        activeOutlineColor={AppStyles.color.secondaryColor}
                        outlineColor={AppStyles.color.secondaryColor}
                        placeholder="Enter your Email "
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                )}
            />
            {errors?.email && (
                <HelperText type="error" visible={errors?.email}>
                    {errors?.email?.message}
                </HelperText>
            )}
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        secureTextEntry={!showPassword}
                        placeholder="Enter your Password"
                        style={globalStyles.inputStyle}
                        mode='outlined'
                        label='Password'
                        activeOutlineColor={AppStyles.color.secondaryColor}
                        outlineColor={AppStyles.color.secondaryColor}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                        right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!confirmPassword)} />}
                    />
                )}
            />
            {errors?.password && (
                <HelperText type="error" visible={errors?.password}>
                    {errors?.password?.message}
                </HelperText>
            )}
            <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        secureTextEntry={!confirmPassword}
                        placeholder="Enter your Confirm Password"
                        style={globalStyles.inputStyle}
                        mode='outlined'
                        label='Confirm Password'
                        activeOutlineColor={AppStyles.color.secondaryColor}
                        outlineColor={AppStyles.color.secondaryColor}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                        right={<TextInput.Icon icon={confirmPassword ? "eye-off" : "eye"} onPress={() => setConfirmPassword(!ConfirmPassword)} />}
                    />
                )}
            />
            {errors?.confirmPassword && (
                <HelperText type="error" visible={errors?.confirmPassword}>
                    {errors?.confirmPassword?.message}
                </HelperText>
            )}
            <Button style={globalStyles.inputStyle} loading={loading} textColor={AppStyles.color.logTextbtn} buttonColor={AppStyles.color.tint} mode="contained-tonal" onPress={handleSubmit(onSubmit)}>
                Reset
            </Button>
            <View style={styles.linkLogin}>
                <Link to={{ screen: 'LoginScreen' }}>
                    <Text style={styles.textLogin}>Login</Text>
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
    );
}

const styles = StyleSheet.create({
    linkLogin: {
        top: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogin: {
        color: '#0172AE',
        fontWeight: 800,
    }
})

export default ResetPasswordScreen;