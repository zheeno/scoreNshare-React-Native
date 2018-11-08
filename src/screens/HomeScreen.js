import React, { Component } from "react";
import getTheme from "../themes/components";
import scorenshareTheme from "../themes/variables/scorenshareTheme";
import AppHeader from "../components/AppHeader";
import AppNavFooter from "../components/AppNavFooter";
import { Image, ScrollView } from "react-native";
import { styles } from "../themes/variables/customStyles";
import { Col, Row, Grid } from "react-native-easy-grid";
import { renderFeed } from "../services/HomeScreenMethods";
import { GetData } from "../services/ApiCaller";
import SideBar from "../components/SideBar";
import {
  Container,
  StyleProvider,
  Content,
  Text,
  DeckSwiper,
  Drawer,
  Thumbnail,
  Card,
  CardItem,
  Left,
  Body,
  Button,
  View,
  Toast
} from "native-base";
import SearchBar from "../components/SearchBar";

export default class HomeScreen extends Component {
  componentDidMount() {
    // this.setState({ ajaxCallState: "fetching" });
    // const { id } = this.props.match.params;
    // GetData("api/music/collection/" + id + "?resType=json")
    //   .then(result => {
    //     let response = result;
    //     Alert(response);
    //     this.setState({ music: response.music });
    //     this.setState({ details: response.details });
    //     this.setState({ files: response.files });
    //     this.setState({ reviews: response.reviews });
    //     this.setState({ ajaxCallState: "idle" });
    //     this.setState({ ajaxCallError: null });
    //   })
    //   .catch(error => {
    //     this.setState({ ajaxCallState: "NET_ERR" });
    //     this.setState({ ajaxCallError: error.message });
    //   });
  }

  state = {
    showToast: false,
    carousel: [
      {
        image:
          "./assets/img/1167987-rock-concert-wallpaper-1920x1080-full-hd.jpg",
        text: "100"
      },
      {
        text: "200"
      },
      {
        text: "300"
      }
    ],

    feeds: [
      {
        id: 1,
        title: "Featured Contents",
        category: "Hey",
        contentType: "music-list",
        content: [
          {
            id: 1,
            title: "Onos - Hallaleuija"
          }
        ]
      },
      {
        id: 2,
        title: "Contemporary",
        category: "Hey",
        contentType: "music-list",
        content: [
          {
            id: 1,
            title: "Victor AD - Wetin we gain"
          },
          {
            id: 2,
            title: "Take it back - Tu Face"
          },
          {
            id: 3,
            title: "Take it back - Tu Face"
          }
        ]
      },
      {
        id: 3,
        title: "Sponsored Composers",
        category: "Hey",
        contentType: "user-list",
        content: [
          {
            id: 1,
            title: "Victor"
          },
          {
            id: 2,
            title: "Take it back - Tu Face"
          },
          {
            id: 3,
            title: "Take it back - Tu Face"
          }
        ]
      }
    ]
  };

  static navigationOptions = {
    headerTitle: <AppHeader searchBar={true} rounded={false} />
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <StyleProvider style={getTheme(scorenshareTheme)}>
        <Container>
          {/* <Drawer
            type={"overlay"}
            open={false}
            ref={ref => {
              this.drawer = ref;
            }}
            content={<SideBar navigator={navigate} />}
            onClose={() => this.closeDrawer()}
          /> */}
          <Content style={styles.bgDark}>
            <Grid>
              <Row style={styles.carouselContainer}>
                <Col style={styles.carouselBody}>
                  <DeckSwiper
                    looping
                    dataSource={this.state.carousel}
                    renderItem={item => (
                      <React.Fragment>
                        <Card style={[styles.carouselItem, styles.bgDark]}>
                          <CardItem
                            button
                            onPress={() => navigate("Catalogue")}
                            cardBody
                            style={[styles.bgDark]}
                          >
                            {item.image ? (
                              <Image
                                source={require("../components/assets/img/1167987-rock-concert-wallpaper-1920x1080-full-hd.jpg")}
                                style={styles.carouselItemImage}
                              />
                            ) : (
                              <Text>No image</Text>
                            )}
                          </CardItem>
                          <CardItem cardBody style={styles.carouselItemMask}>
                            <Text style={styles.redText}>{item.text}</Text>
                          </CardItem>
                        </Card>
                      </React.Fragment>
                    )}
                  />
                </Col>
              </Row>

              {/* loop through feeds */}
              {this.state.feeds.length > 0 ? (
                this.state.feeds.map(feed => renderFeed(feed, navigate))
              ) : (
                <View>
                  <Text style={[styles.greyText]}>Nothing here to see</Text>
                </View>
              )}
            </Grid>
          </Content>

          <AppNavFooter
            activeTab={"Home"}
            nav={navigate}
            viewRef={this.state.viewRef}
          />
        </Container>
      </StyleProvider>
    );
  }
}
