import { View, Text, Image ,ScrollView } from "react-native";
import styles from "./styles";
import tailwind from 'tailwind-react-native-classnames';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
        <Foundation name="dollar" size={20} color="green" /> {restaurant.deliveryFee} &#8226; <AntDesign name="clockcircleo" size={18} color="#F32D17" /> {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} min • 
        </Text>

        <Text style={[tailwind`text-gray-800 font-bold border-b w-1/3 mb-2 pb-1`, { borderBottomColor: "#30833B", fontSize: 17 }]}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;
