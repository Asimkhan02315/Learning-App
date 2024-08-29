/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { TextInput, Text, Button, Snackbar, HelperText } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { Link } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import globalStyles from '../utils/_css/globalStyles';
import { AppStyles } from '../utils/AppStyles';
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';

function LoginScreen({ navigation }) {

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const themeMode = useColorScheme();
    const inputBackgroundColor = themeMode === 'dark' ? 'white' : '#fff'; // Adjust as needed

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string()
            .required("Password is mandatory")
    });

    const formOptions = { resolver: yupResolver(validationSchema), mode: 'onChange' };
    const { control, handleSubmit, formState: { errors }, setValue } = useForm(formOptions);

    const onSubmit = () => {
        navigation.navigate("DrawerStack")
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.container}>
                    <Text style={[globalStyles.title, { marginTop: 70, marginBottom: 30 }]}>Welcome to </Text>
                    <Svg
                        width="102"
                        height="100"
                        viewBox="0 0 102 110"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Defs>
                            <LinearGradient
                                id="paint0_linear"
                                x1="79.3814"
                                y1="37.4241"
                                x2="89.7087"
                                y2="79.9901"
                                gradientUnits="userSpaceOnUse"
                            >
                                <Stop stopColor="#00A3FF" />
                                <Stop offset="1" stopColor="#00529C" />
                            </LinearGradient>
                        </Defs>
                        <Path
                            d="M34.7121 96.1523C22.6839 96.1523 13.6477 86.2786 13.6477 74.545C13.6477 62.8114 22.6839 53.3029 34.7121 53.3029C37.7715 53.3029 40.6367 53.919 43.2073 55.0334V42.5315C40.5174 41.8355 37.6744 41.459 34.7121 41.459C16.0355 41.459 2 56.2277 2 74.4461C2 92.6646 16.0318 108 34.7121 108C37.6744 108 40.5174 107.612 43.2073 106.889V94.3647C40.6367 95.5095 37.7715 96.1523 34.7121 96.1523Z"
                            fill="#001345"
                            stroke="#001345"
                            strokeWidth="3"
                        />
                        <Path
                            d="M102 59.7715C102 38.3496 84.9134 26.2116 69.8481 25.0878C83.3419 36.4032 83.1536 48.2245 83.1536 48.2245C87.1457 69.3105 68.6455 81.7497 68.6455 81.7497C76.7372 86.3376 93.3624 83.0588 94.0347 82.9237C98.9912 77.2196 102 70.1524 102 62.9653V59.7715Z"
                            fill="url(#paint0_linear)"
                        />
                        <Path
                            d="M68.6459 81.745C47.2027 75.4926 50.3264 50.031 50.3264 50.031L50.4493 29.4046C50.4032 29.4277 50.3802 29.4393 50.3802 29.4393L50.3725 0H32.2719C32.2719 0 31.9107 59.1992 32.9059 66.475C34.6541 79.2463 47.1988 95.5281 66.8939 95.5281C77.702 95.5281 87.538 90.3918 94.0313 82.9229C93.3628 83.058 76.7376 86.3329 68.6459 81.745Z"
                            fill="url(#paint1_linear)"
                        />
                        <Path
                            d="M83.15 48.223C83.15 48.223 83.3421 36.4055 69.8445 25.0863C67.0589 24.8777 64.3387 25.0476 61.8143 25.6038C55.7514 26.94 51.0639 29.1104 50.4491 29.4L50.3262 50.0265C68.104 39.0509 83.15 48.223 83.15 48.223Z"
                            fill="url(#paint2_linear)"
                        />
                    </Svg>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[globalStyles.inputStyle, { backgroundColor: inputBackgroundColor }]}
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
                                style={[globalStyles.inputStyle, { backgroundColor: inputBackgroundColor }]}
                                mode='outlined'
                                label='Password'
                                activeOutlineColor={AppStyles.color.secondaryColor}
                                outlineColor={AppStyles.color.secondaryColor}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholderTextColor={AppStyles.color.grey}
                                underlineColorAndroid="transparent"
                                right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
                            />
                        )}
                    />
                    {errors?.password && (
                        <HelperText type="error" visible={errors?.password}>
                            {errors?.password?.message}
                        </HelperText>
                    )}
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 170, marginVertical: 12 }}>
                        {/* <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Checkbox
                                        status={value ? 'checked' : 'unchecked'}
                                        onPress={() => onChange(!value)}
                                        color={AppStyles.color.tint}
                                    />
                                )}
                                name="myCheckbox"
                                defaultValue={false}
                            />
                            <Text > Remember me</Text>
                        </View> */}
                        <View style={styles.linkForgot}>
                            <Link to={{ screen: 'ForgetPasswordScreen' }}>
                                <Text style={globalStyles.linkStyle}> Forgot Password?</Text>
                            </Link>
                        </View>
                    </View>
                    <Button style={globalStyles.inputStyle} loading={loading} textColor={AppStyles.color.logTextbtn} buttonColor={AppStyles.color.tint} mode="contained-tonal" onPress={handleSubmit(onSubmit)}>
                        Log In
                    </Button>
                    <Snackbar
                        visible={visible}
                        onDismiss={() => setVisible(false)}
                        duration={3000}
                    >
                        Email & Password does not match with our record
                    </Snackbar>
                    <View style={styles.bottomText}>
                        <Text style={styles.footerText}>
                            by
                        </Text>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="51" height="12" viewBox="0 0 51 12" fill="none">
                            <Path d="M4.14044 10.4352C2.618 10.4352 1.47428 9.19402 1.47428 7.71906C1.47428 6.2441 2.618 5.04883 4.14044 5.04883C4.52767 5.04883 4.89033 5.12628 5.21569 5.26637V3.69482C4.87522 3.60733 4.51539 3.56 4.14044 3.56C1.7765 3.56 0 5.41649 0 7.70663C0 9.99677 1.77603 11.9245 4.14044 11.9245C4.51539 11.9245 4.87522 11.8757 5.21569 11.7849V10.2105C4.89033 10.3544 4.52767 10.4352 4.14044 10.4352Z" fill="#001345" />
                            <Path d="M12.9134 5.39279C12.1809 4.33055 10.9593 3.63641 9.51778 3.63641C7.15948 3.63641 5.3877 5.49271 5.3877 7.7826C5.3877 10.0725 7.15948 12 9.51778 12C10.9593 12 12.1809 11.2791 12.9134 10.1963C13.3793 9.50743 13.6483 8.67274 13.6483 7.7826C13.6479 6.89246 13.3793 6.06877 12.9134 5.39279ZM9.51778 10.5113C7.99897 10.5113 6.85798 9.27031 6.85798 7.79551C6.85798 6.3207 7.99897 5.12556 9.51778 5.12556C11.0366 5.12556 12.1776 6.32118 12.1776 7.79551C12.1776 9.26983 11.0366 10.5113 9.51778 10.5113Z" fill="#001345" />
                            <Path d="M24.614 10.5109C23.0909 10.5109 21.9466 9.26983 21.9466 7.79503C21.9466 6.32022 23.0909 5.12508 24.614 5.12508C25.2986 5.12508 25.9057 5.36698 26.3678 5.76663L22.4309 8.03358L23.098 9.18426L27.1312 6.89676L28.4361 6.15673C28.2585 5.72791 28.0118 5.3359 27.7076 4.99553C26.9611 4.16084 25.8707 3.63641 24.614 3.63641C22.249 3.63641 20.4717 5.49271 20.4717 7.7826C20.4717 10.0725 22.2485 12 24.614 12C26.8213 12 28.5155 10.3216 28.7323 8.23627L27.2673 8.0766C27.1326 9.42377 26.0394 10.5109 24.614 10.5109Z" fill="#001345" />
                            <Path d="M40.944 0H38.7891V12H40.944V0Z" fill="url(#paint0_linear_257_2584)" />
                            <Path d="M16.2319 5.04546C17.0295 5.04546 17.7232 5.3744 18.203 5.89888V4.03761C17.6235 3.73066 16.9553 3.55615 16.2319 3.55615C14.7869 3.55615 13.5624 4.25037 12.8281 5.31272C13.2885 5.97873 13.5563 6.78864 13.5638 7.66406H13.5672C13.5931 6.21348 14.7274 5.04546 16.2319 5.04546Z" fill="#001345" />
                            <Path d="M18.9004 0.098999C18.9004 0.098999 18.8981 7.42122 18.8981 7.71574C18.8981 9.1907 17.7543 10.4319 16.2319 10.4319C14.7175 10.4319 13.578 9.20313 13.5662 7.73869H13.5638C13.5568 8.61554 13.289 9.4374 12.8281 10.1173C13.5624 11.2002 14.7869 11.9212 16.2319 11.9212C18.584 11.9212 20.3539 10.0126 20.3714 7.73725H20.3747V0.098999H18.9004Z" fill="#001345" />
                            <Path d="M37.6179 7.49384C37.6179 4.84177 35.5179 3.33908 33.6664 3.19995C35.3248 4.60081 35.3017 6.0643 35.3017 6.0643C35.7923 8.67476 33.5186 10.2148 33.5186 10.2148C34.5131 10.7827 36.5564 10.3768 36.639 10.3601C37.2482 9.65393 37.6179 8.77899 37.6179 7.88923V7.49384Z" fill="url(#paint1_linear_257_2584)" />
                            <Path d="M33.5184 10.2143C30.8829 9.44023 31.2669 6.28807 31.2669 6.28807L31.282 3.73449C31.2763 3.73736 31.2735 3.7388 31.2735 3.7388L31.2725 0.0941772H29.0479C29.0479 0.0941772 29.0035 7.4231 29.1258 8.32385C29.3407 9.90495 30.8825 11.9207 33.3031 11.9207C34.6314 11.9207 35.8403 11.2848 36.6384 10.3601C36.5562 10.3768 34.5129 10.7823 33.5184 10.2143Z" fill="url(#paint2_linear_257_2584)" />
                            <Path d="M35.3008 6.06433C35.3008 6.06433 35.3244 4.60132 33.6655 3.19998C33.3231 3.17416 32.9888 3.1952 32.6785 3.26405C31.9334 3.42947 31.3573 3.69817 31.2817 3.73403L31.2666 6.2876C33.4516 4.92882 35.3008 6.06433 35.3008 6.06433Z" fill="url(#paint3_linear_257_2584)" />
                            <Path d="M44.3982 8.34165C44.2782 8.06817 44.2074 7.76553 44.197 7.44472V3.1972H42.0215V7.38639C42.0375 9.36432 43.2346 11.0085 44.9412 11.6411C45.1212 11.7075 45.3067 11.7625 45.497 11.8055C45.8224 11.8796 46.1615 11.9203 46.5114 11.9203C46.5293 11.9203 46.5473 11.9193 46.5652 11.9189C46.5506 11.9098 44.7566 10.6547 44.3982 8.34165Z" fill="url(#paint4_linear_257_2584)" />
                            <Path d="M48.8245 3.19762V7.38393V7.43844C48.8208 7.55844 48.808 7.6751 48.7882 7.78937C48.6612 10.4534 46.582 11.9078 46.5654 11.9193C49.0361 11.8901 50.9798 9.91026 51.0001 7.38346V3.19714H48.8245V3.19762Z" fill="url(#paint5_linear_257_2584)" />
                            <Path d="M46.5653 11.9207L46.5671 11.9198C46.5662 11.9198 46.5653 11.9198 46.5645 11.9198L46.5653 11.9207Z" fill="#CE2029" />
                            <Path d="M48.7877 7.78992C48.6366 8.65625 48.0364 9.34568 47.2336 9.60816C47.0362 9.67271 46.827 9.71143 46.6094 9.72052C46.5763 9.72195 46.5432 9.72291 46.5102 9.72291C45.5601 9.72291 44.7573 9.16304 44.3975 8.34213C44.7559 10.6547 46.5498 11.9103 46.564 11.9198C46.5645 11.9198 46.565 11.9198 46.5654 11.9198C46.5815 11.9083 48.6607 10.4539 48.7877 7.78992Z" fill="url(#paint6_linear_257_2584)" />
                            <Defs>
                                <LinearGradient id="paint0_linear_257_2584" x1="40.3315" y1="10.9735" x2="33.9018" y2="6.24006" gradientUnits="userSpaceOnUse">
                                    <Stop stop-color="#00A3FF" />
                                    <Stop offset="1" stop-color="#00529C" />
                                </LinearGradient>
                                <LinearGradient id="paint1_linear_257_2584" x1="34.838" y1="4.7272" x2="36.1248" y2="9.99263" gradientUnits="userSpaceOnUse">
                                    <Stop stop-color="#00A3FF" />
                                    <Stop offset="1" stop-color="#00529C" />
                                </LinearGradient>
                                <LinearGradient id="paint2_linear_257_2584" x1="34.4788" y1="10.909" x2="30.0744" y2="-0.691413" gradientUnits="userSpaceOnUse">
                                    <Stop stop-color="#00A3FF" />
                                    <Stop offset="1" stop-color="#00529C" />
                                </LinearGradient>
                                <LinearGradient id="paint3_linear_257_2584" x1="32.144" y1="4.72723" x2="35.6634" y2="5.94591" gradientUnits="userSpaceOnUse">
                                    <Stop stop-color="#00A3FF" />
                                    <Stop offset="1" stop-color="#00529C" />
                                </LinearGradient>
                                <LinearGradient id="paint4_linear_257_2584" x1="43.484" y1="5.01813" x2="45.1199" y2="11.241" gradientUnits="userSpaceOnUse">
                                    <Stop stop-color="#00529C" />
                                    <Stop offset="1" stop-color="#00A3FF" />
                                </LinearGradient>
                                <LinearGradient id="paint5_linear_257_2584" x1="49.7397" y1="11.1732" x2="45.922" y2="3.21608" gradientUnits="userSpaceOnUse">
                                    <Stop stop-color="#00A3FF" />
                                    <Stop offset="1" stop-color="#00529C" />
                                </LinearGradient>
                                <LinearGradient id="paint6_linear_257_2584" x1="46.3304" y1="8.90905" x2="46.037" y2="10.9993" gradientUnits="userSpaceOnUse">
                                    <Stop stop-color="#00A3FF" />
                                    <Stop offset="1" stop-color="#00529C" />
                                </LinearGradient>
                            </Defs>
                        </Svg>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    bottomText: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 160,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 16,
        marginRight: 5,
        color: '#001345'
    },
    linkForgot: {
        marginBottom: 20
    }
});


export default LoginScreen;