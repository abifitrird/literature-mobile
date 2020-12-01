import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Register;
