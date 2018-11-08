import React, { Component } from "react";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";
import { Image } from "react-native";
import { styles } from "../themes/variables/customStyles";
import SearchBar from "./SearchBar";

export default class AppHeader extends Component {
  render() {
    return (
      <Header
        noLeft
        style={[styles.wineGradient]}
        searchBar={this.props.searchBar}
        rounded={this.props.rounded}
      >
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body
          style={{
            alignContent: "center"
          }}
        >
          {this.props.searchBar == false ? (
            <Image
              source={require("./assets/img/logo.png")}
              resizeMode={"center"}
              style={{
                width: 180,
                flex: 1,
                alignSelf: "flex-start",
                justifyContent: "center"
              }}
            />
          ) : (
            <SearchBar />
          )}
        </Body>
        <Right />
      </Header>
    );
  }
}
