import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useContext } from "react";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/MealDetail/IconButton";
//import { FavoritesContext } from "../store/context/favorites-context"; React Context
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorite";

function MealDetailScreen() {
    const navigation = useNavigation();
    const Route = useRoute();
    const selectedMeal = Route.params.selectedMeal;
    //const favoriteMealsContext = useContext(FavoritesContext); React Context
    //const mealIsFavorite = favoriteMealsContext.ids.includes(selectedMeal.id); React Context
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();
    const mealIsFavorite = favoriteMealIds.includes(selectedMeal.id);


    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            //favoriteMealsContext.removeFavorite(selectedMeal.id); React Context
            dispatch(removeFavorite({ id: selectedMeal.id }));
        } else {
            //favoriteMealsContext.addFavorite(selectedMeal.id); React Context
            dispatch(addFavorite({ id: selectedMeal.id }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => {
                return <IconButton
                    onPress={changeFavoriteStatusHandler}
                    color='white'
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                />
            }
        });
    }, [selectedMeal, navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            </View>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={{ fontWeight: 'bold' }}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredient</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 32,
    },
    imageContainer: {
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        borderBottomWidth: 4,
        borderColor: '#fe5f55',
        overflow: 'hidden',
        elevation: 16,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 50
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 16,
        marginVertical: 8,
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
});