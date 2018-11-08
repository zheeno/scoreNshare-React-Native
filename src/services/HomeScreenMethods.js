import React from "react";
import ComposerCard from "../components/Composer/ComposerCard";
import MusicCard from "../components/Music/MusicCard";
import { Col, Row, Grid } from "react-native-easy-grid";
import { ScrollView } from "react-native";
import { Text, Toast } from "native-base";
import { styles } from "../themes/variables/customStyles";

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
    <Row key={feed.title}>
      {/* featured contents */}
      <Col style={styles.padTop25}>
        <Text style={[styles.redText, { marginLeft: 25 }]}>{feed.title}</Text>
        <Text
          button
          style={[
            styles.greyText,
            { right: 10, top: 25, position: "absolute", fontSize: 12 }
          ]}
          onPress={() =>
            navigate("CatalogueContent", {
              id: feed.id,
              title: feed.title,
              content: feed
            })
          }
        >
          More
        </Text>
        <ScrollView horizontal>
          <Grid style={{ overflowX: "auto" }}>
            {feed.content.map(content => (
              <Col key={content.id} style={styles.musicCardContainer}>
                <MusicCard nav={navigate} content={content} />
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
