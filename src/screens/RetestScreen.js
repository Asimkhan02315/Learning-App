import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { Icon } from 'react-native-paper'

const RetestScreen = () => {

  return (
    <View style={{ marginVertical: 10, gap: 10 }}>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Text style={{ color: "#0066B6", fontSize: 15, fontWeight: "600" }}>Re-test</Text>
      </View>
      <View style={{ marginHorizontal: 25, backgroundColor: "#FFE3E3", padding: 10, }}>
        <Text style={{ fontSize: 14, color: "#0E2254", fontWeight: "500", marginVertical: 15 }}>Que 1 : Which of the following comes under  tag?</Text>
        <Text style={{ fontSize: 14, color: "#0E2254", fontWeight: "500" }}>Selected Answer: All of the above</Text>
      </View>
      <View style={{ marginHorizontal: 25, backgroundColor: "#FFE3E3", padding: 10, }}>
        <Text style={{ fontSize: 14, color: "#0E2254", fontWeight: "500", marginVertical: 15 }}>Que 2: Which is the next tag after  tag?</Text>
        <Text style={{ fontSize: 14, color: "#0E2254", fontWeight: "500" }}>Selected Answer: Head tag</Text>
      </View>
      <View style={{ marginHorizontal: 25, backgroundColor: "#E2F3E7", padding: 10, }}>
        <Text style={{ fontSize: 14, color: "#0E2254", fontWeight: "500", marginVertical: 15 }}>Que 3: Is  a valid HTML tag?</Text>
        <Text style={{ fontSize: 14, color: "#0E2254", fontWeight: "500" }}>Selected Answer: Yes</Text>
      </View>
      <View style={{ marginHorizontal: 25, backgroundColor: "#FFE3E3", padding: 10, }}>
        <Text style={{ fontSize: 14, color: "#0E2254", fontWeight: "500", marginVertical: 15 }}>Que 4: Which tag is used to give scroll effect to text in HTML?</Text>
        <Text style={{ fontSize: 14, color: "#0E2254", fontWeight: "500" }}>Selected Answer: Marquee tag</Text>
      </View>
      <View style={{ marginHorizontal: 25, backgroundColor: "#FFE3E3", padding: 10, }}>
        <Text style={{ fontSize: 14, color: "#0E2254", fontWeight: "500", marginVertical: 15 }}>Que 2: Which is the next tag after tag?</Text>
      </View>
      <View style={{ bottom: 50, marginLeft: 330 }}>
        <Icon
          source="fullscreen"
          size={22}
          color="#160B5C"
        />
      </View>
      <View style={{ top: 0, marginHorizontal: 20, }}>
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

export default RetestScreen