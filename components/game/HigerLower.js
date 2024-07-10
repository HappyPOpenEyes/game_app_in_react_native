import { Ionicons } from "@expo/vector-icons";

import { View, Text, StyleSheet, Flexible } from "react-native";
import PrimaryButton from "../ui/PrimaryButton";
import Colors from "../../constants/colors";

function HigherLower({ onMinusPress, onPlusPress }) {
  function onMinusPressHandler() {
    onMinusPress();
  }

  function onPlusPressHandler() {
    onPlusPress();
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Higher or Lower ?</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonStyle}>
          <PrimaryButton onPress={onMinusPress}>
            <Ionicons name="remove" size={24} color="white" />
          </PrimaryButton>
        </View>
        <View style={styles.buttonStyle}>
          <PrimaryButton onPress={onPlusPress}>
            <Ionicons name="add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default HigherLower;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.primary200,
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },

  titleText: {
    color: Colors.yellowText,
    fontSize: 25,
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: "row",
  },
  buttonStyle: {
    flex: 1,
  },
});
