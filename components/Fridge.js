import * as React from "react";
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Button, Alert } from "react-native";

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
    backgroundColor: "rgba(247,247,247,1.0)",
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
  },
  buttonContainer: {
    height: 50,
    alignItems: 'flex-end',
  },
  button: {
    fontSize: 24,
  },
});

export const FridgeScreen = ({ route }) => {

  const selected = () => {
    Alert.alert(
      "Delete Item",
      "Are you sure you want to delete this item?",
      [
          {
              text: "Cancel",
              style: "cancel"
          },
          {
              text: "Yes", onPress: () => {
                  console.log("pressed alert")
              }
          }
      ])
  };
  

  const Item = ({ title }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={selected}>
      <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  if (!!route.params && !!route.params.list) {
    const { list } = route.params;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList data={list} renderItem={({ item }) => <Item title = {item.data} />} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionHeader}>This is the contents of your Fridge:</Text>
    </SafeAreaView>
  );
};
