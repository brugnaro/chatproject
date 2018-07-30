import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import LoginStyles from "./styles/LoginStyles";

export default props => (
  <View style={LoginStyles.container}>
    <View style={LoginStyles.titleContainer}>
      <Text style={LoginStyles.title}>Logo</Text>
    </View>
    <View>
      <TextInput style={LoginStyles.input} placeholder="E-mail" />
      <TextInput style={LoginStyles.input} placeholder="Password" />
    </View>
    <View style={LoginStyles.buttonContainer}>
      <Button color="#053138" title="Sign Up" onPress={() => false} />
    </View>
    <View style={LoginStyles.buttonContainer}>
      <Button color="#053138" title="Sign In" onPress={() => false} />
    </View>
  </View>
);