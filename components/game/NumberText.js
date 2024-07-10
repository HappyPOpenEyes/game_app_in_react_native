import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberText({children, textstyles}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.numberText , textstyles]}>{children}</Text>
    </View>
  );
}

export default NumberText;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 20,
    borderColor: Colors.yellowText,
    borderWidth: 2,
    borderRadius: 5,
  },
  numberText: {
    fontSize: 36,
    textAlign: "center",
    padding: 20,
    fontWeight: "bold",
    color: Colors.yellowText,
  },
});
