import { View, Text, ScrollView, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../src/components/CustomButton";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <StatusBar />
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Text className="text-3xl text-pri font-bold">
            Welcome to Shipto9ja!
          </Text>
          <Text className="text-sm text-pri font-bold">
            As good as taking it there yourself...
          </Text>
          <CustomButton
            title="Continue"
            handlePress={() => router.push("/signIn")}
            containerStyles="w-full bg-green-700 mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
