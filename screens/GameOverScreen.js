import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/CommonTitle";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGamePress}) {

    function onStartNewGameHandler(){
        onStartNewGamePress();
    }

  return (
    <View style={styles.mainContainer}>
      <Title otherStyles={styles.titleStyle}>Game Over!</Title>

      <Image
        source={require("../assets/images/success.png")}
        style={styles.imageStyle}
      />
      <Text style={styles.mainTextStyles}>
        Your Phone needed <Text style={styles.highlightedText}> {roundsNumber} </Text> rounds
        to guess the number <Text style={styles.highlightedText}> {userNumber} </Text>
      </Text>
        <PrimaryButton onPress={onStartNewGameHandler}>
            Start New Game
        </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  titleStyle: {
    fontSize: 40,
    borderWidth: 0,
  },

  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary500,
  },

  mainTextStyles: {
    fontSize:20,
    margin: 20,

  },

  highlightedText: {
    color: Colors.primary500,
    fontWeight: "800",
    fontSize: 25,
  },
});
