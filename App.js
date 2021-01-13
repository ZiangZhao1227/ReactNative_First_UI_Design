import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Menu, Settings } from "react-native-feather";

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require("./assets/dog-and-cat.jpg")}
          style={styles.bgImage}
        ></ImageBackground>
        <Menu stroke="black" strokeWidth={3} width={32} height={32} style={styles.menu} />
        <Settings
          stroke="black"
          strokeWidth={3}
          width={32}
          height={32}
          style={styles.settings}
        />

        <Text style={styles.hello}>Get your own Cat&Dog</Text>
      </View>

      <View style={styles.infoArea}>
        <FlatList
          data={mediaArray}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.row}>
                <Image
                  style={styles.list_img}
                  source={{ uri: item.thumbnails.w160 }}
                />
                <View style={styles.textbox}>
                  <Text style={styles.listTitle}>{item.title}</Text>
                  <Text style={styles.fontbox}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.footerArea}>
        <Text style={styles.footerText}>Author: Ziang Zhao</Text>
      </View>

      <StatusBar backgroundColor="mediumvioletred" barStyle="light-content" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "darkseagreen",
    flex: 1,
    height: "100%",
  },

  bgImage: {
    height: 230,
    borderBottomRightRadius: 20,
  },
  menu: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  settings: {
    position: "absolute",
    top: 20,
    right: 10,
  },
  hello: {
    position: "absolute",
    padding: 10,
    top: 183,
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "orange",
    opacity: 0.7,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  infoArea: {
    flex: 6,
    flexDirection: "row",
    backgroundColor: "lightgray",
    marginTop: 5,
  },
  row: {
    flexDirection: "row",
    padding: 15,
    margin: 5,
    backgroundColor: "silver",
    borderRadius: 20,
    borderWidth: 5,
  },
  list_img: {
    flex: 1,
    height: 100,
    borderRadius: 100,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  fontbox: {
    fontWeight: "bold",
    fontSize: 15,
  },
  footerArea: {
    height: 20,
    backgroundColor: "darkseagreen",
  },
  listTitle: {
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 15,
    alignSelf: "center",
    color: "mediumvioletred",
  },
  footerText: {
    fontWeight: "bold",
    alignSelf: "center",
  },
});

const mediaArray = [
  {
    key: "0",
    title: "Kitten",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere.",
    thumbnails: {
      w160: "http://placekitten.com/160/161",
    },
    filename: "http://placekitten.com/2048/1920",
  },
  {
    key: "1",
    title: "Miauww",
    description:
      "Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ",
    thumbnails: {
      w160: "http://placekitten.com/160/164",
    },
    filename: "http://placekitten.com/2041/1922",
  },
  {
    key: "2",
    title: "William",
    description:
      "Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ",
    thumbnails: {
      w160: "http://placekitten.com/160/167",
    },
    filename: "http://placekitten.com/2039/1920",
  },
];
