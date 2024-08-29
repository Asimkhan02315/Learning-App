import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { CheckBox, ListItem } from '@rneui/themed';
import { RadioButton } from 'react-native-paper';
import { Card, Button, Icon, Image } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { AppIcon } from '../utils/AppStyles';
import RBSheet from "react-native-raw-bottom-sheet";
import SearchScreen from './SearchScreen';
import LinearGradient from 'react-native-linear-gradient';

const CoursesScreen = ({ navigation }) => {

  const refRBSheet = useRef();
  const [isOpen, setIsOpen] = useState(false)
  const [checked, setChecked] = useState('');
  const [searchEnable, setSearchEnable] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setSearchEnable(true)}>
          <Icon name="search" size={30} style={{ paddingHorizontal: 15, paddingVertical: 15 }} color="#0E2254" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const toggleBottomSheet = () => {
    if (isOpen == true) {
      refRBSheet.current.close()
    } else {
      refRBSheet.current.open()
    }
  }

  const options = [
    { label: 'Latest courses', value: 'Latest courses' },
    { label: 'Courses by owner', value: 'Courses by owner' },
    { label: 'Courses by codeblu', value: 'Courses by codeblu' },
    { label: 'Lectures: Low to High', value: 'Lectures: Low to High' },
    { label: 'Lectures: High to Low', value: 'Lectures: High to Low' },
    { label: 'Hours of content: Low to High', value: 'Hours of content: Low to High' },
    { label: 'Hours of content: High to Low', value: 'Hours of content: High to Low' },
  ];

  return (
    <ScrollView>
      {searchEnable && (
        <SearchScreen setSearchEnable={setSearchEnable} />
      )}
      <View style={styles.header}>
        <Text style={styles.headerText}>All Courses</Text>
        <TouchableOpacity
          onPress={() => toggleBottomSheet()}
          style={styles.button}
        >
          <View style={{ flexDirection: "row", borderColor: "#BAC6D4", borderWidth: 1.5, fontSize: 18, bottom: 15, padding: 5 }}>
            <Text style={{ textAlign: "center", padding: 5, color: '#0E2254', fontWeight: "500" }}>Sort by</Text>
            <FastImage
              style={{ width: 11, height: 15, justifyContent: "center", textAlign: "center", alignContent: "center", top: 8 }}
              source={AppIcon.images.arrowLogo}
            />
          </View>

        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        height={420}
        closeOnDragDown={true}
        closeOnPressMask={true}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          container: {
            backgroundColor: '#fff',
            borderRadius: 40,
            borderWidth: 1,
            borderColor: '#ccc'
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '700', color: '#000', paddingVertical: 10, paddingHorizontal: 15 }}>Sort By </Text>
        {options.map((item, index) => (
          <ListItem
            style={{ marginVertical: -14 }}
            key={index}
          >
            <ListItem.Content>
              <ListItem.Title > {item.label}  </ListItem.Title>
            </ListItem.Content>
            <ListItem.Content right>
              <ListItem.Title >
                {/* <RadioButton
                style={{ 
                  backgroundColor: checked === item.value ? "#006CBC" : "#FFFFFF" 
                }}
                  value={item.value}
                  status={checked === item.value ? 'checked' : 'unchecked'}
                  onPress={() => setChecked(item.value)}
                /> */}
                <CheckBox
                  center
                  // title={item.label}
                  checkedIcon="check-circle-o"
                  uncheckedIcon="circle-o"
                  checked={checked === item.value ? true : false}
                  onPress={() => setChecked(item.value)}
                />
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </RBSheet>
      <View style={styles.cardsContainer}>
        <CourseCardComponent navigation={navigation} />
      </View>
    </ScrollView>
  );
}

export const CourseCardComponent = ({ styleCard, navigation }) => {

  return (
    <>
      {[...Array(6)].map((_, index) => (
        <Card key={index} containerStyle={[styles.cardContainer, styleCard]}>
          <Card.Title style={{ backgroundColor: "#0E2254", color: "#fff", width: 50, height: 20, fontSize: 10, marginBottom: -5, marginLeft: 5 }}>Latest</Card.Title>
          <View style={styles.helloWorldContainer}>
            <Card.Image source={require('../assests/icons/image1.png')}
              style={styles.cardImage}
            />
            <Button
              onPress={() => navigation.navigate("EnrollNowScreen")}
              // icon={<Icon name="code" color="#ffffff" />}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: index % 2 == 0 ? ["#0065B4", "#009CF6"] : ["#FF9D0A", "#CE7C00"],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
              buttonStyle={styles.buttonStyle}
              title={index % 2 == 0 ? "by codeblu" : 'by Circle'}
            />
            <Text style={styles.helloWorldText}>
              Excel VBA Userforms for absolute Beginners
            </Text>
            <View style={{ flexDirection: "row", left: 20 }}>
              <FastImage
                style={{ width: 11, height: 15, right: 10, bottom: -4 }}
                source={AppIcon.images.clockLogo}
              />
              <Text style={styles.Text2}>
                19 Lectures
              </Text>
            </View>
            <View style={{ flexDirection: "row", left: 20 }}>
              <FastImage
                style={{ width: 11, height: 15, right: 10, bottom: -4 }}
                source={AppIcon.images.timeLogo}
              />
              <Text style={styles.Text2}>
                1.5 Hrs
              </Text>
            </View>
          </View>
        </Card>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    marginTop: 30,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0E2254",
  },
  button: {
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 0,
    padding: 0,
    margin: 0,
    left: 5,
    // marginVertical: -30
  },
  cardContainer: {
    width: '40%',
    marginBottom: 8,
    // paddingHorizontal: -20,
    left: 5,
    padding: 0,
    margin: 15,
    borderColor: "#0E2254",
    borderWidth: 0.5,
  },
  cardImage: {
    width: '100%',
    height: 100,
    // borderRadius: 10
  },
  helloWorldContainer: {
    padding: 5,
  },
  helloWorldText: {
    marginBottom: 10,
    left: 8,
    color: '#0E2254',
    fontSize: 18,
    // fontWeight:"bold"
    fontWeight: "700",
  },
  Text2: {
    marginBottom: 0,
    color: '#7A7B93',
    fontSize: 15,
    fontWeight: "bold"
  },
  buttonStyle: {
    margin: 10,
    marginVertical: 25,
    paddingVertical: 3,
    width: "100%",
    marginBottom: 10,
    marginTop: 0,
    right: 10
  },
});

export default CoursesScreen;
