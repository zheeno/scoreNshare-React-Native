import React, { Component } from "react";
import {
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Text
} from "native-base";
import { Image, ImageBackground } from "react-native";
import { styles } from "../themes/variables/customStyles";

export default class AppHeader extends Component {
  render() {
    return (
      <Header noLeft style={[styles.wineGradient]}>
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
        </Body>
        <Right />
      </Header>
    );
  }
}
