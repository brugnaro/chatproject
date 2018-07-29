import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from './styles';

export default props => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Logo</Text>
    </View>
    <View>
      <TextInput style={styles.input} placeholder="E-mail" />
      <TextInput style={styles.input} placeholder="Password" />
    </View>
    <View style={styles.buttonContainer}>
      <Button color="#053138" title="Sign Up" onPress={() => false} />
    </View>
    <View style={styles.buttonContainer}>
      <Button color="#053138" title="Sign In" onPress={() => false} />
    </View>
  </View>
);