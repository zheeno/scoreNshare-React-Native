import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Text,
  View,
  Item,
  Form,
  Icon,
  Button,
  Input,
  Left,
  Right,
  Body,
  Container,
  Spinner,
  Row
} from "native-base";
import { styles } from "../themes/variables/customStyles";

export const ErrorOverlay = props => {
  return (
    <Container>
      <View style={[styles.bgDark, styles.flexColumn, styles.justifyCenter]}>
        <Row
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 50
          }}
        >
          <Icon name="ios-globe" style={[styles.greyText, { fontSize: 80 }]} />
          <Icon
            name="ios-close-circle"
            style={[styles.redText, { marginTop: -80, marginRight: -50 }]}
          />
        </Row>
        <Row
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: 10,
            paddingRight: 10
          }}
        >
          <Text style={[styles.greyText, { marginLeft: 5, fontSize: 15 }]}>
            {props.text}
          </Text>
          <Text
            style={[styles.greyText, { alignSelf: "center", fontSize: 15 }]}
          >
            Kindly check your network
          </Text>
        </Row>
        <Row
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 30
          }}
        >
          <Button
            icon
            primary
            rounded
            onPress={() => {
              props.reloadPage(props.pageContentId);
            }}
            style={{ alignSelf: "flex-end" }}
          >
            <Icon name="ios-refresh" />
            <Text>Try Again</Text>
          </Button>
        </Row>
      </View>
    </Container>
  );
};

export const LoaderOverlay = props => {
  //   const navigate = props.nav;
  return (
    <Container>
      <View style={[styles.bgDark, styles.flexRow_1, styles.justifyCenter]}>
        <Spinner color="#1976D2" />
        <Text style={[styles.greyText, { marginLeft: 5, fontSize: 13 }]}>
          {props.text}
        </Text>
      </View>
    </Container>
  );
};

export const SearchBarLink = props => {
  const navigate = props.nav;
  return (
    <View
      style={[
        styles.darkBg,
        barStyles.container,
        { paddingTop: 20, paddingBottom: 20 }
      ]}
    >
      <Left>
        <Button transparent small light>
          {/* link to discover trending music */}
          <Icon name="ios-musical-note-outline" />
        </Button>
      </Left>
      <Button
        icon
        style={[
          barStyles.bar,
          {
            backgroundColor: "#313131",
            padding: 5,
            borderRadius: 20,
            flex: 3
          }
        ]}
        onPress={() => navigate("SearchScreenContent")}
      >
        <Left style={{ flex: 1, alignItems: "center" }}>
          <Icon name="ios-search" style={[styles.greyText, { fontSize: 20 }]} />
        </Left>
        <Body style={{ flex: 5, alignItems: "flex-start" }}>
          <Text style={[styles.greyText]}>Search</Text>
        </Body>
      </Button>
      <Right>
        <Button transparent small light>
          {/* link to discover composers */}
          <Icon name="ios-people" />
        </Button>
      </Right>
    </View>
  );
};

export const SearchBar = props => {
  return (
    <Form style={[barStyles.container]}>
      <Item
        rounded
        padder
        style={[barStyles.bar, { flex: 3, alignSelf: "auto" }]}
      >
        <Icon name="ios-search" style={[styles.greyText, { fontSize: 15 }]} />
        <Input
          placeholder="Search Here"
          style={[styles.greyText, { paddingTop: 10, paddingRight: 15 }]}
        />
      </Item>
      <Right>
        <Button transparent>
          <Icon name="ios-close" style={[styles.greyText]} />
        </Button>
      </Right>
    </Form>
  );
};

const barStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  bar: {
    zIndex: 10,
    width: 200,
    height: 30,
    fontSize: 15,
    alignSelf: "center"
  }
});
