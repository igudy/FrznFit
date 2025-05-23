import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { authSchema } from "@/components/schema/auth";

interface IUserInput {
  email: string;
  password: string;
}

const authPassword = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (data: IUserInput) => {
    console.log(data);
    router.replace("/");
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
          className="bg-purple-600 rounded-full p-4 items-center mb-4"
          onPress={() => router.push("/auth/register")}
        >
          <Text className="text-white font-medium text-lg text-lg font-clashBold text-xl">
            Continue
          </Text>
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
