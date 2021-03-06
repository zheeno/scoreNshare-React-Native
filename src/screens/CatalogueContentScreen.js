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
  Button,
  Card,
  CardItem,
  Label,
  Item,
  Badge
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import getTheme from "../themes/components";
import scorenshareTheme from "../themes/variables/scorenshareTheme";
import AppNavFooter from "../components/AppNavFooter";
import { styles } from "../themes/variables/customStyles";
import {
  SearchBarLink,
  LoaderOverlay,
  ErrorOverlay
} from "../components/MiscComponents";
import { GetData } from "../services/ApiCaller";
// import { renderCatalogue } from "../services/CatalogueScreenMethods";

class CatalogueContentScreen extends Component {
  componentDidMount() {
    this.initCatalogueContentPage();
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ajaxCallState: "fetching",
      ajaxCallError: null,
      catalogue: {},
      musics: []
    };
  }

  initCatalogueContentPage = () => {
    const catId = this.props.navigation.getParam("id", "NULL");
    this.setState({ isLoading: true });
    GetData("catalogues/" + catId + "?resType=json")
      .then(result => {
        let response = result;
        this.setState({
          isLoading: false,
          ajaxCallState: 200,
          ajaxCallError: null,
          catalogue: response.catalogue,
          musics: response.musics
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          ajaxCallState: "NET_ERR",
          ajaxCallError: error.message
        });
      });
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
        {this.state.isLoading ? (
          <LoaderOverlay text={"Fetching... Please wait"} />
        ) : this.state.ajaxCallState == "NET_ERR" ? (
          <ErrorOverlay
            text={this.state.ajaxCallError}
            reloadPage={this.initCatalogueContentPage}
          />
        ) : (
          <Container
            style={{
              flex: 1
            }}
          >
            <Content style={[styles.bgDark, styles.container]}>
              <Grid>
                <Row
                  style={[
                    styles.darkBg,
                    {
                      flex: 1,
                      flexDirection: "row",
                      padding: 5
                    }
                  ]}
                >
                  <Card
                    transparent
                    style={[
                      {
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                      },
                      styles.musicCard
                    ]}
                  >
                    <CardItem style={[styles.darkBg]}>
                      <Body>
                        <Icon
                          name="ios-disc"
                          style={[
                            styles.greyText,
                            { fontSize: 50, alignSelf: "center" }
                          ]}
                        />
                        <Text style={styles.greyText} />
                      </Body>
                    </CardItem>
                  </Card>
                  <View style={{ flex: 3, paddingLeft: 10 }}>
                    <Text style={styles.redText}>
                      {this.state.catalogue.title}
                    </Text>
                    <Text
                      style={[
                        styles.greyText,
                        { fontWeight: "100", fontSize: 15 }
                      ]}
                    >
                      {this.state.catalogue.description}
                    </Text>
                  </View>
                </Row>
                <Row style={styles.darkBg}>
                  <Item
                    style={[
                      styles.noBorders,
                      styles.positionCenter,
                      styles.flexColumn
                    ]}
                  >
                    <Icon
                      name="ios-musical-notes"
                      style={[
                        styles.greyText,
                        {
                          fontSize: 20
                        }
                      ]}
                    />
                    <Item style={[styles.noBorders, { marginLeft: 10 }]}>
                      <Text
                        style={[
                          styles.greyText,
                          {
                            fontSize: 15
                          }
                        ]}
                      >
                        {this.state.musics.length}
                      </Text>
                    </Item>
                  </Item>
                  <Item
                    style={[
                      styles.noBorders,
                      styles.positionCenter,
                      styles.flexColumn
                    ]}
                  >
                    <Icon
                      name="ios-musical-notes"
                      style={[
                        styles.greyText,
                        {
                          fontSize: 20
                        }
                      ]}
                    />
                    <Item style={[styles.noBorders, { marginLeft: 10 }]}>
                      <Text
                        style={[
                          styles.greyText,
                          {
                            fontSize: 15
                          }
                        ]}
                      >
                        {this.state.musics.length}
                      </Text>
                    </Item>
                  </Item>
                </Row>
                <Row>
                  <SearchBarLink nav={navigate} />
                </Row>
                <Row>
                  {/* loop through musics */}
                  {this.state.musics.length > 0 ? (
                    <List
                      dataArray={this.state.musics}
                      renderRow={musicObj => (
                        <ListItem
                          thumbnail
                          onPress={() =>
                            navigate("MusicContent", {
                              id: musicObj.music.id,
                              title: musicObj.music.title
                            })
                          }
                        >
                          <Left
                            style={{
                              paddingTop: 10
                            }}
                          >
                            <Thumbnail
                              small
                              source={require("../components/assets/img/Background-Music-Icon.png")}
                            />
                          </Left>
                          <Body
                            style={{
                              paddingLeft: 10,
                              paddingBottom: 2,
                              paddingRight: 5
                            }}
                          >
                            <Text
                              numberOfLines={1}
                              style={[
                                styles.greyText,
                                styles.catalogueCardTitle
                              ]}
                            >
                              {musicObj.music.title}
                            </Text>
                            <View
                              style={[
                                styles.flexRow_1,
                                { alignContent: "space-around" }
                              ]}
                            >
                              <Text
                                style={[
                                  styles.greyText,
                                  {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 13
                                  }
                                ]}
                              >
                                <Icon
                                  name="ios-heart"
                                  style={[styles.greyText, { fontSize: 13 }]}
                                />
                                &nbsp;&middot;&nbsp;
                                {musicObj.likes}
                              </Text>
                              <Text
                                style={[styles.greyText, styles.listInfoText]}
                              >
                                <Icon
                                  name="ios-chatboxes"
                                  style={[styles.greyText, { fontSize: 13 }]}
                                />
                                &nbsp;&middot;&nbsp;
                                {musicObj.reviews.length}
                              </Text>
                              <Text
                                style={[styles.greyText, styles.listInfoText]}
                              >
                                <Icon
                                  name="ios-cloud-download"
                                  style={[styles.greyText, { fontSize: 13 }]}
                                />
                                &nbsp;&middot;&nbsp;
                                {musicObj.downloads}
                              </Text>
                              <Text
                                style={[styles.greyText, styles.listInfoText]}
                              >
                                <Icon
                                  name="ios-archive"
                                  style={[styles.greyText, { fontSize: 13 }]}
                                />
                                &nbsp;&middot;&nbsp;
                                {musicObj.files.length}
                              </Text>
                            </View>
                          </Body>
                          <Right>
                            <Icon name="ios-arrow-dropright-circle" />
                          </Right>
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
            </Content>
            <AppNavFooter
              activeTab={"Catalogue"}
              nav={navigate}
              reloadCatalogues={() => navigate("Catalogue")}
            />
          </Container>
        )}
      </StyleProvider>
    );
  }
}
export default CatalogueContentScreen;
