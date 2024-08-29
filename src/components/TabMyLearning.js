import { Tab, Text, TabView, Button } from '@rneui/themed';
import { useState } from "react";
import { StyleSheet } from 'react-native';
import { View } from "react-native";
import { Icon, ProgressBar, MD3Colors } from 'react-native-paper';

const TabMyLearning = () => {

    const [index, setIndex] = useState(0);

    const itemData = [
        {
            title: 'Artificial Intelligence for Embedded Systems',
            time: 'Pending Approval',
        },
        {
            title: 'React 101: Learn React.js for absolute beginners',
            time: '14% completed',
        },
        {
            title: 'React 101: Learn React.js for absolute beginners',
            time: '4.94 Hours',
        },
        {
            title: 'Learn Penetration Testing beginners',
            time: '100% completed',
        }
    ]

    return (
        <View>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: '#00A2FE',
                    height: 3
                }}
                variant='default'
            >
                <Tab.Item
                    title="Courses"
                    titleStyle={{ fontSize: 12, color: index == 0 ? '#0E2254' : '#6476A7' }}
                />
                <Tab.Item
                    title="Journeys"
                    titleStyle={{ fontSize: 12, color: index == 1 ? '#0E2254' : '#6476A7' }}
                />
                <Tab.Item
                    title="Platforms"
                    titleStyle={{ fontSize: 12, color: index == 2 ? '#0E2254' : '#6476A7' }}
                />
                <Tab.Item
                    title="Trending Course"
                    titleStyle={{ fontSize: 12, color: index == 3 ? '#0E2254' : '#6476A7' }}
                />
            </Tab>
            {index == 0 && (
                <View style={{ marginVertical: 10 }}>
                    <Text style={[styles.title, { textAlign: 'center', marginVertical: 5 }]}>Your Courses</Text>
                    {[...itemData].sort(() => Math.random() - 0.5).map((item, index) => {
                        return (
                            <View style={{ padding: 25 }} key={index}>
                                <Text style={{ color: '#000', fontSize: 15, fontWeight: '600', fontFamily: 'Poppins' }}>
                                    {item.title}
                                </Text>
                                <View style={{ flexDirection: 'row', color: '#000', marginVertical: 15 }}>
                                    <Text style={{ marginHorizontal: 10, fontSize: 14, fontWeight: '500' }}>   {item.time}</Text>
                                </View>
                                <ProgressBar progress={0.5} color={MD3Colors.error50} />
                            </View>
                        )
                    })}
                </View>
            )}
            {index == 1 && (
                <View style={{ marginVertical: 10 }}>
                    {[...itemData].sort(() => Math.random() - 0.5).map((item, index) => {
                        return (
                            <View style={{ padding: 25 }} key={index}>
                                <Text style={{ color: '#000', fontSize: 15, fontWeight: '600', fontFamily: 'Poppins' }}>
                                    {item.title}
                                </Text>
                                <View style={{ flexDirection: 'row', color: '#000', marginVertical: 15 }}>
                                    <Icon
                                        color='#586067'
                                        source='clock-outline'
                                        size={22}
                                    />
                                    <Text style={{ marginHorizontal: 10, fontSize: 14, fontWeight: '500' }}>   {item.time}</Text>
                                </View>
                                <Button
                                    style={{
                                        fontWeight: 'bold',
                                        width: ''
                                    }}
                                    containerStyle={{ width: 150 }}
                                    title="Start Course"
                                />
                            </View>
                        )
                    })}
                </View>
            )}
            {index == 2 && (
                <View style={{ marginVertical: 10 }}>
                    {[...itemData].sort(() => Math.random() - 0.5).map((item, index) => {
                        return (
                            <View style={{ padding: 25 }} key={index}>
                                <Text style={{ color: '#000', fontSize: 15, fontWeight: '600', fontFamily: 'Poppins' }}>
                                    {item.title}
                                </Text>
                                <View style={{ flexDirection: 'row', color: '#000', marginVertical: 15 }}>
                                    <Icon
                                        color='#586067'
                                        source='clock-outline'
                                        size={22}
                                    />
                                    <Text style={{ marginHorizontal: 10, fontSize: 14, fontWeight: '500' }}>   {item.time}</Text>
                                </View>
                                <Button
                                    style={{
                                        fontWeight: 'bold',
                                        width: ''
                                    }}
                                    containerStyle={{ width: 150 }}
                                    title="Start Course"
                                />
                            </View>
                        )
                    })}
                </View>
            )}
            {index == 3 && (
                <View style={{ marginVertical: 10 }}>
                    {[...itemData].sort(() => Math.random() - 0.5).map((item, index) => {
                        return (
                            <View style={{ padding: 25 }} key={index}>
                                <Text style={{ color: '#000', fontSize: 15, fontWeight: '600', fontFamily: 'Poppins' }}>
                                    {item.title}
                                </Text>
                                <View style={{ flexDirection: 'row', color: '#000', marginVertical: 15 }}>
                                    <Icon
                                        color='#586067'
                                        source='clock-outline'
                                        size={22}
                                    />
                                    <Text style={{ marginHorizontal: 10, fontSize: 14, fontWeight: '500' }}>   {item.time}</Text>
                                </View>
                                <Button
                                    style={{
                                        fontWeight: 'bold',
                                        width: ''
                                    }}
                                    containerStyle={{ width: 150 }}
                                    title="Start Course"
                                />
                            </View>
                        )
                    })}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 25,
        color: "#0E2254"
    },
})



export default TabMyLearning;