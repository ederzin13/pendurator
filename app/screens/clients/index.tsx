import { sen } from "@/assets/fonts/custom-font";
import AddClient from "@/components/buttons/add-client";
import BackButton from "@/components/buttons/back-button";
import ClientCard from "@/components/client-card";
import Scrollable from "@/components/screen-wrappers/scrollable";
import { colors } from "@/constants/Colors";
import { spacing } from "@/constants/Spacing";
import { typo } from "@/constants/Typography";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ClientScreen() {
  return (
    <Scrollable center gap={spacing.margin}>
      <View style={styles.header}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.options}>
          <BackButton />
          <Text style={styles.title}>Clientes</Text>
        </View>

        <View style={styles.options}>
          <AddClient />
        </View>
      </View>

      {/* <Text style={styles.textBody}>Não tem nenhum cliente :(</Text> */}
      <ClientCard />
      <ClientCard />
      <ClientCard />
      <ClientCard />
      <ClientCard />
      <ClientCard />
    </Scrollable>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.light.border,
    marginBottom: spacing.margin,
    padding: spacing.innerPadding,
  },

  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.innerPadding,
  },

  textBody: {
    fontFamily: sen.regular,
    fontSize: typo.h3,
  },

  title: {
    fontFamily: sen.bold,
    fontSize: typo.h2,
  },

  scrollView: {
    flex: 1,
    gap: spacing.margin,
  },
});
