import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Input, CheckBox } from "react-native-elements";
import { Link } from "@react-navigation/native";

const RegisterForm = (props) => {
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

        <Input
          placeholder="Full Name"
          style={{ color: "white" }}
          leftIcon={{
            type: "font-awesome",
            name: "user",
            color: "#ee4622",
          }}
        />

        <View>
          <Input
            placeholder="Gender"
            style={{ color: "white" }}
            leftIcon={{
              type: "font-awesome",
              name: "venus-mars",
              color: "#ee4622",
            }}
            disabled
          />
          <CheckBox
            center
            title="Female"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked
          />
          <CheckBox
            center
            title="Male"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        </View>

        <Input
          placeholder="Phone"
          style={{ color: "white" }}
          leftIcon={{
            type: "font-awesome",
            name: "phone",
            color: "#ee4622",
          }}
        />
        <Input
          placeholder="Address"
          style={{ color: "white" }}
          leftIcon={{
            type: "font-awesome",
            name: "map-marker",
            color: "#ee4622",
          }}
        />
        <Button
          style={styles.buttonBlock}
          color="#ee4622"
          title="Sign Up"
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
      <View style={styles.smallText}>
        <Text style={{ color: "white" }}>
          Already have an account ? Click
          <Link style={styles.linkText} to="/Login">
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
    display: "inline-block",
  },
  smallText: {
    textAlign: "center",
    paddingTop: "10px",
  },
  linkText: {
    color: "#ee4622",
  },
});

export default RegisterForm;
