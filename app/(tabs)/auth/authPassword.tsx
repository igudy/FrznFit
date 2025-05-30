import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { passwordSchema } from "@/components/schema/auth";
import { useLocalSearchParams } from "expo-router";
import { useLoginUserMutation } from "@/components/apis/authApi";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUserInput {
  // email: string;
  password: string;
}

const authPassword = () => {
  const { email } = useLocalSearchParams();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
    },
  });

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const onSubmit = async (data: IUserInput) => {
    try {
      const response = await loginUser({
        email: email.toString(),
        password: data.password,
      }).unwrap();

      // Save token
      await AsyncStorage.setItem("token", response.token);
      // Save user data
      await AsyncStorage.setItem("user", JSON.stringify(response));
      Toast.show({
        type: "success",
        text1: "Login Sucessful",
      });
      router.push("/home/home");

      // Getting data from asynStorage
      // const token = await AsyncStorage.getItem("token");
      // router.push("/auth/register");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: error.message || "An error occured",
      });
    }
  };

  const handleGoogleLogin = () => {
    Alert.alert("Google Login", "Google login would be implemented here");
  };

  return (
    <View className="flex-1  items-center justify-center  bg-white p-6">
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-14 left-6 z-10"
      >
        <Ionicons name="arrow-back" size={24} color="#6B7280" />
      </TouchableOpacity>
      <View className="w-full max-w-md">
        <Text className="font-clashMedium text-black text-3xl font-semibold text-gray-800 mb-10">
          Password
        </Text>

        <View className="mb-4">
          <View
            className={`border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-lg p-3 flex-row items-center`}
          >
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="flex-1 text-gray-800"
                  placeholder="Enter your password"
                  placeholderTextColor="#9CA3AF"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={!showPassword}
                />
              )}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </Text>
          )}
        </View>

        {/* Login Button */}
        <TouchableOpacity
          className={`bg-purple-600 rounded-full p-4 items-center mb-4 ${
            isLoading ? "opacity-50" : ""
          }`}
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text className="text-white font-clashBold text-xl">Continue</Text>
          )}
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Google Sign In */}
        <TouchableOpacity
          className="border border-gray-300 rounded-lg p-3 flex-row items-center justify-center"
          onPress={handleGoogleLogin}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
            }}
            className="w-5 h-5 mr-2"
          />
          <Text className="text-gray-700">Continue with Google</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">Forgot Password? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/register")}>
            <Text className="font-bold">Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default authPassword;
