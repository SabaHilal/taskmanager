import React, { Component } from "react";
import {View,Text,Button,StyleSheet} from "react-native";

export default class HomeScreen extends Component {
  
    goToTaskScreen = () => {
        this.props.navigation.navigate('TaskScreen');
      };

  render() {
    
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button title="next" onPress={this.goToTaskScreen()} />
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
