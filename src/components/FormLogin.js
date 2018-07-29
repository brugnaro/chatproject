import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default props => (
  <View>
    <View>
      <Text>Logo</Text>
    </View>
    <View>
      <TextInput placeholder="E-mail" />
      <TextInput placeholder="Password" />
      <Text>Sign Up</Text>
    </View>
    <View>
      <Button title="Sign In" onPress={() => false} />
    </View>
  </View>
);