import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormData, emailSchema } from "@/components/schema/auth";
import { useRouter } from "expo-router";
import {
  useGetLoginStatusQuery,
  useGetUsersQuery,
} from "@/components/apis/authApi";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { useGoogleLoginMutation } from "@/components/apis/authApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from "expo-auth-session/providers/google";
import Constants from "expo-constants";
import { makeRedirectUri } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

interface MyExtra {
  googleExpoClientId: string;
  googleIosClientId: string;
  googleAndroidClientId: string;
  googleWebClientId: string;
  backendUrl: string;
}

const extra = Constants.expoConfig?.extra as MyExtra;

export default function LoginScreen() {
  const router = useRouter();
  const [googleLogin] = useGoogleLoginMutation();
  const [backendID, setBackendID] = useState("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: extra.googleExpoClientId,
    iosClientId: extra.googleIosClientId,
    androidClientId: extra.googleAndroidClientId,
    webClientId: extra.googleWebClientId,
    scopes: ["openid", "profile", "email"],
    responseType: "id_token",
  });

  console.log("🚀 ~ LoginScreen ~ promptAsync:", promptAsync);
  console.log("🚀 ~ LoginScreen ~ response:", response);
  console.log("🚀 ~ LoginScreen ~ request:", request);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    if (response?.type === "success") {
      const idToken = response?.params?.id_token;
      if (idToken) {
        handleGoogleSignIn(idToken);
      } else {
        Alert.alert("Error", "No ID token returned");
      }
    }
  }, [response]);

  const handleGoogleSignIn = async (idToken: string) => {
    try {
      const res = await googleLogin({
        userToken: idToken,
        isMobile: true,
      }).unwrap();

      // Store the token for future requests
      await AsyncStorage.setItem("userToken", res.token);

      // Navigate to home screen
      router.replace("/home/home");
    } catch (error) {
      Alert.alert("Error", "Failed to sign in with Google");
      console.error(error);
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <View className="w-full max-w-md">
        <Text className="font-clashMedium text-black text-3xl text-gray-800 mb-10">
          Sign In
        </Text>

        <View className="mb-4">
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
                  placeholder="Email Address"
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

        <TouchableOpacity
          className="bg-purple-600 rounded-full p-4 items-center mb-4"
          onPress={handleSubmit((data) => {
            router.push({
              pathname: "/auth/authPassword",
              params: { email: data.email },
            });
          })}
        >
          <Text className="text-white font-medium text-lg text-lg font-clashBold text-xl">
            Continue
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        <TouchableOpacity
          className="border border-gray-300 rounded-lg p-3 flex-row items-center justify-center"
          onPress={() => promptAsync()}
          disabled={!request}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
            }}
            className="w-5 h-5 mr-2"
          />
          <Text className="text-gray-700">Continue with Google</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/register")}>
            <Text className="font-bold">Create One</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//  <View className="flex-1 items-center justify-center bg-white">
//    <Text className="font-clashMedium text-3xl">Login Page</Text>
//    {/* <Text className="font-clash text-xl">Hello Clash Regular</Text>
//    <Text className="font-clashBold text-xl">Hello Clash Bold</Text>
//    <Text className="font-clashLight text-xl">Hello Clash Light</Text>
//    <Text className="font-clashMedium text-xl">Hello Clash Medium</Text>
//    <Text className="font-clashSemi text-xl">Hello Clash SemiBold</Text>
//    <Text className="font-clashExtra text-xl">Hello Clash ExtraLight</Text>
//    <Text className="font-mono text-xl">Hello Space Mono</Text> */}
//    {/* <Text className="text-black text-3xl font-semibold">Login Page</Text> */}
//  </View>