import { View,Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function LogListComponent(props) {
    return (
        <View style = {styles.mainContainer}>
            <Text style= {styles.textStyle}>#{props.id}</Text>
            <Text style= {styles.textStyle}>
                Opponent Guess {props.text}
            </Text>
        </View>
    );
}

export default LogListComponent;


const styles = StyleSheet.create({
    mainContainer :{
        backgroundColor: Colors.primary500,
        borderRadius:5,

        flex: 1,
        marginVertical: 10,
        padding: 10,
        flexDirection:"row",
        justifyContent:"space-between"
    },

    textStyle :{
        fontSize : 16,
        color:"#ffffff",

    }
});