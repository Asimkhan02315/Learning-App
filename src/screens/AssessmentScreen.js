import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { Icon } from 'react-native-paper'

const AssessmentScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", flex: 1, marginVertical: 50, gap: 10, top: 80 }}>
        <Text style={{ fontSize: 18, color: "#0E2254" }}>Welcome to</Text>
        <Text style={{ fontSize: 20, color: "#0E2254", fontWeight: "900" }}>Eduonix Assessment</Text>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate("TestQuestionScreen")}
            buttonStyle={{
              fontWeight: 'bold',
              backgroundColor: "#00A2FE",
              color: "#0E2254"
            }}
            containerStyle={{ width: 300, alignItems: "center", justifyContent: "center", }}
            title="Start Assessment " />
        </View>
        <View style={{ top: 200, marginLeft: 250 }}>
          <Icon
            source="fullscreen"
            size={22}
            color="#160B5C"
          />
        </View>
      </View>
      <View style={{ bottom: 100, marginHorizontal: 30 }}>
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

export default AssessmentScreen