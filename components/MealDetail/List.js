import { Text, StyleSheet } from "react-native";

function List({ data }) {
    return (
        data.map((dataPoint) => <Text style={styles.listItem} key={dataPoint}>{dataPoint}</Text>)
    );
}
export default List;

const styles = StyleSheet.create({
    listItem: {
        marginHorizontal: 8,
        marginVertical: 5,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#fe5f55',
        fontSize:16,
        textAlign:'center',
        elevation:4,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8
    }
});