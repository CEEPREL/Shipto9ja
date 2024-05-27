import { View, Text, ScrollView, Image } from "react-native";
import React, { useCallback, useState } from "react";
import { Link, router, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../src/components/FormField";
import CustomButton from "../../src/components/CustomButton";
import { useGlobalContext } from "@/src/context/GlobalProvider";

// export interface GenericDialogProps {
//   setForm.userName: string;
//   password: string;
// }

const SignIn: React.FC = () => {
  const { setForm } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [localForm, setLocalForm] = useState({ userName: "", password: "" });
  const router = useRouter();

  const handleInputChange = (key: keyof typeof localForm, value: string) => {
    setLocalForm((prevForm) => ({ ...prevForm, [key]: value }));
  };
  const submit = async () => {
    setIsSubmitting(true);
    try {
      setForm(localForm);
      router.push("/home");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full flex justify-center min-h-[60vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[130px] left-28 h-[84px]"
            resizeMode="contain"
          />
          <FormField
            title="Username"
            value={localForm.userName}
            handleChangeText={(e: string) => handleInputChange("userName", e)}
            onChangeText={(e) => handleInputChange("userName", e)}
            otherStyles="mt-7"
            // onChange={() => {
            //   submit();
            // }}
            placeholder="UserName"
          />
          <FormField
            title="Password"
            value={localForm.password}
            handleChangeText={(e: string) => handleInputChange("password", e)}
            onChangeText={(e) => handleInputChange("userName", e)}
            otherStyles="mt-7"
            placeholder="Password"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            // isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
