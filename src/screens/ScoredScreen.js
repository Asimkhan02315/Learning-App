import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { Icon } from 'react-native-paper'

const ScoredScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: "center", marginVertical: 30 }}>
                <Text style={{ fontSize: 18, color: "#0E2254" }}>You have scored</Text>
                <Text style={{ fontSize: 20, color: "#0E2254", fontWeight: "400" }}>3 out of 15</Text>
            </View>
            <View style={{ marginHorizontal: 25, marginVertical: 10, gap: 10 }}>
                <Text style={{ fontSize: 15, color: "#0E2254", fontWeight: "400" }}>Skipped : 0</Text>
                <Text style={{ fontSize: 15, color: "#0E2254", fontWeight: "400" }}>Number of questions : 15</Text>
                <Text style={{ fontSize: 15, color: "#0E2254", fontWeight: "400" }}>Correct Answer : 3</Text>
            </View>
            <View style={{ marginVertical: 20, alignItems: "center", padding: 20 }}>
                <Button
                    onPress={() => navigation.navigate("RetestScreen")}
                    buttonStyle={{
                        fontWeight: 'bold',
                        backgroundColor: "#00A2FE",
                        color: "#0E2254"
                    }}
                    containerStyle={{ width: 300, justifyContent: "center", }}
                    title="Show Your Answers " />
            </View>
            <View style={{ alignItems: "center", marginVertical: 0 }}>
                <Text style={{ color: "#0066B6", fontSize: 15, fontWeight: "600" }}>Re-Test</Text>
            </View>
            <View style={{ top: 200, marginLeft: 320 }}>
                <Icon
                    source="fullscreen"
                    size={22}
                    color="#160B5C"
                />
            </View>
            <View style={{ top: 50, marginHorizontal: 25, marginVertical: 180 }}>
                <Text>Welcome to React.js for beginners</Text>
                <Text>Learn React.js for absolute beginners</Text>
                <View style={{ marginVertical: 10 }}>
                    <Button
                        buttonStyle={{
                            fontWeight: 'bold',
                            backgroundColor: "#fff",
                            color: "#ccc",
                            borderWidth: 1
                        }}
                        containerStyle={{ width: 300, justifyContent: "center" }}
                        titleStyle={{ color: "#0E2254" }}
                        title="Feedback"
                    />
                </View>
            </View>
        </View>
    )
}

export default ScoredScreen