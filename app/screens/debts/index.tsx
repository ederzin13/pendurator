import { sen } from "@/assets/fonts/custom-font";
import AddClient from "@/components/buttons/add-client";
import BackButton from "@/components/buttons/back-button";
import DebtCard from "@/components/debt-card";
import { colors } from "@/constants/Colors";
import { spacing } from "@/constants/Spacing";
import { typo } from "@/constants/Typography";
import { debtsMock } from "@/mocks/debts";
import { Stack } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DebtScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false, title: "Dívidas" }} />
      <View style={styles.header}>
        <View style={styles.options}>
          <BackButton />
          <Text style={styles.title}>Dívidas</Text>
        </View>

        <View style={styles.options}>
          <AddClient />
        </View>
      </View>

      <FlatList
        data={debtsMock}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DebtCard
            clientName={item.clientName}
            value={item.value}
            createdAt={item.createdAt}
            notes={item.notes}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.textBody}>Não tem nenhuma dívida :)</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.formBackground,
    padding: 20,
  },

  header: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.light.border,
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
    textAlign: "center",
    marginTop: spacing.margin,
  },

  title: {
    fontFamily: sen.bold,
    fontSize: typo.h2,
  },

  listContent: {
    padding: spacing.margin,
    gap: spacing.margin,
  },
});
