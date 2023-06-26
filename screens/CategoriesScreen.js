import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummyData.js'
import { FlatList } from 'react-native';

function renderCategories(itemData) {
    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            id={itemData.item.id}
        />
    );
}

function CategoriesScreen() {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategories}
            numColumns={2}
        />
    );
}
export default CategoriesScreen;