import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Input } from "react-native-elements";
import { Link } from "@react-navigation/native";

const LoginForm = (props) => {
  return (
    <View>
      <View>
        <Input
          placeholder="Email"
          style={{ color: "white" }}
          leftIcon={{
            type: "font-awesome",
            name: "envelope",
            color: "#ee4622",
          }}
        />

        <Input
          placeholder="Password"
          style={{ color: "white" }}
          leftIcon={{
            type: "font-awesome",
            name: "key",
            color: "#ee4622",
          }}
          secureTextEntry={true}
        />

        <Button
          style={styles.buttonBlock}
          color="#ee4622"
          title="Sign In"
          onPress={() => props.navigation.navigate("Home")}
        />
      </View>
      <View style={styles.smallText}>
        <Text style={{ color: "white" }}>
          Don't have an account ? Click
          <Link style={styles.linkText} to="/Register">
            {" "}
            here
          </Link>
        </Text>
      </View>
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
  buttonBlock: {
    display: "block",
  },
  smallText: {
    textAlign: "center",
    paddingTop: "10px",
  },
  linkText: {
    color: "#ee4622",
  },
});

export default LoginForm;
