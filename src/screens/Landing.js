import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";

const Landing = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.logo} source={require("../../assets/book.png")} />
        <br />
        <p
          style={{
            fontSize: "20pt",
            color: "white",
          }}
        >
          source <i>of</i> intelligence
        </p>
        <p
          style={{
            fontSize: "12pt ",
            textAlign: "justify",
            color: "white",
          }}
        >
          Sign-up today and receive unlimited access to all of your literatur -
          share your literature.
        </p>
      </View>
      <View style={styles.bottom}>
        <Button
          color="gray"
          title="Sign Up"
          marginRight="20px"
          onPress={() => props.navigation.navigate("Register")}
        />
        <br />

        <Button
          color="#ee4622"
          title="Sign In"
          marginRight="20px"
          onPress={() => props.navigation.navigate("Login")}
        />
        <br />

        <Button
          title="Home"
          onPress={() => props.navigation.navigate("Home")}
        />
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
  top: {
    flex: 2,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "75%",
  },
  bottom: {
    flex: 1,
    textAlign: "center",
    width: 200,
  },
  logo: {
    textAlign: "center",
    width: 200,
    height: 200,
    maxWidth: "400px",
    maxHeight: "400px",
  },
});

export default Landing;
