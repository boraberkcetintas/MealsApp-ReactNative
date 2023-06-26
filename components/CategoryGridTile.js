import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';

function CategoryGridTile({ title, color, id }) {
    const navigation = useNavigation();
    function onPressHandler() {
        navigation.navigate('MealsOverview', {
            categoryId: id,
        });
    };

    return (
        <View style={styles.mainContainer}>
            <Pressable
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                android_ripple={{ color: '#ccc' }}
                onPress={onPressHandler}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View >
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 16,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 16,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 16
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.50,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});