import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputTextHandler(currentText) {
    setEnteredNumber(currentText);
  }

  function onResetHandler() {
    setEnteredNumber("");
  }
  function onConfirmHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert(
        "Invalid Number",
        "Please select the number betweet 1 to 99.",
        [{ text: "Okay", onPress: onResetHandler, style: "destructive" }]
      );
      return;
    }
    onPickedNumber(chosenNumber);
    console.log("Valid Number");
  }

  return (
    <View style={styles.rootContainer}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={styles.text}>Guess My Number</Text>
      </View>
      <View style={styles.appContiner}>
      
      <Text style ={styles.instructionText}>Enter the text</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={inputTextHandler}
        value={enteredNumber}
        onSubmitEditing={onConfirmHandler}
      />
      <View style={styles.buttonStyles}>
        <View style={styles.singleButtonStyle}>
          <PrimaryButton onPress={onResetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.singleButtonStyle}>
          <PrimaryButton onPress={onConfirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
    </View>
    
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({

  rootContainer : {
    marginTop: 100,

  },

  appContiner: {
    marginHorizontal: 50,
    borderRadius: 8,
    marginTop: 36,
    padding: 16,
    elevation: 10,
    alignItems: "center",
    backgroundColor: Colors.primary200,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  text: {
    padding: 20,
    borderRadius: 5,
    color: "#cccccc",
    borderWidth: 2,
    textAlign: "center",
    borderColor: "#cccccc",
    fontSize:20,
    fontWeight:"700"
  },

  numberInput: {
    // height: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellowText,
    borderBottomWidth: 2,
    color: Colors.yellowText,
    marginVertical: 0,
    marginBottom: 20,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },

  buttonStyles: {
    flexDirection: "row",
  },
  singleButtonStyle: {
    flex: 1,
  },

  instructionText: {
    color: "#ffffff",
    fontSize: 16,
    margin: 10,
    fontWeight: "bold"
  },
});
