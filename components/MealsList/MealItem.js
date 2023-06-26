import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";
function MealItem({ title, imageUrl, duration, complexity, affordability, selectedMeal }) {
    const navigation = useNavigation();
    function onPressMealItemHandler() {
        navigation.navigate('MealDetail', {
            selectedMeal: selectedMeal
        });
    }
    return (
        <View style={styles.mainContainer}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) =>
                    pressed ?
                        (Platform.OS === "ios" ? styles.buttonPressed : null) : null
                }
                onPress={onPressMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View >
    );
}
export default MealItem;

const styles = StyleSheet.create({
    mainContainer: {
        margin: 16,
        borderRadius: 16,
        backgroundColor: 'white',
        elevation: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

        //For İOS
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    innerContainer: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 20,
        margin: 8,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonPressed: {
        opacity: 0.25
    }

});