import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../MealsList/MealItem";

function MealsList({ items }) {

    function renderMealItem(itemData) {
        const meal = itemData.item
        const mealProps = {
            title: meal.title,
            imageUrl: meal.imageUrl,
            duration: meal.duration,
            complexity: meal.complexity,
            affordability: meal.affordability,
            selectedMeal: meal
        };
        return <MealItem {...mealProps} />
    }

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
});