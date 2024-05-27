import React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/src/context/GlobalProvider";
import { Product } from "../../src/data/product";

const CartScreen: React.FC = () => {
  const { cart } = useGlobalContext();

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.imagePath }} style={styles.productImage} />
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  cartItem: {
    flex: 1,
    margin: 10,
    maxWidth: Dimensions.get("window").width - 20,
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
});

export default CartScreen;
