import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
// import VideoPlayer from 'react-native-video-player';
import { Button } from '@rneui/themed';
import TabEnrollNow from '../components/TabEnrollNow';
import FastImage from 'react-native-fast-image';
import { AppIcon } from '../utils/AppStyles';

const EnrollNowScreen = () => {
    // const videos = require('../assests/icons/video.mp4');
    return (
        <ScrollView>
            <View>
                {/* <VideoPlayer
                    video={videos}
                    videoWidth={1600}
                    videoHeight={900}
                /> */}
                <FastImage
                    source={AppIcon.images.image2}
                    style={{ width: 10, height: 25, bottom: 28, right: 15, textAlign: 'center', justifyContent: "center" }}
                />
                <View style={{ padding: 10, margin: 10 }}>
                    <Text style={{ color: "#0E2254" }}>Learn Revit Architecture From Basic to Advance Level</Text>
                    <Text style={{ color: "#7A7B93" }}>If You Want To Learn Revit Architecture From IIT Working Professional Then Enroll Is Course</Text>
                </View>
                <View style={{ marginVertical: 15 }}>
                    <Button buttonStyle={{
                        fontWeight: 'bold',
                        backgroundColor: "#00A2FE",
                        color: "#0E2254"
                    }}
                        containerStyle={{ width: 330, bottom: 15, marginHorizontal: 35 }}
                        title="Enroll Now " />
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#0E2254" }}>19 Lectures</Text>
                        <Text style={{ marginHorizontal: 80, color: "#0E2254" }}>1.5 Hrs</Text>
                    </View>
                    <View style={{ marginVertical: 10, gap: 10 }}>
                        <Text style={{ color: "#0E2254" }}>Language : English (India)</Text>
                        <Text style={{ color: "#0E2254" }}>Last Updated : Aug 2021</Text>
                        <Text style={{ color: "#0E2254" }}>Course by circle (Client’s name)</Text>
                    </View>
                </View>
                <View>
                    <TabEnrollNow />
                </View>
            </View>
        </ScrollView>
    )
}

export default EnrollNowScreen