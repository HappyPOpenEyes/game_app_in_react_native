import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from 'expo-font';
import {AppLoading} from "expo-app-loading";

export default function App() {
  const [confirmNumber, setConfirmNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);

  const [fontLoaded]= useFonts({
    "open-sans" : require('./assets/fonts/OpenSans-Regular.ttf'),
    "open-sans-bold" : require('./assets/fonts/OpenSans-Bold.ttf'),
  })
  
  // if(!fontLoaded){
  //   return <AppLoading/>;
  // }

  function onPickedNumberHandler(pickedNumber) {
    setConfirmNumber(pickedNumber);
    setGameIsOver(false);
  }

  let screens = <StartGameScreen onPickedNumber={onPickedNumberHandler} />;
  // let screens = <GameOverScreen />;;
  function onGameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRound(numberOfRounds);
  }

  function onStartNewGamePress(){
    setConfirmNumber();
    setGameIsOver(false);
    setGuessRound(0)
  }

  if (confirmNumber) {
    screens = (
      <GameScreen
        userGuessNumber={confirmNumber}
        onGameOver={onGameOverHandler}
      />
    );
  }

  if (gameIsOver && confirmNumber) {
    screens = <GameOverScreen onStartNewGamePress={onStartNewGamePress}userNumber={confirmNumber}roundsNumber={guessRound}/>;
  }

  return (
    <LinearGradient
      colors={[Colors.primary200, Colors.yellowText]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screens}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
