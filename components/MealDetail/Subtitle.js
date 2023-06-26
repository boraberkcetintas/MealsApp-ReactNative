import { Text, StyleSheet, View } from "react-native";

function Subtitle({ children, style, textStyle }) {
    return (
        <View style={[styles.subtitleContainer, style]}>
            <Text style={[styles.subtitle, textStyle]}>{children}</Text>
        </View>
    );
}
export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#fe5f55'
    },
    subtitleContainer: {
        borderBottomWidth: 3,
        borderColor:'#fe5f55',
        marginHorizontal: 8,
        marginVertical: 8,
    }
});