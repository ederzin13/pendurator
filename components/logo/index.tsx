import { colors } from "@/constants/Colors";
import { spacing } from "@/constants/Spacing";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, View } from "react-native";

export default function Logo() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="hook"
        size={24}
        color={colors.accentColors.main}
      />
      <MaterialCommunityIcons
        name="cash-100"
        size={24}
        color={colors.accentColors.main}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light.background,
    borderRadius: spacing.radius,
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: colors.accentColors.main,
  },
});
