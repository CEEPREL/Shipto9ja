import { Text, View } from "react-native";
import SearchInput from "../../src/components/SearchInput";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 items-center" /*style={styles.container}*/>
      <Text className="text-lg text-pri font-bold" /*style={styles.title}*/>
        Welcome to Shipto9ja
      </Text>
      <SearchInput initialQuery="" />
      <View />
    </SafeAreaView>
  );
};
export default Home;
