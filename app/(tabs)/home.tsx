import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  RefreshControl,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/src/context/GlobalProvider";
import { products, Product } from "../../src/data/product";
import SearchInput from "@/src/components/SearchInput";

const windowWidth = Dimensions.get("window").width;
const numColumns = 2;

const formatData = (data: Product[], numColumns: number) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ imagePath: "blank", title: "blank", price: 0 });
    numberOfElementsLastRow++;
  }
  return data;
};

const Home: React.FC = () => {
  const { form, addToCart } = useGlobalContext();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  const renderItem = ({ item }: { item: Product }) => {
    if (item.title === "blank") {
      return (
        <View style={{ flex: 1, margin: 10, backgroundColor: "transparent" }} />
      );
    }
    return (
      <View
        style={{ flex: 1, margin: 10, maxWidth: windowWidth / numColumns - 20 }}
      >
        <Image
          source={{ uri: item.imagePath }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
        <Pressable onPress={() => addToCart(item)} style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={formatData(products, numColumns)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        contentContainerStyle={{ paddingBottom: 10 }}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <Text
              style={styles.title}
            >{`Welcome ${form?.userName}, to Shipto9ja`}</Text>
            <SearchInput initialQuery="" />
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No products found</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  productImage: {
    width: "100%",
    height: 100,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#6200ee",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#999",
  },
});

export default Home;
