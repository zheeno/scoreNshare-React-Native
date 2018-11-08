import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Textarea, Text, View, Item, Form, Icon, Button } from "native-base";
import { styles } from "../themes/variables/customStyles";

const SearchBar = props => {
  return (
    <Form style={barStyles.container}>
      <Item rounded padder style={[barStyles.bar]}>
        <Icon name="ios-search" style={[styles.greyText, { fontSize: 15 }]} />
        <Textarea rowSpan={2} placeholder="Search Here" />
      </Item>
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Form>
  );
};
export default SearchBar;

const barStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "green"
  },
  bar: {
    zIndex: 10,
    width: 200,
    height: 30,
    fontSize: 15,
    alignSelf: "center",
    marginTop: 10
  }
});
