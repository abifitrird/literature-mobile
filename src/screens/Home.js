import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import { Input } from "react-native-elements";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.svg")} />
      <View>
        <Input placeholder="Search literature" style={{ color: "white" }} />
        <Button
          style={styles.buttonBlock}
          color="#ee4622"
          title="Search"
          onPress={() => props.navigation.navigate("List")}
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
  buttonBlock: {
    display: "block",
    width: "100%",
  },
  logo: {
    textAlign: "center",
    width: 300,
    height: 55,
    maxWidth: "300px",
    maxHeight: "120px",
    marginBottom: "20px",
  },
});

export default Home;
