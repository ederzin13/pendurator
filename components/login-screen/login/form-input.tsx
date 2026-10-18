import { sen } from "@/assets/fonts/custom-font";
import { colors } from "@/constants/Colors";
import { spacing } from "@/constants/Spacing";
import { typo } from "@/constants/Typography";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, Text, TextInput, View } from "react-native";

type FormInputProps = {
  label: string;
  placeholder?: string;
  error?: boolean;
  value: string;
  keyboardType?: "number-pad" | "email-address" | "default";
  isPassword?: boolean;
  onChangeText?: (text: string) => void;
};

export default function FormInput({
  label,
  placeholder,
  error,
  value,
  keyboardType = "default",
  isPassword,
  onChangeText,
}: FormInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.input}>
        {!isPassword ? (
          <FontAwesome
            name="at"
            size={typo.h3}
            color={colors.light.placeholder}
          />
        ) : (
          <AntDesign
            name="lock"
            size={typo.h3}
            color={colors.light.placeholder}
          />
        )}

        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.light.placeholder}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          secureTextEntry={isPassword}
          autoCapitalize="none"
          autoCorrect={false}
        ></TextInput>

        {error && <Text style={styles.error}>This field is mandatory!</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },

  input: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    width: 250,
    borderWidth: 1,
    borderColor: colors.light.placeholder,
    backgroundColor: colors.light.background,
    borderRadius: 13,
    marginBottom: 10,
    paddingLeft: 10,
    gap: spacing.gap,
  },

  label: {
    fontSize: typo.s,
    fontFamily: sen.regular,
    color: colors.light.text,
  },

  error: {
    fontSize: typo.s,
    fontFamily: sen.regular,
    color: "#530a0a",
  },
});
