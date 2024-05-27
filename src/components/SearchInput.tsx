import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, Pressable, Image, TextInput, Alert } from "react-native";

import { icons } from "../../constants";
interface Props {
  initialQuery: string;
}
const SearchInput = ({ initialQuery }: Props) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
      <TextInput
        className="text-base mt-0.5 text-black flex-1 font-pregular"
        value={query}
        placeholder="Search a product"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <Pressable
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/home")) router.setParams({ query });
          else router.push(`/search`);
        }}
      >
        <Image
          source={icons.searchIcon}
          className="w-5 h-5"
          resizeMode="contain"
          tintColor={"#33652D"}
        />
      </Pressable>
    </View>
  );
};

export default SearchInput;
