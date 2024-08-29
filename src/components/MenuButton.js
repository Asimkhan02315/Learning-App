/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppStyles } from '../utils/AppStyles';

export default function MenuButton(props) {

  const { active, icon, onPress, title } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={active ? styles.btnClickContainActive : styles.btnClickContain}
    >
      <View style={styles.btnContainer}>
        <Icon
          name={icon}
          color={active ? AppStyles.color.tint : AppStyles.color.white}
          size={25}
        />
        <Text style={active ? styles.btnTextActive : styles.btnText}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnClickContainActive: {
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  btnClickContain: {
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 15,
    marginLeft: 15,
    marginTop: 2,
    color: AppStyles.color.white,
    fontWeight: 'bold'
  },
  btnTextActive: {
    fontSize: 15,
    marginLeft: 15,
    marginTop: 2,
    color: AppStyles.color.tint,
    fontWeight: 'bold'
  },
});
