import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Avatar } from '@rneui/themed';
import { AppIcon } from '../utils/AppStyles';
import RBSheet from "react-native-raw-bottom-sheet";

const ProfileScreen = () => {

  const refRBSheet = useRef();
  const [isOpen, setIsOpen] = useState(false)

  const toggleBottomsheet = () => {
    if (isOpen == true) {
      refRBSheet.current.close()
    } else {
      refRBSheet.current.open()
    }
  }

  return (
    <ScrollView>
      <View style={{ justifyContent: 'space-around', justifyContent: "center", alignItems: "center", top: 30 }}>
        <Avatar
          size={110}
          rounded
          source={AppIcon.images.editLogo}
        >
        </Avatar>
        <View style={{ bottom: 30, padding: 5, marginLeft: 90, backgroundColor: "#fff", borderRadius: 25 }}>
          <TouchableOpacity
            onPress={() => toggleBottomsheet()}
          >
            <Avatar
              size={15}
              source={AppIcon.images.editIcon}
            ></Avatar>
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={refRBSheet}
          height={150}
          closeOnDragDown={true}
          closeOnPressMask={true}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent"
            },
            container: {
              backgroundColor: '#fff',
              borderRadius: 40,
              borderWidth: 1,
              borderColor: '#ccc'
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
        >
          <Text style={{ marginHorizontal: 40, color: "#000", fontWeight: "700", fontSize: 15 }}>Upload Profile Pictures</Text>
          <View style={{ flexDirection: "row", marginHorizontal: 40, gap: 40, marginVertical: 20 }}>
            <View>
              <Avatar
                size={30}
                rounded
                source={AppIcon.images.lens}
              >
              </Avatar>
              <Text style={{ color: "#000", fontWeight: "700", marginVertical: 10, fontSize: 13 }}>Camera</Text>
            </View>
            <View>
              <Avatar
                size={30}
                rounded
                source={AppIcon.images.photoGallery}
              >
              </Avatar>
              <Text style={{ color: "#000", fontWeight: "700", marginVertical: 10, fontSize: 13 }}>Gallery</Text>
            </View>
            <View>
              <Avatar
                size={30}
                rounded
                source={AppIcon.images.folder}
              >
              </Avatar>
              <Text style={{ color: "#000", fontWeight: "700", marginVertical: 10, fontSize: 13 }}>Files</Text>
            </View>
          </View>
        </RBSheet>
        <View style={{ top: 20, alignItems: "center", gap: 10 }}>
          <Text style={{ fontSize: 16, color: "#0E2254", fontWeight: "bold", bottom: 5 }}>Susan</Text>
          <Text style={{ fontSize: 15, color: "#53638D" }}>Employee ID : 26</Text>
          <Text style={{ fontSize: 15, color: "#53638D" }}>Department : Techology</Text>
          <Text style={{ fontSize: 15, color: "#53638D" }}>Contact Number : e.g. xxxxxxxxxx587</Text>
        </View>
        <View style={{ marginVertical: 80, gap: 20, right: 90 }}>
          <Text style={{ color: '#0E2254', fontWeight: "900", fontSize: 17 }}>Project Information</Text>
          <View style={{ gap: 5 }}>
            <Text style={{ color: '#53638D' }}>Project Name:</Text>
            <Text style={{ color: '#0E2254', fontWeight: "600" }}>UI/UX for codeblu</Text>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={{ color: '#53638D' }}>Project Manager Name:</Text>
            <Text style={{ color: '#0E2254', fontWeight: "600" }}>Jozef Suja</Text>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={{ color: '#53638D' }}>Email ID:</Text>
            <Text style={{ color: '#0E2254', fontWeight: "600" }}>jozefsuja@gmail.com</Text>
          </View>
        </View>
        <View style={{ marginVertical: 10, bottom: 30, gap: 20, right: 90 }}>
          <Text style={{ color: '#0E2254', fontWeight: "900", fontSize: 17 }}>Delivery Information</Text>
          <View style={{ gap: 5 }}>
            <Text style={{ color: '#53638D' }}>Delivery Account Manager:</Text>
            <Text style={{ color: '#0E2254', fontWeight: "600" }}>Jaroslav Hajny</Text>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={{ color: '#53638D' }}>Email ID:</Text>
            <Text style={{ color: '#0E2254', fontWeight: "600" }}>jaroslav.hajny@gmail.com</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen