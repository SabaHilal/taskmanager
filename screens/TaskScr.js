import React, { Component } from "react";
import {View,Text,StyleSheet} from "react-native";

export default class TaskScreen extends Component {
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text>TaskScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edc988"
  },
  
});