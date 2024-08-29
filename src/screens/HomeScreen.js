import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Modal, Portal, Searchbar, Icon, Divider } from 'react-native-paper'
import SearchScreen from './SearchScreen';
import LinearGradient from 'react-native-linear-gradient';
import { Tab, TabView, Button } from '@rneui/themed';
import TabViewComponent from '../components/TabViewComponent';
import GoalsModelBox, { ActiveModelBox, LeaderModelBox, TopModelBox } from '../components/ModelBox';

const HomeScreen = ({ navigation }) => {

  const [visible, setVisible] = useState(false);
  const [goalsVisible, setGoalsVisible] = useState(false);
  const [activeVisible, setActiveVisible] = useState(false);
  const [leaderVisible, setLeaderVisible] = useState(false);
  const [TopVisible, setTopVisible] = useState(false);

  const onBoxClick = (name) => {
    if (name == 'Goals') {
      setGoalsVisible(true)
    } else if (name == 'Active Days') {
      setActiveVisible(true)
    } else if (name == 'Leaderboard') {
      setLeaderVisible(true)
    } else if (name == 'Top 10') {
      setTopVisible(true)
    }
  }

  const boxView = (name, icon) => {
    return (
      <Pressable onPress={() => onBoxClick(name)}>
        <LinearGradient style={styles.surface} colors={['#005EAA', '#00A0FB']}>
          <View
            style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Icon
              color='#fff'
              source={icon}
              size={26}
            />
            <Text style={styles.buttonText}>
              {name}
            </Text>
          </View>
        </LinearGradient>
      </Pressable>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.serachView}>
        <Pressable onPress={() => { setVisible(true) }}>
          <Searchbar
            placeholder="Search for courses"
            value={''}
            readOnly={true}
            style={styles.searchInput}
          />
        </Pressable>
      </View>
      <ScrollView>
        <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
          <Text style={styles.title}>Activity Insights </Text>
          <View style={styles.rowView}>
            {boxView('Goals', "bullseye-arrow")}
            {boxView('Active Days', "calendar-star")}
          </View>
          <View style={styles.rowView}>
            {boxView('Leaderboard', "chart-box-plus-outline")}
            {boxView('Top 10', "file-certificate")}
          </View>
        </View>
        <View style={styles.listView}>
          <Text style={styles.title}>Continue Learning, Susan </Text>
          <View style={styles.subView}>
            <Text style={styles.listText}>Data Engineering for Beginners </Text>
            <TouchableOpacity onPress={() => navigation.navigate("CourseVideoPlayerScreen")}>
              <View style={{ flexDirection: 'row', justifyContent: 'start', marginVertical: 20, alignItems: 'center', }}>

                <Text style={{ color: '#006DBE', fontSize: 14, marginLeft: 20, }}>Play Video </Text>
                <Icon
                  color='#006DBE'
                  source='chevron-right'
                  size={22}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.subView}>
            <Text style={styles.listText}>Java Assessment</Text>
            <TouchableOpacity onPress={() => navigation.navigate("AssessmentScreen")}>
              <View style={{ flexDirection: 'row', justifyContent: 'start', marginVertical: 20, alignItems: 'center', }}>
                <Text style={{ color: '#006DBE', fontSize: 14, marginLeft: 20, }}>Play Assessment </Text>
                <Icon
                  color='#006DBE'
                  source='chevron-right'
                  size={22}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 25 }}>
            <Text style={[styles.title, { textAlign: 'center', marginVertical: 5 }]}>Recommended For You</Text>
            <Divider style={{ marginVertical: 5 }} />
            <TabViewComponent />
          </View>
          <View style={{ marginVertical: 30 }}>
            <Text style={[styles.title, { marginVertical: 5 }]}>Self Assessments</Text>
            <View style={{ padding: 25 }} >
              <Text style={{ color: '#0E2254', lineHeight: 16, fontSize: 15, fontWeight: '600', fontFamily: 'Poppins' }}>
                .NET Assessment
              </Text>
              <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 21, marginVertical: 15, }}>
                Test Your .NET Knowledge with the .NET Assessment.
              </Text>
              <Button
                style={{
                  fontWeight: 'bold',
                  width: ''
                }}
                containerStyle={{ width: 150, marginVertical: 10, }}
                title="Start "
              />
            </View>
          </View>
          <Text style={{ textAlign: 'center', marginVertical: 5, fontSize: 12, fontWeight: '700', lineHeight: 25, color: '#000' }}>codeblu Powered by asim © 2024</Text>
        </View>
      </ScrollView>
      {/* here start all model */}
      <Portal>
        <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={{ backgroundColor: 'white', flex: 1 }}>
          <SearchScreen setSearchEnable={setVisible} />
        </Modal>
        <GoalsModelBox goalsVisible={goalsVisible} setGoalsVisible={setGoalsVisible} />
        <ActiveModelBox activeVisible={activeVisible} setActiveVisible={setActiveVisible} />
        <LeaderModelBox leaderVisible={leaderVisible} setLeaderVisible={setLeaderVisible} />
        <TopModelBox TopVisible={TopVisible} setTopVisible={setTopVisible} />
      </Portal>
    </View>
  )
}

const styles = StyleSheet.create({
  serachView: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#D7EEFD'
  },
  searchInput: {
    fontSize: 14,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  surface: {
    padding: 8,
    Height: 'auto',
    width: 'auto',
    minWidth: '45%',
    minHeight: 85,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 25,
    color: "#0E2254"
  },
  rowView: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
    borderRadius: 3,
    justifyContent: 'space-between'
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  listText: {
    lineHeight: 26,
    fontSize: 15,
    marginLeft: 20,
    color: "#0E2254"
  },
  listView: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  subView: {
    flexDirection: 'column',
    borderWidth: 0.8,
    borderColor: '#BAC6D4',
    paddingVertical: 10,
    marginVertical: 8
  },
  Text1: {
    textAlign: "center",
    color: "#0E2254",
    fontSize: 16,
    fontWeight: "600"
  }
})

export default HomeScreen


