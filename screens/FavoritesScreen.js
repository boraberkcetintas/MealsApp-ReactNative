import { Text, StyleSheet, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummyData";
import { useContext } from "react";
//import { FavoritesContext } from "../store/context/favorites-context"; React Context
import { useSelector } from "react-redux";

function FavoritesScreen() {
    //const favoriteMealsContext = useContext(FavoritesContext); React Context
    //const favoriteMeals = MEALS.filter((meal) => favoriteMealsContext.ids.includes(meal.id)); React Context
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You have no favorites yet.</Text>
                <Text style={styles.text}>Add Some!</Text>
            </View>
        );
    }

    return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign:'center'
    }
});