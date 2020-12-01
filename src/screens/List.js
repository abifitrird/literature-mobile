import React from "react";
import { View, StyleSheet, Button, FlatList, Text, Image } from "react-native";
import { Input } from "react-native-elements";

const DATA = [
  {
    id: "1",
    title: "A Glimpse of The Time Machine Blueprint",
    author: "Christopher Hawking",
  },
  {
    id: "2",
    title: "A Study of Physical Quantum",
    author: "George Tesla",
  },
  {
    id: "3",
    title: "Applied Mathemathic",
    author: "Helena Einstein",
  },
];

const renderItem = ({ item, index }) => {
  return (
    <View style={styles.item}>
      <Text style={{ color: "white", fontSize: 16 }}>{item.title}</Text>
      <Text style={{ color: "lightgray", fontSize: 12 }}>{item.author}</Text>
    </View>
  );
};

const List = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image style={styles.logo} source={require("../../assets/logo.svg")} />
        <View style={{ width: "100%" }}>
          <Input
            placeholder="Search literature"
            style={{ color: "white", width: "100%" }}
          />
          <Button
            style={{ width: "10%" }}
            color="#ee4622"
            title="Search"
            onPress={() => props.navigation.navigate("List")}
          />
        </View>
      </View>
      <View style={{ marginTop: "20px", width: "100%" }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  item: {
    padding: "20px",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  logo: {
    textAlign: "center",
    width: 220,
    height: 40,
    maxWidth: "220px",
    maxHeight: "900px",
    marginBottom: "10px",
    marginTop: "20px",
  },
});

export default List;
