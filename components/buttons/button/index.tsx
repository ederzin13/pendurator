import { sen } from "@/assets/fonts/custom-font";
import { colors } from "@/constants/Colors";
import { spacing } from "@/constants/Spacing";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ReactNode } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type ButtonProps = {
  label?: ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export default function Button({
  label = "Label",
  onClick,
  loading = false,
  disabled = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, (disabled || loading) && styles.disabled]}
      onPress={onClick}
      activeOpacity={0.7}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="fff" />
      ) : (
        <Text style={styles.text}>
          {label}
          <AntDesign name="arrow-right" size={13} color="white" />
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 250,
    backgroundColor: colors.accentColors.main,
    borderRadius: spacing.radius,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    fontFamily: sen.regular,
  },

  disabled: {
    opacity: 0.6,
  },
});
