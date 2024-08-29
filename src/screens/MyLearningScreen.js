import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native'
import { Button, Icon, SearchBar,Divider } from 'react-native-elements';
import { Searchbar, ProgressBar,  } from 'react-native-paper'
import FastImage from 'react-native-fast-image'
import { AppIcon } from '../utils/AppStyles'
import Timeline from 'react-native-timeline-flatlist';
import RBSheet from "react-native-raw-bottom-sheet";
import { CheckBox, ListItem } from '@rneui/themed';

const MyLearningScreen = ({ navigation }) => {

  

  const flatListRef = useRef(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const tabsData = [
    { id: 1, title: 'Courses' },
    { id: 2, title: 'Journeys' },
    { id: 3, title: 'Assessments' },
    { id: 4, title: 'Meetings' },
  ]

  const tabClick = (index) => {
    setActiveTabIndex(index)
    flatListRef.current.scrollToIndex({ index: index, animated: true });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ref={flatListRef}
          data={tabsData}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ paddingHorizontal: 20 }}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={{ paddingVertical: 10, paddingRight: 5, alignItems: 'center', }}>
                {index == activeTabIndex ? (
                  <>
                    <Text style={styles.activeTabs}> {item.title}</Text>
                    <LinearGradient colors={['#0065B4', '#009CF6']} style={styles.linearGradient}>
                    </LinearGradient>
                  </>
                ) : (
                  <TouchableOpacity onPress={() => tabClick(index)}>
                    <Text style={styles.InActiveTabs}> {item.title}</Text>
                  </TouchableOpacity>
                )}
              </View>
            )
          }}
        />
      </View>
      {activeTabIndex == 0 && (
        <CoursesView navigation={navigation} />
      )}
      {activeTabIndex == 1 && (
        <JourneysView />
      )}
      {activeTabIndex == 2 && (
        <AssessmentView navigation={navigation} />
      )}
      {activeTabIndex == 3 && (
        <MeetingsView />
      )}
    </SafeAreaView>
  )
}

export const MeetingsView = () => {

  const MeetingsData = [
    {
      title: '111 meet',
      Scheduledon: '23-07-2021, 5:09 PM',
      CreatedBy: ' Shailesh Sakat',
      Passcode: '28df45sde1',
      isJoin: true,
      isExpired: false,
    },
    {
      title: 'Super admin journey meet',
      Scheduledon: '2-08-2021, 5:09 PM',
      CreatedBy: ' Shailesh Sakat',
      Passcode: '28df45sde1',
      isJoin: false,
      isExpired: false,
    },
    {
      title: 'Test meet all',
      Scheduledon: '2-08-2021, 5:09 PM',
      CreatedBy: ' Shailesh Sakat',
      Passcode: '28df45sde1',
      isJoin: true,
      isExpired: true,
    },
  ]



  return (
    <View style={{ flex: 1 }}>
      <View style={styles.RowBox}>
        <Text style={styles.mainTitle}> Your Meetings</Text>

        <View style={styles.badgeBox}>
          <Text style={styles.mainTitle}>1</Text>
        </View>
      </View>
      {MeetingsData?.length == 0 && (
        <EmptyView iconName={AppIcon.images.empty4} label={'No Meetings Added'} />
      )}

      <ScrollView style={{ marginVertical: 10, paddingHorizontal: 30 }} >
        {MeetingsData?.length !== 0 && MeetingsData.map((item, index) => {
          return (
            <>
              <View style={styles.CardBox} key={index}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={{ paddingTop: 10 }}>
                  <Text style={{ ...styles.statusTitle, paddingVertical: 7, fontSize: 16, }}>Scheduled on : <Text style={{ color: '#000' }}>{item.Scheduledon}</Text></Text>
                  <Text style={{ ...styles.statusTitle, paddingVertical: 7, fontSize: 16, }}>Created By : <Text style={{ color: '#000' }}>{item.CreatedBy}</Text></Text>
                  {item?.isExpired && (
                    <Text style={{ ...styles.cardTitle, color: '#C72929', paddingVertical: 10 }} > Live Training Expired</Text>
                  )}
                  {!item?.isExpired && (
                    <>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 15, alignItems: 'center' }}>
                        <Text style={{ ...styles.statusTitle, paddingVertical: 7, fontSize: 16, }}>Passcode on : <Text style={{ color: '#000' }}>{item.Passcode}</Text></Text>
                        <Icon
                          name={'content-copy'}
                          size={17}
                          color='#000' />
                      </View>
                      <Button
                        style={{
                          fontWeight: 'bold',
                        }}
                        buttonStyle={{
                          backgroundColor: '#00A0FB',
                          borderWidth: 2,
                          padding: 12,
                          borderColor: 'white',
                          borderRadius: 5,
                        }}
                        containerStyle={{ width: 150 }}
                        title="Join "
                        disabled={!item.isJoin}
                      />
                    </>
                  )}
                </View>
              </View>
            </>
          )
        })}
      </ScrollView>
    </View >
  )
}

export const EmptyView = ({ iconName, label }) => {

  return (

    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <FastImage
        style={{ width: 100, height: 100 }}
        source={iconName}
      />
      <Text style={{ marginTop: 20 }}> {label}</Text>
    </View>
  )
}

export const AssessmentView = ({ navigation }) => {

  const assessmentData = [
    {
      title: 'Augmented Reality Assessment',
      images: AppIcon.images.imageAssign
    },
    {
      title: 'HTML Assessment',
      images: AppIcon.images.imageAssign1
    },
  ]

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.RowBox}>
        <Text style={styles.mainTitle}> Your Assessment</Text>

        <View style={styles.badgeBox}>
          <Text style={styles.mainTitle}>1</Text>
        </View>
      </View>
      {
        assessmentData?.length == 0 && (
          <EmptyView iconName={AppIcon.images.empty3} label={'No Assessment Added'} />
        )}
      <ScrollView style={{ marginVertical: 10, paddingHorizontal: 30 }}>
        {assessmentData?.map((item, index) => (
          <TouchableOpacity onPress={() => navigation.navigate("AssessmentScreen")}>
            <View style={{ ...styles.CardBox, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} key={index}>
              <FastImage
                style={{ width: 100, height: 70, borderRadius: 10 }}
                source={item.images}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{ ...styles.cardTitle, fontSize: 19, lineHeight: 28, flexWrap: 'wrap' }}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export const JourneysView = () => {

  const [openAccordingIndex, setOpenAccordingIndex] = useState(0)
  const journeysData = [
    {
      title: 'Go Language Basics',
      expDate: '31-08-2022',
      progressValue: 0.14,
      statusLabel: '14% completed',
      accordingData: [
        {
          id: 1,
          title: 'The Go Programming Language Guide - Beginner',
          progressValue: 0.14,
          statusLabel: '14% completed',
          Scheduledon: null,
          CreatedBy: null,
          Passcode: null,
          isJoin: false,
          isStart: false,
          isDisable: false,
          isDeleted: false
        },
        {
          id: 2,
          title: 'Nik depart journey meet',
          progressValue: null,
          statusLabel: null,
          Scheduledon: '23-07-2021, 5:09 PM',
          CreatedBy: ' Shailesh Sakat',
          Passcode: '28df45sde1',
          isJoin: true,
          isDeleted: false,
          isStart: false,
          isDisable: false,
        },
        {
          id: 3,
          title: 'The Go Programming Language Guide - Beginner',
          progressValue: null,
          statusLabel: null,
          Scheduledon: null,
          CreatedBy: null,
          Passcode: null,
          isJoin: false,
          isStart: false,
          isDisable: false,
          isDeleted: true
        }
      ]
    },
    {
      title: 'Frontend Development',
      expDate: '02-09-2022',
      progressValue: 0.14,
      statusLabel: '14% completed',
      accordingData: [
        {
          id: 1,
          title: 'The Go Programming Language Guide - Beginner',
          progressValue: 0.14,
          statusLabel: '14% completed',
          Scheduledon: null,
          CreatedBy: null,
          Passcode: null,
          isJoin: false,
          isStart: false,
          isDisable: false,
          isDeleted: false
        },
        {
          id: 2,
          title: 'The Go Programming Language Guide - Beginner',
          progressValue: null,
          statusLabel: null,
          Scheduledon: '23-07-2021, 5:09 PM',
          CreatedBy: ' Shailesh Sakat',
          Passcode: '28df45sde1',
          isJoin: true,
          isStart: true,
          isDisable: false,
          isDeleted: false
        },
        {
          id: 3,
          title: 'The Go Programming Language Guide - Beginner',
          progressValue: null,
          statusLabel: null,
          Scheduledon: null,
          CreatedBy: null,
          Passcode: null,
          isJoin: false,
          isStart: true,
          isDisable: true,
          isDeleted: true
        }
      ]
    },

  ]

  const renderDetail = (item, sectionID, rowID) => {
    // const { title, description, time, status, progressValue, statusLabel } = rowData;
    return (
      <View style={{ padding : 0, margin : 0}}>
        {item?.isDeleted == true ? (
            <Text style={{ fontSize: 16, color: 'gray', fontWeight: '500' , paddingLeft : 10 }}>Live training has been permanently deleted</Text>
        ) : (
          <>
            <Text style={styles.cardTitle}>{item.title}</Text>
            {item?.progressValue !== null && (
              <>
                <Text style={{ ...styles.statusTitle, paddingVertical: 10 }}>{item.statusLabel}</Text>
                <ProgressBar style={{ backgroundColor: '#DDE5EE', height: 8, borderRadius: 20 }} progress={item.progressValue} color={'#1ABB47'} />
              </>
            )}

            {item?.progressValue == null && (
              <>
                <Text style={{ ...styles.statusTitle, paddingVertical: 7, fontSize: 15, }}>Scheduled :<Text style={{ color: '#000' }}>{item.Scheduledon}</Text></Text>
                <Text style={{ ...styles.statusTitle, paddingVertical: 7, fontSize: 16, }}>Created By : <Text style={{ color: '#000' }}>{item.CreatedBy}</Text></Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 15, alignItems: 'center' }}>
                  <Text style={{ ...styles.statusTitle, paddingVertical: 7, fontSize: 16, }}>Passcode on : <Text style={{ color: '#000' }}>{item.Passcode}</Text></Text>
                  <Icon
                    name={'content-copy'}
                    size={17}
                    color='#000' />
                </View>
                <Button
                  style={{
                    fontWeight: 'bold',

                  }}
                  buttonStyle={{
                    backgroundColor: '#00A0FB',
                    borderWidth: 2,
                    padding: 12,
                    borderColor: 'white',
                    borderRadius: 5,
                  }}
                  containerStyle={{ width: 150 }}
                  title="Join "
                  disabled={!item.isJoin}
                />
              </>
            )}


          </>
        )}
        {/* <Text style={styles.cardTitle}>{item.title}</Text> */}
      </View>
    );
  };



  return (
    <View style={{ flex: 1 }}>
      <View style={styles.RowBox}>
        <Text style={styles.mainTitle}> Your Journeys</Text>

        <View style={styles.badgeBox}>
          <Text style={styles.mainTitle}>1</Text>
        </View>
      </View>

      {journeysData?.length == 0 && (
        <EmptyView iconName={AppIcon.images.empty2} label={'No Journeys Added'} />
      )}

      <ScrollView style={{ marginVertical: 10, paddingHorizontal: 30 }} >
        {journeysData?.length !== 0 && journeysData.map((item, index) => {
          const timelineData = item.accordingData.map((item, indexIcon) => (
            {
              ...item,
            // time: item.Scheduledon || '', // Use Scheduledon as time
            // title: item.title,
            // description: `Created by: ${item.CreatedBy || 'Unknown'}`,
            // status: item.isJoin ? 'join' : (item.isStart ? 'start' : (item.isDisable ? 'disable' : (item.isDeleted ? 'deleted' : ''))),
            // progressValue: item.progressValue || 0,
            // statusLabel: item.statusLabel || '',
            icon: <Text style={{ color: '#000', fontWeight : '500' }}>{indexIcon + 1}</Text>
          }));
          return (
            <>
              <View style={styles.CardBox} key={index}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: '93%' }}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={{ ...styles.statusTitle, paddingVertical: 0, fontSize: 16, paddingTop: 10 }}>Expiry Date : <Text style={{ color: '#000' }}>{item.expDate}</Text></Text>
                    <Text style={{ ...styles.statusTitle, paddingVertical: 10 }}>{item.statusLabel}</Text>
                    <ProgressBar style={{ backgroundColor: '#DDE5EE', height: 8, borderRadius: 20 }} progress={item.progressValue} color={'#1ABB47'} />
                  </View>
                  <Icon
                    onPress={() => setOpenAccordingIndex(openAccordingIndex == index ? 99 : index)}
                    style={{ paddingLeft: 5, paddingTop: 3 }}
                    name={openAccordingIndex == index ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                    size={21}
                    color='#000' />
                </View>
                {
                  openAccordingIndex == index && (
                    <View style={{ borderTopWidth: 1, marginTop: 20, marginHorizontal: -20, borderColor: '#bbb' }}>
                      <View style={{ padding: 25, paddingBottom : 0 }}>
                        <Timeline
                          data={timelineData}
                          innerCircle={'icon'}
                          circleSize={26}
                          showTime={false}
                          columnFormat='single-column-left'
                          circleColor='#CFECFF'
                          lineColor='#CFECFF'
                          lineWidth={4}
                          timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
                          descriptionStyle={{ color: 'gray' }}
                          options={{
                            style: { paddingVertical: 5 }
                          }}
                          renderDetail={renderDetail}
                          listViewContainerStyle={{
                            paddingTop : 10
                          }}
                          detailContainerStyle={{
                            // backgroundColor: '#000',
                            marginBottom : 20,
                            marginTop : -20,
                            // borderBottomWidth: 2,
                            // borderColor: '#ccc'
                          }}
                        />
                      </View>
                    </View>
                  )
                }

              </View>
            </>
          )
        })}
      </ScrollView>
    </View>
  )
}

export const CoursesView = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const refRBSheet = useRef();
  const [isOpen, setIsOpen] = useState(false)
  const [checked, setChecked] = useState('');

  const toggleBottomSheet = () => {
    if (isOpen == true) {
      refRBSheet.current.close()
    } else {
      refRBSheet.current.open()
    }
  }

  const options = [
    { label: 'Completed', value: 'Completed' },
    { label: 'Archived', value: 'Archived' },
  ];
 

  const courseData = [
    {
      title: 'Artificial Intelligence for Embedded Systems',
      isMenu: false,
      status: 'panding',
      progressValue: 0.01,
      statusLabel: 'Pending Approval'
    },
    {
      title: 'React 101: Learn React.js for absolute beginners',
      isMenu: true,
      status: 'progress',
      progressValue: 0.14,
      statusLabel: '14% completed'
    },
    {
      title: 'React 101: Learn React.js for absolute beginners',
      isMenu: true,
      status: 'complete',
      progressValue: 1,
      statusLabel: '100% completed'
    },
    {
      title: 'React 101: Learn React.js for absolute beginners',
      isMenu: true,
      status: 'archive',
      progressValue: 0.14,
      statusLabel: '14% completed'
    },
  ]


  return (
    <>
      <View style={styles.RowBox}>
        <Searchbar
          placeholder="Search for courses"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchInput}
        />
        <Icon
         onPress={() => toggleBottomSheet()}
          style={styles.FilterIcon}
          name='swap-vert'
          size={40}
          color='#000' />
      </View>

      <RBSheet
        ref={refRBSheet}
        height={200}
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

      <View style={styles.RowBox}>
        <Text style={styles.mainTitle}> Your Courses</Text>

        <View style={styles.badgeBox}>
          <Text style={styles.mainTitle}>2</Text>
        </View>
      </View>
      {courseData?.length == 0 && (
        <EmptyView iconName={AppIcon.images.empty1} label={'No Courses Added'} />
      )}
      <ScrollView style={{ marginVertical: 10, paddingHorizontal: 30 }} >
        {courseData?.length !== 0 && courseData.map((item, index) => {
          return (
            <View style={[styles.CardBox, { flexDirection: "row" }]} key={index}>
              <View style={{ width: '93%' }}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                {item.status == 'panding' && (
                  <>
                    <Text style={styles.statusTitle}>{item.statusLabel}</Text>
                    <ProgressBar style={{ backgroundColor: '#DDE5EE', height: 8, borderRadius: 20 }} progress={item.progressValue} color={'#6E7C72'} />
                  </>
                )}
                {item.status == 'progress' && (
                  <>
                    <TouchableOpacity onPress={() => navigation.navigate('CourseVideoPlayerScreen')}>
                      <Text style={styles.statusTitle}>{item.statusLabel}</Text>
                      <ProgressBar style={{ backgroundColor: '#DDE5EE', height: 8, borderRadius: 20 }} progress={item.progressValue} color={'#1ABB47'} />
                    </TouchableOpacity>
                  </>
                )}
                {item.status == 'complete' && (
                  <>
                    <Text style={{ ...styles.statusTitle, color: '#1ABB47', paddingVertical: 0, paddingTop: 20, paddingBottom: 10 }}>Certificate Generated</Text>
                    <Text style={{ ...styles.statusTitle, paddingVertical: 0, paddingBottom: 20 }}>{item.statusLabel}</Text>
                    <ProgressBar style={{ backgroundColor: '#DDE5EE', height: 8, borderRadius: 20 }} progress={item.progressValue} color={'#1ABB47'} />
                  </>
                )}

                {item.status == 'archive' && (
                  <>
                    <Text style={{ ...styles.statusTitle, textAlign: 'right', paddingVertical: 0, paddingTop: 10 }}>Archive Course</Text>
                    <Text style={{ ...styles.statusTitle, paddingVertical: 0, paddingBottom: 20 }}>{item.statusLabel}</Text>
                    <ProgressBar style={{ backgroundColor: '#DDE5EE', height: 8, borderRadius: 20 }} progress={item.progressValue} color={'#1ABB47'} />
                  </>
                )}
              </View>
              <Icon
                style={{ paddingLeft: 5, paddingTop: 3 }}
                name='more-vert'
                size={21}
                color='#000' />
            </View>
          )
        })}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 25,
    color: "#0E2254"
  },
  linearGradient: {
    height: 4,
    width: 15,
    borderRadius: 10
  },
  activeTabs: {
    paddingVertical: 12,
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    marginRight: 30,
    marginLeft: 12,
  },
  InActiveTabs: {
    padding: 12,
    fontSize: 17,
    fontWeight: '500',
    color: '#999'
  },
  RowBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  searchInput: {
    fontSize: 14,
    flexBasis: '75%',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#777',
    backgroundColor: '#fff',
  },
  FilterIcon: {
    paddingHorizontal: 8,
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 8,
    backgroundColor: '#fff',
    borderColor: '#777',
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000'
  },
  badgeBox: {
    backgroundColor: '#D7EEFD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  CardBox: {
    borderRadius: 5,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    borderColor: '#777',
    padding: 20,
    marginVertical: 8,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
    textAlign: 'left'
  },
  statusTitle: {
    fontSize: 17,
    paddingVertical: 20,
    fontWeight: '500',
    color: '#5F6B8A',
    textAlign: 'justify'
  }
})

export default MyLearningScreen