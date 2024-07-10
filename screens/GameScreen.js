import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import Title from "../components/ui/CommonTitle";
import NumberText from "../components/game/NumberText.js";
import HigherLower from "../components/game/HigerLower.js";
import LogListComponent from "../components/game/LogListComponent.js";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userGuessNumber, onGameOver, guesRoundNumber }) {
  const initialGuessNumber = generateRandomBetween(1, 100, userGuessNumber);
  const [currentGuessNumber, setCurrentGuessNumber] =
    useState(initialGuessNumber);

  useEffect(() => {
    if (currentGuessNumber === userGuessNumber) {
      onGameOver(currentLogList.length);
    }
  }, [currentGuessNumber, userGuessNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const [currentLogList, setCurrentLogList] = useState([]);

  function newGuessHandler(direction) {
    //direction => greater || lower

    if (
      (direction === "lower" && currentGuessNumber < userGuessNumber) ||
      (direction === "greater" && currentGuessNumber > userGuessNumber)
    ) {
      Alert.alert("Don't Lie", "You know the number", [{ text: "Sorry" }]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuessNumber;
    } else {
      minBoundary = currentGuessNumber + 1;
    }

    console.log(direction);
    console.log(currentGuessNumber, minBoundary, maxBoundary);
    const randomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuessNumber
    );
    setCurrentGuessNumber(randomNumber);

    // if (randomNumber === userGuessNumber) {
    //   Alert.alert("Bravo!!!!", "You Guess the number", [
    //     { text: "Thank you!" },
    //   ]);
    // return;
    // }
    setCurrentLogList((guessedText) => [
      ...guessedText,
      { name: currentGuessNumber },
    ]);
  }

  return (
    <View style={styles.screen}>
      <Title> Guess </Title>
      <NumberText>{currentGuessNumber}</NumberText>
      <HigherLower
        onMinusPress={newGuessHandler.bind(this, "lower")}
        onPlusPress={newGuessHandler.bind(this, "greater")}
      ></HigherLower>
      <FlatList
        data={currentLogList}
        renderItem={({ item, index }) => (
          <LogListComponent text={item.name} id={index} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },

  guessNumber: {
    fontSize: 16,
  },
});
