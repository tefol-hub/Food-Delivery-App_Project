import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tailwind from 'tailwind-react-native-classnames';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Restaurant", { id: restaurant.id });
  };

  return (
    <Pressable onPress={onPress} style={tailwind`mx-4 mb-4`}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={tailwind`w-full h-48 rounded-lg`}
      />
      <View style={tailwind`flex-row items-center mt-1`}>
        <View style={tailwind`flex-grow`}>
          <Text style={tailwind`font-bold text-lg`} numberOfLines={1}>{restaurant.name}</Text>
          <Text style={tailwind`flex-row items-center`}>
          <MaterialCommunityIcons name="clock-time-four" size={13} color="#06C167" />
            {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} • min • R {restaurant.deliveryFee}
          </Text>
        </View>

        <View style={tailwind`w-8 h-8 justify-center items-center bg-gray-100 rounded-full`}>
          <Text style={tailwind`text-gray-600 text-xs`}>{restaurant.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;
