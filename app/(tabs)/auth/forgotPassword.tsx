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
import {
  AuthFormData,
  authSchema,
  forgotPassSchema,
  ForgotPasswordForm,
} from "@/components/schema/auth";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPassSchema),
    defaultValues: {
      forgotPassword: "",
    },
  });

  return (
    <View className="flex-1  items-center justify-center  bg-white p-6">
      <View className="w-full max-w-md">
        <Text className="font-clashMedium text-black text-3xl font-semiboldtext-gray-800 mb-10">
          Forgot Password
        </Text>

        <View className="mb-4">
          {/* <Text className="text-sm text-gray-600 mb-1">forgotPassword</Text> */}
          <View
            className={`border ${
              errors.forgotPassword ? "border-red-500" : "border-gray-300"
            } rounded-lg p-3`}
          >
            <Controller
              control={control}
              name="forgotPassword"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="text-gray-800"
                  placeholder="Email address"
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
          {errors.forgotPassword && (
            <Text className="text-red-500 text-xs mt-1">
              {errors.forgotPassword.message}
            </Text>
          )}
        </View>

        {/* Button */}
        <TouchableOpacity
          className="bg-purple-600 rounded-full p-4 items-center mb-4"
          onPress={() => router.push("/auth/emailSent")}
        >
          <Text className="text-white font-medium text-lg text-lg font-clashBold text-xl">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
