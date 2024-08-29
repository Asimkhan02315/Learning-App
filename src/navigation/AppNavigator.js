/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Splash from '../components/Splash';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyLearningScreen from '../screens/MyLearningScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogoutScreen from '../screens/LogoutScreen';
import DrawerContainer from '../components/DrawerContainer';
import HomeScreen from '../screens/HomeScreen';
import CertficateScreen from '../screens/CertficateScreen';
import SearchScreen from '../screens/SearchScreen';
import { Icon, } from 'react-native-paper';
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import CoursesScreen from '../screens/CoursesScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import CourseVideoPlayerScreen from '../screens/CourseVideoPlayerScreen';
import QuizScreen from '../screens/QuizScreen';
import AssessmentScreen from '../screens/AssessmentScreen';
import TestQuestionScreen from '../screens/TestQuestionScreen';
import ScoredScreen from '../screens/ScoredScreen';
import RetestScreen from '../screens/RetestScreen';
import EnrollNowScreen from '../screens/EnrollNowScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomHeader = () => (
  <View >
    <Svg xmlns="http://www.w3.org/2000/svg" width="85" height="20" viewBox="0 0 85 20" fill="none">
      <Path d="M6.90074 17.392C4.36333 17.392 2.45713 15.3234 2.45713 12.8651C2.45713 10.4068 4.36333 8.41473 6.90074 8.41473C7.54611 8.41473 8.15056 8.54382 8.69283 8.7773V6.15806C8.12537 6.01224 7.52565 5.93335 6.90074 5.93335C2.96083 5.93335 0 9.0275 0 12.8444C0 16.6613 2.96005 19.8742 6.90074 19.8742C7.52565 19.8742 8.12537 19.7929 8.69283 19.6415V17.0175C8.15056 17.2573 7.54611 17.392 6.90074 17.392Z" fill="#001345" />
      <Path d="M21.5219 8.98797C20.301 7.21757 18.2651 6.06067 15.8625 6.06067C11.932 6.06067 8.979 9.15449 8.979 12.971C8.979 16.7875 11.932 20 15.8625 20C18.2651 20 20.301 18.7985 21.5219 16.9938C22.2984 15.8457 22.7467 14.4545 22.7467 12.971C22.746 11.4874 22.2984 10.1146 21.5219 8.98797ZM15.8625 17.5189C13.3311 17.5189 11.4295 15.4505 11.4295 12.9925C11.4295 10.5345 13.3311 8.54258 15.8625 8.54258C18.3938 8.54258 20.2955 10.5353 20.2955 12.9925C20.2955 15.4497 18.3938 17.5189 15.8625 17.5189Z" fill="#001345" />
      <Path d="M41.0241 17.5181C38.4855 17.5181 36.5784 15.4497 36.5784 12.9917C36.5784 10.5337 38.4855 8.54178 41.0241 8.54178C42.165 8.54178 43.1768 8.94494 43.9469 9.61104L37.3855 13.3893L38.4973 15.3071L45.2194 11.4946L47.3942 10.2612C47.0981 9.5465 46.6871 8.89315 46.18 8.32586C44.9359 6.93472 43.1186 6.06067 41.0241 6.06067C37.0823 6.06067 34.1201 9.15449 34.1201 12.971C34.1201 16.7875 37.0815 20 41.0241 20C44.7028 20 47.5264 17.2026 47.8879 13.7271L45.4461 13.461C45.2217 15.7063 43.3997 17.5181 41.0241 17.5181Z" fill="#001345" />
      <Path d="M68.24 0H64.6484V19.9999H68.24V0Z" fill="url(#paint0_linear_17_4523)" />
      <Path d="M27.0533 8.40918C28.3826 8.40918 29.5388 8.95741 30.3384 9.83155V6.72943C29.3727 6.21785 28.2591 5.927 27.0533 5.927C24.645 5.927 22.6042 7.08403 21.3804 8.85462C22.1477 9.96463 22.594 11.3145 22.6066 12.7735H22.6121C22.6554 10.3559 24.5458 8.40918 27.0533 8.40918Z" fill="#001345" />
      <Path d="M31.5009 0.165039C31.5009 0.165039 31.497 12.3688 31.497 12.8596C31.497 15.3179 29.5907 17.3865 27.0533 17.3865C24.5293 17.3865 22.6302 15.3386 22.6105 12.8979H22.6066C22.5948 14.3593 22.1485 15.7291 21.3804 16.8622C22.6042 18.667 24.645 19.8687 27.0533 19.8687C30.9736 19.8687 33.9234 16.6877 33.9525 12.8955H33.958V0.165039H31.5009Z" fill="#001345" />
      <Path d="M62.697 12.4897C62.697 8.06962 59.1971 5.56513 56.1111 5.33325C58.8752 7.66801 58.8366 10.1072 58.8366 10.1072C59.6543 14.4579 55.8647 17.0246 55.8647 17.0246C57.5222 17.9712 60.9278 17.2947 61.0655 17.2668C62.0808 16.0899 62.697 14.6317 62.697 13.1487V12.4897Z" fill="url(#paint1_linear_17_4523)" />
      <Path d="M55.8648 17.0238C51.4724 15.7337 52.1123 10.4801 52.1123 10.4801L52.1374 6.22418C52.128 6.22896 52.1233 6.23135 52.1233 6.23135L52.1217 0.156982H48.414C48.414 0.156982 48.34 12.3719 48.5438 13.8731C48.9019 16.5083 51.4716 19.8678 55.506 19.8678C57.7199 19.8678 59.7347 18.808 61.0648 17.2669C60.9279 17.2948 57.5223 17.9705 55.8648 17.0238Z" fill="url(#paint2_linear_17_4523)" />
      <Path d="M58.8355 10.1072C58.8355 10.1072 58.8748 7.66886 56.11 5.3333C55.5394 5.29027 54.9821 5.32533 54.4651 5.44008C53.2231 5.71579 52.2629 6.16361 52.137 6.22338L52.1118 10.4793C55.7534 8.2147 58.8355 10.1072 58.8355 10.1072Z" fill="url(#paint3_linear_17_4523)" />
      <Path d="M73.9963 13.9028C73.7964 13.447 73.6784 12.9426 73.661 12.4079V5.32874H70.0352V12.3107C70.0619 15.6073 72.0571 18.3476 74.9014 19.4018C75.2013 19.5126 75.5106 19.6042 75.8278 19.676C76.37 19.7995 76.9351 19.8672 77.5183 19.8672C77.5482 19.8672 77.5781 19.8656 77.608 19.8648C77.5836 19.8497 74.5937 17.7579 73.9963 13.9028Z" fill="url(#paint4_linear_17_4523)" />
      <Path d="M81.3736 5.32941V12.3066V12.3974C81.3673 12.5975 81.346 12.7919 81.313 12.9823C81.1013 17.4224 77.6359 19.8464 77.6084 19.8655C81.7262 19.8169 84.9656 16.5171 84.9995 12.3058V5.32861H81.3736V5.32941Z" fill="url(#paint5_linear_17_4523)" />
      <Path d="M77.6083 19.8677L77.6111 19.8663C77.6097 19.8663 77.6083 19.8663 77.6069 19.8663L77.6083 19.8677Z" fill="#CE2029" />
      <Path d="M81.3132 12.9833C81.0613 14.4272 80.061 15.5762 78.723 16.0137C78.3941 16.1213 78.0454 16.1858 77.6826 16.2009C77.6275 16.2033 77.5724 16.2049 77.5173 16.2049C75.9338 16.2049 74.5958 15.2718 73.9961 13.9036C74.5935 17.758 77.5834 19.8505 77.607 19.8664C77.6078 19.8664 77.6086 19.8664 77.6094 19.8664C77.6361 19.8473 81.1015 17.4233 81.3132 12.9833Z" fill="url(#paint6_linear_17_4523)" />
      <Defs>
        <LinearGradient id="paint0_linear_17_4523" x1="67.2192" y1="18.2891" x2="56.503" y2="10.4001" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#00A3FF" />
          <Stop offset="1" stop-color="#00529C" />
        </LinearGradient>
        <LinearGradient id="paint1_linear_17_4523" x1="58.0639" y1="7.87867" x2="60.2086" y2="16.6544" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#00A3FF" />
          <Stop offset="1" stop-color="#00529C" />
        </LinearGradient>
        <LinearGradient id="paint2_linear_17_4523" x1="57.4655" y1="18.1817" x2="50.1248" y2="-1.15233" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#00A3FF" />
          <Stop offset="1" stop-color="#00529C" />
        </LinearGradient>
        <LinearGradient id="paint3_linear_17_4523" x1="53.5741" y1="7.87872" x2="59.4399" y2="9.90985" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#00A3FF" />
          <Stop offset="1" stop-color="#00529C" />
        </LinearGradient>
        <LinearGradient id="paint4_linear_17_4523" x1="72.4727" y1="8.36361" x2="75.1992" y2="18.735" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#00529C" />
          <Stop offset="1" stop-color="#00A3FF" />
        </LinearGradient>
        <LinearGradient id="paint5_linear_17_4523" x1="82.8988" y1="18.622" x2="76.5361" y2="5.36018" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#00A3FF" />
          <Stop offset="1" stop-color="#00529C" />
        </LinearGradient>
        <LinearGradient id="paint6_linear_17_4523" x1="77.2176" y1="14.8485" x2="76.7287" y2="18.3322" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#00A3FF" />
          <Stop offset="1" stop-color="#00529C" />
        </LinearGradient>
      </Defs>
    </Svg>
  </View>
);

const ProfileIcon = ({ navigation }) => {

  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleList} style={styles.iconContainer}>
        <Icon source="dots-horizontal" size={35} color="#160B5C" />
      </TouchableOpacity>
      {showList && (
        <View style={styles.listContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')} style={styles.listItem}>
            <Text style={{ color: "#0E2254", fontWeight: "600" }}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ChangePasswordScreen')} style={styles.listItem}>
            <Text style={{ color: "#0E2254", fontWeight: "600" }}>Change Password</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const DrawerStack = () => (
  <Drawer.Navigator
    // initialRouteName="MyLearning"
    screenOptions={({ navigation }) => ({
      drawerStyle: { width: 390, },
      drawerPosition: 'left',
      // headerShown: false,
      headerLeft: () => <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ paddingLeft: 20 }}>
        <Icon
          source="view-grid"
          size={22}
          color="#160B5C"
        />
      </TouchableOpacity>
    })}
    drawerContent={(props) => <DrawerContainer {...props} />}
  >
    <Drawer.Screen options={{
      title: 'codeblu',
      headerStyle: {
        backgroundColor: '#D7EEFD',
      },
      headerTintColor: '#001345',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
      },
      headerTitle: () => <CustomHeader />,
    }}
      name="Home" component={HomeScreen} />
    <Drawer.Screen
      options={{
        title: 'Courses',
        headerStyle: {
          backgroundColor: '#D7EEFD',
        },
        headerTintColor: '#001345',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        // headerShown: false,
        // headerRight: () => <SearchbarIcon />,
      }}
      name="Courses" component={CoursesScreen}
    />
    <Drawer.Screen
      options={{
        title: 'My Learnings',
        headerStyle: {
          backgroundColor: '#D7EEFD',
        },
        headerTintColor: '#001345',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        // headerShown: false,
        // headerRight: () => <SearchbarIcon />,
      }}
      name="MyLearning" component={MyLearningScreen} />
    <Drawer.Screen
      options={({ navigation }) => {
        return (
          {
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#D7EEFD',
            },
            headerTintColor: '#001345',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
            },
            headerRight: () => <ProfileIcon navigation={navigation} />,
          }
        )
      }}
      name="Profile" component={ProfileScreen} />
    <Drawer.Screen
      options={{
        headerStyle: {
          backgroundColor: '#D7EEFD',
        },
        headerTintColor: '#001345',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
      }}
      name="Certification" component={CertficateScreen} />
    <Drawer.Screen name="LogoutScreen" component={LogoutScreen} />
  </Drawer.Navigator>
)

const AppNavigator = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Splash />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName="WelcomeScreen"
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
        <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="CourseVideoPlayerScreen" component={CourseVideoPlayerScreen}
          options={{
            headerShown: true,
            // headerVisible: false,
            // headerMode: 'none',
            // headerTitle: null,
            // headerLeft: () => (
            //   <Icon 
            //     name="chevron-left"
            //     size={24} 
            //     color="#001345" 
            //     style={{ marginLeft: 10 }} 
            //     onPress={() => navigation.goBack()} 
            //   />
            // ),
          }}
        />
        <Stack.Screen name="QuizScreen" component={QuizScreen}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen name="AssessmentScreen" component={AssessmentScreen}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen name="TestQuestionScreen" component={TestQuestionScreen}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen name="ScoredScreen" component={ScoredScreen}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen name="RetestScreen" component={RetestScreen}
          options={{
            headerShown: true
          }}
        />

        <Stack.Screen name="EnrollNowScreen" component={EnrollNowScreen}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: 'Edit Profile',
            headerStyle: {
              backgroundColor: '#D7EEFD',
            },
            headerTintColor: '#001345',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
            },
          }}
          name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: 'Change Password',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#001345',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
            },
          }}
          name="ChangePasswordScreen" component={ChangePasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  listContainer: {
    position: 'absolute',
    marginHorizontal: -100,
    top: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listItem: {
    paddingVertical: 5,
  },
});

export default AppNavigator