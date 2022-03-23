import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

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
    alignItems: "flex-end",
  },
  button: {
    fontSize: 24,
  },
});

export const FridgeScreen = ({ route, navigation }) => {
  const [newlist, setNewList] = useState([]);
  const [added, setAdded] = useState(false);
  const [routeparams, setRouteParams] = useState("");


  const selected = (title) => {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {deleteItem(title)},
      },
    ]);
  };
  const deleteItem = (title) => {
    console.log("are you here?");
    var array = [...newlist]; // make a separate copy of the array
    let newArray = [];
    console.log(array);
      for(let i =0; i<array.length; i++){
        if(array[i].data !== title){
          newArray.push(array[i]);
        }
      }
      console.log(newArray);
      setNewList(newArray);
  };
  const Item = ({ title }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          selected(title);
        }}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
  const addItem = (arr) => {
    setRouteParams(route.params);
    setAdded(false);
    setNewList(arr);
  };
  if(!!route.params && route.params !== routeparams){
    setAdded(true);
  }
  if (!!route.params && !!route.params.list && added) {
    addItem(route.params.list);
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionHeader}>
        This is the contents of your Fridge:
      </Text>
      <FlatList
        data={newlist}
        renderItem={({ item }) => <Item title={item.data} />}
      />
    </SafeAreaView>
  );
};
