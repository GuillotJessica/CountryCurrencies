import React from "react";
import { KeyboardTypeOptions,  StyleSheet, TextInput   } from "react-native";
import _ from "lodash/fp";


type CCInputProps = {
    keyboardType:KeyboardTypeOptions
    placeholder:string
    value: number | string | number
    onChangeAmount:()=>void | React.Dispatch<React.SetStateAction<string>>
  }

const CCInput = ({keyboardType, placeholder, value, onChangeAmount}:CCInputProps) => (
    <TextInput
      style={styles.textInput}
      keyboardType={keyboardType}
      placeholder={placeholder}
      value={value.toString()}
      onChangeText={onChangeAmount}
    />
  )
  const styles = StyleSheet.create({
    textInput:{
      margin: 10,
      shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, padding: 10}
  })
export default CCInput