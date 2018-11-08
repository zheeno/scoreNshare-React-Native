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
import AppNavFooter from "../components/AppNavFooter";
import { styles } from "../themes/variables/customStyles";
// import { renderCatalogue } from "../services/CatalogueScreenMethods";

class CatalogueContentScreen extends Component {
  state = {
    musics: [
      {
        id: 1,
        title: "Victor AD - Wetin we gain",
        composer: "Efezino"
      },
      {
        id: 2,
        title: "Take it back - Tu Face",
        composer: "Efezino"
      },
      {
        id: 3,
        title: "Take it back - Tu Face",
        composer: "Efezino"
      }
    ]
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <StyleProvider style={getTheme(scorenshareTheme)}>
        <Container
          style={{
            flex: 1
          }}
        >
          {/* <AppHeader /> */}
          <Content style={[styles.bgDark, styles.container]}>
            <ScrollView>
              <Grid>
                <Row style={[styles.carouselContainer]}>
                  <Col
                    style={[
                      styles.carouselBody,
                      { alignItems: "center", justifyContent: "center" }
                    ]}
                  >
                    <Content>
                      <Icon
                        name="ios-disc"
                        style={[styles.greyText, { fontSize: 50 }]}
                      />
                    </Content>
                    <Footer noShadow style={styles.darkBg}>
                      {/* <FooterTab> */}
                      <Grid>
                        <Col>
                          <Left>
                            <Icon
                              style={[
                                styles.greyText,
                                {
                                  fontSize: 20
                                }
                              ]}
                              name="ios-musical-notes-outline"
                            />
                          </Left>
                          <Right>
                            <Text style={styles.greyText}>
                              {this.state.musics.length}
                            </Text>
                          </Right>
                        </Col>
                        <Col>
                          <Left>
                            <Icon
                              style={[
                                styles.greyText,
                                {
                                  fontSize: 20
                                }
                              ]}
                              name="md-heart"
                            />
                          </Left>
                          <Right>
                            <Text style={styles.greyText}>
                              {this.state.musics.length}
                            </Text>
                          </Right>
                        </Col>
                      </Grid>
                      {/* </FooterTab> */}
                    </Footer>
                  </Col>
                </Row>
                <Row>
                  {/* loop through musics */}
                  {this.state.musics.length > 0 ? (
                    <List
                      dataArray={this.state.musics}
                      renderRow={music => (
                        <ListItem
                          thumbnail
                          onPress={() =>
                            navigate("MusicContent", {
                              id: music.id,
                              title: music.title,
                              content: JSON.stringify(music)
                            })
                          }
                        >
                          <Left>
                            <Thumbnail
                              small
                              source={require("../components/assets/img/Background-Music-Icon.png")}
                            />
                          </Left>
                          <Body>
                            <Text
                              numberOfLines={1}
                              style={[
                                styles.redText,
                                styles.catalogueCardTitle
                              ]}
                            >
                              {music.title}
                            </Text>
                            <Text
                              note
                              numberOfLines={2}
                              style={styles.greyText}
                            >
                              {music.composer}
                            </Text>
                          </Body>
                        </ListItem>
                      )}
                    />
                  ) : (
                    <Col
                      style={[
                        {
                          alignItems: "center",
                          justifyContent: "center",
                          height: 200
                        }
                      ]}
                    >
                      <Icon
                        name="md-information-circle"
                        style={[styles.darkText, { fontSize: 50 }]}
                      />
                      <Text style={[styles.darkText]}>Nothing here to see</Text>
                    </Col>
                  )}
                </Row>
              </Grid>
            </ScrollView>
          </Content>
          <AppNavFooter activeTab={"Catalogue"} nav={navigate} />
        </Container>
      </StyleProvider>
    );
  }
}
export default CatalogueContentScreen;
