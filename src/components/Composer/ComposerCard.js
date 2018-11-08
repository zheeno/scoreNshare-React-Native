import React, { Component } from "react";
import { Image } from "react-native";
import { Card, CardItem, Text, Body, Icon, Button } from "native-base";
import { styles } from "../../themes/variables/customStyles";

export default class ComposerCard extends Component {
  render() {
    return (
      <Card noShadow style={[styles.musicCard, styles.bgDark]}>
        <CardItem style={styles.bgDark}>
          <Body style={{ alignItems: "center", justifyContent: "center" }}>
            <Icon
              name="md-contact"
              style={{
                fontSize: 60,
                color: "#FFF"
              }}
            />
            <Text
              numberOfLines={1}
              style={[styles.greyText, styles.musicCardTitle]}
            >
              {this.props.content.title}
            </Text>
          </Body>
        </CardItem>
        <CardItem footer style={[styles.bgDark, { paddingTop: 0 }]}>
          <Button iconLeft rounded small>
            <Icon name="md-add-circle" />
            <Text>Follow</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}
