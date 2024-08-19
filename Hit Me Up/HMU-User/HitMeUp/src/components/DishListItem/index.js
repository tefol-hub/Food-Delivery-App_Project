import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tailwind from 'tailwind-react-native-classnames';

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Dish", { id: dish.id })}
      style={styles.container}
    >
      <View style={tailwind`flex-1 pl-2`}>
        <Text style={[tailwind`text-gray-900 font-bold mb-1`, { fontSize: 16 }]}>{dish.name}</Text>
        <Text style={tailwind`text-gray-600 text-xs`} numberOfLines={3}>
          {dish.description}
        </Text>
        <Text style={tailwind`text-green-800 text-xs`}> R {dish.price}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={tailwind`h-16 w-16 rounded-lg`} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});

export default DishListItem;
