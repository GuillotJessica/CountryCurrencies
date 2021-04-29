
import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
const Header = () => (
    <View  style={styles.container}>
      <Text style={styles.title}>CountryCurrencies</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {flex: 2, width:'100%', backgroundColor:'purple', justifyContent:'center', alignItems:'center'},
    title: {color:'white', fontSize:32}
})

export default Header