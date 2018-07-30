import React from "react";
import { View, TextInput, Button } from "react-native";
import FormRegisterStyles from "./styles/FormRegisterStyles";

export default props => (
  <View style={FormRegisterStyles.container}>
    <View style={FormRegisterStyles.input}>
      <TextInput placeholder="name" style={FormRegisterStyles.inputText} />
      <TextInput placeholder="e-mail" style={FormRegisterStyles.inputText} />
      <TextInput placeholder="password" style={FormRegisterStyles.inputText} />
    </View>
    <View>
      <Button title="Register"  color="#115E54" onPress={() => false} />
    </View>
  </View>
);