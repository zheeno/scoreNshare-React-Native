import React from "react";
import ComposerCard from "../components/Composer/ComposerCard";
import MusicCard from "../components/Music/MusicCard";
import { Col, Row, Grid } from "react-native-easy-grid";
import { ScrollView } from "react-native";
import { Text, Toast, Button } from "native-base";
import { styles } from "../themes/variables/customStyles";
import { GetData } from "../services/ApiCaller";

export function renderFeed(feed, navigate) {
  switch (feed.contentType) {
    case "user-list":
      result = renderUserScrollList(feed, navigate);
      break;

    default:
      result = renderMusicScrollList(feed, navigate);
      break;
  }
  return result;
}

export function renderMusicScrollList(feed, navigate) {
  return (
    <Row key={feed.catalogue.id}>
      {/* featured contents */}
      <Col style={styles.padTop25}>
        <Text style={[styles.redText, { marginLeft: 25 }]}>
          {feed.catalogue.category}
        </Text>
        <Button
          small
          light
          transparent
          style={[{ right: 5, top: 20, position: "absolute" }]}
          onPress={() =>
            navigate("CatalogueContent", {
              id: feed.catalogue.id,
              title: feed.catalogue.category,
              content: feed
            })
          }
        >
          <Text style={{ fontSize: 12 }}>More</Text>
        </Button>
        <ScrollView horizontal>
          <Grid style={{ overflowX: "auto" }}>
            {feed.musics.map(music => (
              <Col key={music.id} style={styles.musicCardContainer}>
                <MusicCard nav={navigate} content={music} />
              </Col>
            ))}
          </Grid>
        </ScrollView>
      </Col>
      {/* featured contents ends here */}
    </Row>
  );
}

export function renderUserScrollList(feed, navigate) {
  return (
    <Row key={feed.title}>
      {/* featured contents */}
      <Col style={styles.padTop25}>
        <Text style={[styles.redText, { marginLeft: 25 }]}>{feed.title}</Text>
        <Text
          style={[
            styles.greyText,
            { right: 10, top: 25, position: "absolute", fontSize: 12 }
          ]}
        >
          More
        </Text>
        <ScrollView horizontal>
          <Grid style={{ overflowX: "auto" }}>
            {feed.content.map(content => (
              <Col key={content.id} style={styles.musicCardContainer}>
                <ComposerCard content={content} />
              </Col>
            ))}
          </Grid>
        </ScrollView>
      </Col>
      {/* featured contents ends here */}
    </Row>
  );
}
