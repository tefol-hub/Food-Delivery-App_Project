import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import tailwind from 'tailwind-react-native-classnames';

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={tailwind`mb-3 flex-row justify-between items-center pb-3 border-b border-gray-100`}>
     <View style={tailwind`flex-1 pr-3 flex-row items-center`}>
      <View style={tailwind`flex-1 pl-2`}>
        <Text style={[tailwind`text-gray-900 font-bold mb-1`, { fontSize: 16 }]}>{basketDish.name}</Text>
        <Text style={tailwind`text-gray-600 text-xs`}> {basketDish.description}</Text>
        <Text style={tailwind`text-red-800 text-xs`}>R {basketDish.price}</Text>
      </View>
     </View> 

     <View style={tailwind``}>
     <Image style={tailwind`h-16 w-16 rounded-lg`} source={{ uri: basketDish.image }} />
     </View>
    </View>
  );
};


export default BasketDishItem;
