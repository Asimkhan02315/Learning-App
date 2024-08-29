import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';
import CourseVideo from '../components/CourseVideo';

const QuizScreen = ({ navigation }) => {

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
        <ScrollView>
            <View style={styles.container}>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ margin: 5, marginHorizontal: 0, color: "#7A7B93" }}>Question 1 of 2</Text>
                    <Text style={{ color: "#0E2254" }}>Q1 : Everything in a React is a.........</Text>
                </View>
                <View>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
                <View style={{ marginVertical: 50 }} >
                    <Button buttonStyle={{
                        fontWeight: 'bold',
                        backgroundColor: "#00A2FE",
                        color: "#0E2254"
                    }}
                        containerStyle={{ width: 100, bottom: 40, marginHorizontal: 35 }}
                        title="Next " />
                    <View style={{ flexDirection: "row", marginHorizontal: 30 }}>
                        <Text style={{ color: "#0E2254" }}>Correct : 1</Text>
                        <Text style={{ marginHorizontal: 70, color: "#0E2254" }}>Correct : 0</Text>
                    </View>
                </View>
            </View>
            <View>
                <CourseVideo navigation={navigation} />
            </View>
        </ScrollView>
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

export default QuizScreen