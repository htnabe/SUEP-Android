import React from "react";
import { StyleSheet,  TouchableOpacity, Text } from "react-native";

// スタイルのインポート
import CommonStyles from "../StyleSheet/CommonStyels";

export default function CustomedButton({buttonText, onPress, buttonStyle}) {
  return (
    < TouchableOpacity style={[styles.buttonDesign, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, CommonStyles.basicFont]}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonDesign: {
    backgroundColor: '#FFA595',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center'
  },
  buttonText: {
    paddingHorizontal: 5,
    color: 'white',
  },
})
