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
import { z } from "zod";
import { RegisterFormData, registerSchema } from "@/components/schema/auth";
import Toast from "react-native-toast-message";

const Register = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    // resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Registration data:", data);
    Toast.show({
      type: "success",
      text1: "Login Successful 👌",
      text2: "Welcome back, Chief!",
    });
    router.replace("/auth/forgotPassword");
  };

  const handleGoogleSignUp = () => {
    Alert.alert("Google Sign Up", "Google sign up would be implemented here");
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-14 left-6 z-10"
      >
        <Ionicons name="arrow-back" size={24} color="#6B7280" />
      </TouchableOpacity>

      <View className="w-full max-w-md">
        <Text className="font-clashMedium text-black text-3xl font-semibold text-gray-800 mb-10">
          Create Account
        </Text>

        {/* First Name Input */}
        <View className="mb-4">
          {/* <Text className="text-sm text-gray-600 mb-1">First Name</Text> */}
          <View
            className={`border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } rounded-lg p-3`}
          >
            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="text-gray-800"
                  placeholder="Firstname"
                  placeholderTextColor="#9CA3AF"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
          {errors.firstName && (
            <Text className="text-red-500 text-xs mt-1">
              {errors.firstName.message}
            </Text>
          )}
        </View>

        {/* Last Name Input */}
        <View className="mb-4">
          {/* <Text className="text-sm text-gray-600 mb-1">Last Name</Text> */}
          <View
            className={`border ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            } rounded-lg p-3`}
          >
            <Controller
              control={control}
              name="lastName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="text-gray-800"
                  placeholder="Lastname"
                  placeholderTextColor="#9CA3AF"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
          {errors.lastName && (
            <Text className="text-red-500 text-xs mt-1">
              {errors.lastName.message}
            </Text>
          )}
        </View>

        {/* Email Input */}
        <View className="mb-4">
          {/* <Text className="text-sm text-gray-600 mb-1">Email</Text> */}
          <View
            className={`border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg p-3`}
          >
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="text-gray-800"
                  placeholder="Email"
                  placeholderTextColor="#9CA3AF"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              )}
            />
          </View>
          {errors.email && (
            <Text className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </Text>
          )}
        </View>

        {/* Password Input */}
        <View className="mb-6">
          {/* <Text className="text-sm text-gray-600 mb-1">Password</Text> */}
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
                  placeholder="Password"
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

        {/* Sign Up Button */}
        <TouchableOpacity
          className="bg-purple-600 rounded-full p-4 items-center mb-4"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="text-white font-medium">Create Account</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Google Sign Up */}
        <TouchableOpacity
          className="border border-gray-300 rounded-lg p-3 flex-row items-center justify-center"
          onPress={handleGoogleSignUp}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
            }}
            className="w-5 h-5 mr-2"
          />
          <Text className="text-gray-700">Continue with Google</Text>
        </TouchableOpacity>

        {/* Already have an account link */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/forgotPassword")}>
            <Text className="font-bold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
