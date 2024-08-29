// import { Tab, Text, TabView, Button } from '@rneui/themed';
import { useState } from "react";
import { View } from "react-native";
import { Icon } from 'react-native-paper';
import { Tab, Text, TabView, Button } from 'react-native-elements';

const TabViewComponent = () => {

    const [index, setIndex] = useState(0);

    const itemData = [
        {
            title: 'Web Programming with Javascript and Node JS etc etc etc etc etc etc e...',
            time: '4.94 Hours',
        },
        {
            title: 'Oracle BI Publisher (BIP) for Oracle Integration',
            time: '4.94 Hours',
        },
        {
            title: 'Learn to publish Android and iOS App',
            time: '4.94 Hours',
        },
        {
            title: 'Learn Penetration Testing beginners',
            time: '4.94 Hours',
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
                    title="Latest Course"
                    buttonStyle={{backgroundColor:"#fff" }}
                    titleStyle={{ fontSize: 12, color: index == 0 ? '#0E2254' : '#6476A7' }}
                />
                <Tab.Item
                    title="Trending Course"
                    titleStyle={{ fontSize: 12, color: index == 1 ? '#0E2254' : '#6476A7' }}
                    buttonStyle={{backgroundColor:"#fff" }}
               />
            </Tab>
            {index == 0 && (
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
        </View>
    )
}

export default TabViewComponent;