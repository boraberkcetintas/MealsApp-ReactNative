import { View, Text, StyleSheet } from "react-native";
function MealDetails({ duration, complexity, affordability, style, textStyle }) {
    return (
        <View style={[styles.details, style]}>
            <Text
                style={[styles.detailsItem, textStyle]}>
                {duration}m
            </Text>
            <Text
                style={[styles.detailsItem, textStyle]}>
                {complexity.toUpperCase()}
            </Text>
            <Text
                style={[styles.detailsItem, textStyle]}>
                {affordability.toUpperCase()}
            </Text>
        </View>
    );
}
export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsItem: {
        marginHorizontal: 8
    },
});