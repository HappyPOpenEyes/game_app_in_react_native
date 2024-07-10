import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";


function Title({children, otherStyles}) {
      return <Text style={[styles.title,otherStyles]}> {children} </Text>;
}

export default Title;

const styles = StyleSheet.create({
      title: {
    fontSize: 19,
    fontWeight: "bold",
    color: Colors.yellowText,
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.yellowText,
  },
});