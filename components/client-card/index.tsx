import { sen } from "@/assets/fonts/custom-font";
import { colors } from "@/constants/Colors";
import { spacing } from "@/constants/Spacing";
import { typo } from "@/constants/Typography";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ClientCard() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.upperDiv}>
        <View style={styles.client}>
          <View style={styles.placeholder}></View>

          <View>
            <Text style={styles.clientName}>Eduardo Silva</Text>
            <Text style={styles.phoneNumber}>(12)98765-4321</Text>
          </View>
        </View>
        <View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={typo.h2}
            color={colors.light.innerText}
          />
        </View>
      </View>

      <View style={styles.lowerDiv}>
        <Text style={styles.debtLabel}>Valor total devido:</Text>
        <Text style={styles.debt}>R$15.000,00</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.background,
    padding: spacing.innerPadding,
    borderRadius: spacing.radius,
  },

  upperDiv: {
    flexDirection: "row",
    gap: 90,
    borderBottomWidth: 1,
    borderBottomColor: colors.light.border,
  },

  lowerDiv: {
    marginTop: spacing.margin,
  },

  client: {
    flexDirection: "row",
    marginBottom: spacing.margin,
    gap: spacing.gap,
  },

  clientName: {
    fontSize: typo.h2,
    fontFamily: sen.bold,
  },

  phoneNumber: {
    fontFamily: sen.regular,
    color: colors.light.innerText,
  },

  placeholder: {
    backgroundColor: colors.accentColors.main,
    height: 50,
    width: 50,
    borderRadius: 100,
  },

  debtLabel: {
    fontFamily: sen.regular,
    fontSize: typo.h3,
    color: colors.light.innerText,
  },

  debt: {
    fontFamily: sen.bold,
    fontSize: typo.h2,
    color: colors.accentColors.main,
  },
});
