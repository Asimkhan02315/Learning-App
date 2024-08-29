import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { AppIcon } from '../utils/AppStyles'

const CertficateScreen = () => {

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ marginVertical: 25 }}>
          <Text style={{ fontSize: 15, fontWeight: "500", color: "#000", margin: 10 }}>
            Business Analytics - Beginner & Advance
          </Text>
          <FastImage
            style={{ width: 20, height: 20, marginVertical: 50, marginLeft: 300 }}
            source={AppIcon.images.downloadLogo}
          />
        </View>
        <View style={{}}>
          <Text style={{ fontSize: 15, fontWeight: "500", color: "#000", margin: 10 }}>
            Learn Penetration Testing for beginners
          </Text>
          <FastImage
            style={{ width: 20, height: 20, marginVertical: 50, marginLeft: 300 }}
            source={AppIcon.images.downloadLogo}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default CertficateScreen