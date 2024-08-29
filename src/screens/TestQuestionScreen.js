import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';
import { Icon, IconButton } from 'react-native-paper';

const TestQuestionScreen = ({ navigation }) => {

    const DATA = [
        {
            id: 1,
            title: 'Module',
        },
        {
            id: 2,
            title: 'Component',
        },
        {
            id: 3,
            title: 'Package',
        },
        {
            id: 4,
            title: 'Class',
        },
    ];

    const renderItem = ({ item, index }) => (
        <View style={styles.item}>
            <Text style={styles.number}>{index + 1}.</Text>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{ marginVertical: 10 }}>
                <Text style={{ margin: 5, marginHorizontal: 0, color: "#7A7B93" }}>Question 1 of 2</Text>
                <Text style={{ color: "#0E2254" }}>Does a HTML program need a compiler to execute?</Text>
            </View>
            <View >
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    style={{}}
                />
            </View>
            <View style={{ flexDirection: 'row', gap: 30, marginVertical: 30, alignItems: "center", justifyContent: "center" }}>
                <Pressable onPress={() => console.log('press')}>
                    <Icon
                        color='#0E2254'
                        source='less-than'
                        size={20}
                    />
                </Pressable>
                <Pressable onPress={() => console.log('press')}>
                    <Icon
                        color='#0E2254'
                        source='greater-than'
                        size={20}
                    />
                </Pressable>
            </View>
            <View style={{ marginVertical: 15 }} >
                <Button
                    onPress={() => navigation.navigate("ScoredScreen")}
                    buttonStyle={{
                        fontWeight: 'bold',
                        backgroundColor: "#00A2FE",
                        color: "#0E2254"
                    }}
                    containerStyle={{ width: 350, alignItems: "center", justifyContent: "center", marginHorizontal:20 }}
                    title="Submit Assessment " />
            </View>
            <View style={{ top: 70, marginLeft: 290 }}>
                <Icon
                    source="fullscreen"
                    size={22}
                    color="#160B5C"
                />
            </View>
            <View style={{ top: 80, marginHorizontal: 15 }}>
                <Text>Welcome to React.js for beginners</Text>
                <Text>Learn React.js for absolute beginners</Text>
                <View style={{ marginVertical: 10 }}>
                    <Button
                        buttonStyle={{
                            fontWeight: 'bold',
                            backgroundColor: "#fff",
                            color: "#0E2254",
                            borderWidth: 1
                        }}
                        containerStyle={{ width: 300, justifyContent: "center" }}
                        titleStyle={{ color: "#0E2254" }}
                        title="Feedback" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 5,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginVertical: 0,
        marginHorizontal: 16,
    },
    number: {
        fontWeight: 'bold',
        marginRight: 10,
        fontSize: 16,
    },
    title: {
        fontSize: 15,
    },
})

export default TestQuestionScreen