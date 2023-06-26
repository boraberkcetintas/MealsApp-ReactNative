
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummyData";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen() {
    const Route = useRoute();
    const navigation = useNavigation();
    const categoryId = Route.params.categoryId;
    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryId, navigation])

    return <MealsList items={displayedMeals}/>
}
export default MealsOverviewScreen;

