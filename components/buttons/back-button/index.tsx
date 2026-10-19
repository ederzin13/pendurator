import { colors } from "@/constants/Colors";
import { spacing } from "@/constants/Spacing";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function BackButton() {
  const handleBack = () => {
    router.back();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleBack}>
      <FontAwesome5 name="arrow-circle-left" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accentColors.main,
    height: 40,
    width: 40,
    borderRadius: spacing.radius,
    alignItems: "center",
    justifyContent: "center",
  },
});
