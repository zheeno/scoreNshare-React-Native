import React, { Component } from "react";
import { ScrollView } from "react-native";
import {
  Container,
  StyleProvider,
  Text,
  Content,
  View,
  Icon,
  List,
  ListItem,
  Left,
  Right,
  Body,
  Thumbnail,
  Footer,
  FooterTab,
  Button
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import getTheme from "../themes/components";
import scorenshareTheme from "../themes/variables/scorenshareTheme";
import { styles } from "../themes/variables/customStyles";
import { SearchBar } from "../components/MiscComponents";

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <SearchBar />,
      headerStyle: { backgroundColor: "#101010" }
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <StyleProvider style={getTheme(scorenshareTheme)}>
        <Container>
          <Grid style={[{ flex: 1, flexDirection: "column" }]}>
            <Row
              style={[
                styles.bgDark,
                {
                  flex: 1,
                  flexDirection: "row"
                }
              ]}
            >
              <ScrollView>
                {/* <Text style={styles.greyText}>Hello world</Text> */}
              </ScrollView>
            </Row>
          </Grid>
        </Container>
      </StyleProvider>
    );
  }
}
export default SearchScreen;
