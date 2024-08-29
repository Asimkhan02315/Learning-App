import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';

const Splash = () => {

    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <Svg
                    width="102"
                    height="110"
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
                <Text style={styles.logoText}> Loading... </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDEDF3'
    },
    logoSection: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20
    },
    logoText: {
        color: '#0E2254',
        fontSize: 20,
        marginTop: 50
    },
    loader: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
    }
});
export default Splash