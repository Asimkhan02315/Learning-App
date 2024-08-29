import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { List, Checkbox } from 'react-native-paper';
import { Button } from '@rneui/themed';
// import Video from 'react-native-video';
// import VideoPlayer from 'react-native-video-player';
import FastImage from 'react-native-fast-image';
import { AppIcon } from '../utils/AppStyles';

const CourseVideo = ({ navigation }) => {
  // const videos = require('../assests/icons/video.mp4');
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <ScrollView>
      {/* <VideoPlayer
        video={videos}
        videoWidth={1600}
        videoHeight={900}
      /> */}
      <FastImage
        source={AppIcon.images.empty3}
        style={{ right: 15, textAlign: 'center', justifyContent: "center" }}
      />
      {/* <Video
        source={{ url: 'https://www.youtube.com/watch?v=kGtEax1WQFg&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c' }}
        videoWidth={1600}
        videoHeight={900}
        controls={true}  
      /> */}
      <View style={{ backgroundColor: "#DDEDF3", }}>
        <Text style={{ marginHorizontal: 20, marginVertical: 10 }} >Welcome to React.js for beginners</Text>
        <Text style={{ marginHorizontal: 20 }}>Learn React.js for absolute beginners</Text>
      </View>
      <View style={styles.container}>
        <View>
          <List.Section title="Lectures(11)">
            <List.Accordion
              title="Section 1 : Welcome to React"
              description="2/7 Lectures Completed"
              expanded={expanded}
              titleStyle={{ color: "#0E2254" }}
              descriptionStyle={{ color: "#7A7B93" }}
              onPress={handlePress}>
              <List.Item
                title="Introduction"
                left={() => <Checkbox color='#20D753' status="checked" />}
              />
              <List.Item
                title="What is React?"
                left={() => <Checkbox color='#20D753' status="checked" />}
              />
              <List.Item
                title="Welcome to React.js for beginners"
                left={() => <Checkbox />}
                onPress={() => navigation.navigate("CourseVideoPlayerScreen")}
              />
              <List.Item
                title="Understanding Single Page Applications and Multi Page Applications"
                left={() => <Checkbox />}
              />
              <List.Item
                title="Quiz?"
                left={() => <Checkbox />}
                onPress={() => navigation.navigate("QuizScreen")}
              />
              <List.Item
                title="Course Outline"
                left={() => <Checkbox />}
              />
              <List.Item
                title="How to get the Most out of This Course"
                left={() => <Checkbox />}
              />
            </List.Accordion>
            <List.Accordion
              title="Section 2 : Refreshing Next Generation Javascript (optional)"
              description="0/4 Lectures Completed"
              titleStyle={{ color: "#0E2254" }}
              descriptionStyle={{ color: "#7A7B93" }}
              expanded={expanded}
              onPress={handlePress}>
            </List.Accordion>
          </List.Section>
        </View>
      </View>
      <View >
        <Button buttonStyle={{
          fontWeight: 'bold',
          backgroundColor: "#00A2FE",
          color: "#0E2254"
        }}
          containerStyle={{ width: 320, bottom: 40, marginHorizontal: 35 }}
          title="Feedback " />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  }
})

export default CourseVideo