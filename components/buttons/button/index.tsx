import { sen } from "@/assets/fonts/custom-font";
import { spacing } from "@/constants/Spacing";
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
        <Text style={styles.text}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    padding: spacing.innerPadding,
    backgroundColor: "#ff7575",
    borderRadius: 5,
  },

  text: {
    color: "#fff",
    fontFamily: sen.regular,
  },

  disabled: {
    opacity: 0.6,
  },
});
