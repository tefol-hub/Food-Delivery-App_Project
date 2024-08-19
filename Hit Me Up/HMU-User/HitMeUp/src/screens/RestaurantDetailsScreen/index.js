import { View, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import restaurants from "../../../assets/data/restaurants.json";
import Header from "./Header";
import styles from "./styles";
import tailwind from 'tailwind-react-native-classnames';
import { useRoute, useNavigation } from "@react-navigation/native";


const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  console.warn(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <TouchableOpacity style={tailwind`absolute top-9 left-4 z-30 w-9 h-9 rounded-full bg-white justify-center items-center shadow`} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={18} color= "#C1000F" />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantDetailsPage;
