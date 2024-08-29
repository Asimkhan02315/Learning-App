import { View, Text, StyleSheet, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Icon, Modal } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import CircularProgress from 'react-native-circular-progress-indicator';
import { Calendar } from 'react-native-calendars';
import { ListItem, Avatar, Badge, Button, Slider } from '@rneui/themed';
import FastImage from 'react-native-fast-image';
import { AppIcon } from '../utils/AppStyles';

const theme = { colors: { backdrop: 'rgba(0, 0, 0, 0.1)' } }

const GoalsModelBox = ({ goalsVisible, setGoalsVisible }) => {

    const [openEditGoal, setOpenEditGoal] = useState(false)

    const [value, setValue] = useState(0);
    const snapValues = [0, 10, 20, 30];

    return (
        <Modal theme={theme} dismissable={false} visible={goalsVisible} onDismiss={() => setGoalsVisible(false)} contentContainerStyle={{ backgroundColor: 'transparent', margin: 10 }}>
            <LinearGradient style={styles.surface} colors={['#005EAA', '#00A0FB']}>
                <TouchableOpacity style={styles.closeView} onPress={() => { setGoalsVisible(false); setOpenEditGoal(false) }}>
                    <Icon
                        color='#fff'
                        source='close'
                        size={26}
                    />
                </TouchableOpacity>
                {
                    openEditGoal == false && (
                        <View
                            style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={styles.textTitle}>
                                Weekly Goal
                            </Text>
                            <Text style={[styles.textTitle, { fontSize: 15, fontWeight: '500', paddingVertical: 15 }]}>
                                01/08/2022 - 07/08/2022
                            </Text>
                            <CircularProgress
                                value={83}
                                radius={90}
                                progressValueColor={'#ecf0f1'}
                                activeStrokeColor={'#f39c12'}
                                inActiveStrokeColor={'#fff'}
                                // inActiveStrokeOpacity={0.5}
                                inActiveStrokeWidth={15}
                                activeStrokeWidth={20}
                                valueSuffix={'%'}
                            />
                            <Text style={[styles.textTitle, { fontSize: 15, fontWeight: '500', paddingVertical: 15 }]}>
                                6 Hours Per Week
                            </Text>
                            <Pressable style={{ flexDirection: 'row', marginVertical: 5, marginBottom: 25 }} onPress={() => setOpenEditGoal(true)}>
                                <Icon
                                    color='#fff'
                                    source='square-edit-outline'
                                    size={20}
                                />
                                <Text style={[styles.textTitle, { fontSize: 15, fontWeight: '500', paddingHorizontal: 15, }]}>
                                    Edit
                                </Text>
                            </Pressable>
                        </View>
                    )
                }
                {
                    openEditGoal == true && (
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={styles.textTitle}>
                                Set Your Goals
                            </Text>
                            <Text style={[styles.textTitle, { fontSize: 15, fontWeight: '500', paddingVertical: 15 }]}>
                                Hours Per Week
                            </Text>
                            {/* <Pressable style={{ flexDirection: 'row', marginVertical: 5, marginBottom: 25 }} onPress={() => setOpenEditGoal(false)}>
                                <Icon
                                    color='#fff'
                                    source='square-edit-outline'
                                    size={20}
                                />
                            </Pressable> */}
                            <View style={{ width: "100%", paddingHorizontal: 30, paddingVertical: 35 }}>
                                <Slider
                                    value={value}
                                    onValueChange={setValue}
                                    step={1}
                                    minimumValue={0}
                                    maximumValue={30}
                                    minimumTrackTintColor={'#FF9D0A'}
                                    maximumTrackTintColor={'#005CA6'}
                                    allowTouchTrack
                                    trackStyle={{ height: 5, backgroundColor: '#005CA6' }}
                                    thumbStyle={{ height: 10, width: 10, backgroundColor: '#fff' }}
                                    thumbProps={{
                                        children: (
                                            <View style={{ alignItems: 'center', width: 40, height: 20 }}>
                                                <Text style={{ width: 20, right: 15, textAlign: 'center', color: '#fff', bottom: 40 }}>{value}</Text>
                                                <FastImage
                                                    style={{ width: 10, height: 25, bottom: 28, right: 15, textAlign: 'center', justifyContent: "center" }}
                                                    source={AppIcon.images.rectangleLogo}
                                                />
                                            </View>
                                        ),
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 0 }}>
                                    {snapValues.map(val => (
                                        <Text style={{ color: "#fff", fontWeight: "600" }} key={val}>{val}</Text>
                                    ))}
                                </View>
                            </View>
                            <Button
                                onPress={() => setOpenEditGoal(false)}
                                buttonStyle={{
                                    fontWeight: 'bold',
                                    backgroundColor: "#005CA6"
                                }}
                                containerStyle={{ width: 150, marginVertical: 10 }}
                                title="Save "
                            />
                        </View>
                    )
                }
            </LinearGradient>
        </Modal>
    )
}

const ActiveModelBox = ({ activeVisible, setActiveVisible }) => {

    return (
        <Modal theme={theme} dismissable={false} visible={activeVisible} onDismiss={() => setActiveVisible(false)} contentContainerStyle={{ backgroundColor: 'transparent', margin: 10 }}>
            <LinearGradient style={styles.surface} colors={['#005EAA', '#00A0FB']}>
                <TouchableOpacity style={styles.closeView} onPress={() => setActiveVisible(false)}>
                    <Icon
                        color='#fff'
                        source='close'
                        size={26}
                    />
                </TouchableOpacity>
                <View colors={['#005EAA', '#00A0FB']}
                    style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={styles.textTitle}>
                        Total Active Days
                    </Text>
                    <Text style={[styles.textTitle, { fontSize: 15, fontWeight: '500', paddingVertical: 15 }]}>
                        May 2022
                    </Text>
                    <Text style={[styles.textTitle, { fontSize: 24, fontWeight: '500', paddingVertical: 15 }]}>
                        10 Days
                    </Text>
                    <Calendar
                        customHeaderTitle={() => { return (<></>) }}
                        hideArrows={true}
                        disableMonthChange={true}
                        hideExtraDays={true}
                        style={{
                            height: 300,
                            width: 370,
                        }}
                        theme={{
                            backgroundColor: 'transparent',
                            calendarBackground: 'transparent',
                            textSectionTitleColor: '#fff',
                            selectedDayBackgroundColor: '#fff',
                            selectedDayTextColor: '#fff',
                            todayTextColor: '#fff',
                            dayTextColor: '#fff',
                            dotColor: '#FF9D0A',
                            dotStyle: {
                                backgroundColor: '#FF9D0A',
                                borderRadius: 4,
                                height: 8,
                                width: 8,
                                position: 'absolute',
                                top: 5,
                                right: 0,
                                alignSelf: 'center',
                            },
                        }}
                        markedDates={{
                            '2024-02-14': { marked: true },
                            '2024-02-13': { marked: true },
                            '2024-02-12': { marked: true },
                        }}
                    />
                </View>
            </LinearGradient>
        </Modal>
    )
}

const LeaderModelBox = ({ leaderVisible, setLeaderVisible }) => {
    return (
        <Modal theme={theme} dismissable={false} visible={leaderVisible} onDismiss={() => setLeaderVisible(false)} contentContainerStyle={{ backgroundColor: 'transparent', margin: 10 }}>
            <LinearGradient style={styles.surface} colors={['#005EAA', '#00A0FB']}>
                <TouchableOpacity style={styles.closeView} onPress={() => setLeaderVisible(false)}>
                    <Icon
                        color='#fff'
                        source='close'
                        size={26}
                    />
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Icon
                        color='#fff'
                        source='crown'
                        size={50}
                    />
                    <Text style={styles.textTitle}>
                        Top Upskillers
                    </Text>
                    <Text style={[styles.textTitle, { fontSize: 15, fontWeight: '600', paddingVertical: 20 }]}>
                        Earned Most Certificates
                    </Text>
                    <View style={{ backgroundColor: '#fff', borderRadius: 50, padding: 2 }}>
                        <Avatar
                            rounded
                            size={100}
                            source={{
                                uri: 'https://randomuser.me/api/portraits/women/40.jpg',
                            }}
                        />
                        <Badge
                            status="primary"
                            value={10}
                            textStyle={{ color: '#000', fontSize: 14, textAlign: 'center' }}
                            badgeStyle={{ backgroundColor: '#fff', height: 30, borderRadius: 50, padding: 2 }}
                            containerStyle={{ position: 'absolute', top: 0, right: 0 }}
                        />
                    </View>
                    <View>
                    </View>
                    <Text style={[styles.textTitle, { fontSize: 22, fontWeight: '800', paddingVertical: 20 }]}>
                        Tomas
                    </Text>
                    <View style={{ flexDirection: 'row', position: 'relative', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                        <FastImage style={{ width: 230, height: 50, position: 'absolute' }}
                            source={AppIcon.images.logoRibbons} resizeMode='contain' />
                        <Text style={{ fontSize: 15, fontWeight: '700', color: '#fff' }}> 30 Certificates</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 40, marginVertical: 20 }}>
                        <Pressable onPress={() => console.log('press')}>
                            <Icon
                                color='#fff'
                                source='less-than'
                                size={20}
                            />
                        </Pressable>
                        <Pressable onPress={() => console.log('press')}>
                            <Icon
                                color='#fff'
                                source='greater-than'
                                size={20}
                            />
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </Modal>
    )
}

const TopModelBox = ({ TopVisible, setTopVisible }) => {

    const itemsData = [
        {
            id: 1,
            avatar: "https://randomuser.me/api/portraits/men/36.jpg",
            title: "Tomas",
            description: "25 Journeys",
            result: "99%",
        },
        {
            id: 2,
            avatar: "https://randomuser.me/api/portraits/men/36.jpg",
            title: "Tomas",
            description: "25 Journeys",
            result: "99%",
        },
        {
            id: 3,
            avatar: "https://randomuser.me/api/portraits/men/36.jpg",
            title: "Tomas",
            description: "25 Journeys",
            result: "99%",
        },
        {
            id: 4,
            avatar: "https://randomuser.me/api/portraits/men/36.jpg",
            title: "Tomas",
            description: "25 Journeys",
            result: "99%",
        },
        {
            id: 5,
            avatar: "https://randomuser.me/api/portraits/men/36.jpg",
            title: "Tomas",
            description: "25 Journeys",
            result: "99%",
        },
        {
            id: 6,
            avatar: "https://randomuser.me/api/portraits/men/36.jpg",
            title: "Tomas",
            description: "25 Journeys",
            result: "99%",
        },
        {
            id: 7,
            avatar: "https://randomuser.me/api/portraits/men/36.jpg",
            title: "Tomas",
            description: "25 Journeys",
            result: "99%",
        },
        {
            id: 8,
            avatar: "https://randomuser.me/api/portraits/men/36.jpg",
            title: "Tomas",
            description: "25 Journeys",
            result: "99%",
        },
        {
            id: 9,
            avatar: "https://randomuser.me/api/portraits/men/36.jpg",
            title: "Tomas",
            description: "25 Journeys",
            result: "99%",
        },
        {
            id: 10,
            avatar: "https://randomuser.me/api/portraits/men/36.jpg",
            title: "Tomas",
            description: "25 Journeys",
            result: "99%",
        },
    ]

    return (
        <Modal theme={theme} dismissable={false} visible={TopVisible} onDismiss={() => setTopVisible(false)} contentContainerStyle={{ backgroundColor: 'white' }} >
            <ScrollView>
                <View style={{ paddingHorizontal: 25, paddingVertical: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
                            <Text style={{ fontSize: 25, fontWeight: "700", color: "#000" }}>
                                Ready to Glory
                            </Text>
                            <FastImage style={{ width: 30, height: 30 }}
                                source={AppIcon.images.crownLogo} />
                        </View>
                        <TouchableOpacity style={styles.closeView} onPress={() => setTopVisible(false)}>
                            <Icon
                                color='#000'
                                source='close'
                                size={26}
                                style={{ top: 0, right: 0 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>Top 10 Champions</Text>
                    </View>
                    {
                        itemsData?.map((item, index) => {
                            return (
                                <ListItem key={index} bottomDivider>
                                    <Text style={{ fontSize: 20, fontWeight: '700', color: "#000" }}>{item.id}. </Text>
                                    <Avatar
                                        rounded
                                        size={50}
                                        source={{ uri: item.avatar }}
                                    />
                                    <ListItem.Content >
                                        <ListItem.Title style={{ fontWeight: "700", color: "#000" }}>{item.title}</ListItem.Title>
                                        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                                    </ListItem.Content>
                                    <ListItem.Content right>
                                        <ListItem.Title right style={{ fontWeight: "700", color: "#000" }}>
                                            {item.result}
                                        </ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </Modal>
    )
}

export default GoalsModelBox

export { TopModelBox, ActiveModelBox, LeaderModelBox }

const styles = StyleSheet.create({
    surface: {
        padding: 1,
        backgroundColor: 'transparent',
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontWeight: '600',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    closeView: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 15
    },
    textTitle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: -0.14,
        fontFamily: 'Poppins'
    },
    user: {
        marginLeft: 0,
        padding: 0,
        top: 0,
        right: 0,
        height: 25,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 5
    }
})
