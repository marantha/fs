import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 60,
  },
  title: {
    fontSize: 24,
  },
});

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const FridgeScreen = ({ route }) => {
  if (!!route.params && !!route.params.list) {
    const { list } = route.params;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList data={list} renderItem={({ item }) => <Text>{item.data}</Text>} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
    </SafeAreaView>
  );
};
