// import { sen } from "@/assets/fonts/custom-font";
// import AddClient from "@/components/buttons/add-client";
// import BackButton from "@/components/buttons/back-button";
// import ClientCard from "@/components/client-card";
// import Scrollable from "@/components/screen-wrappers/scrollable";
// import { colors } from "@/constants/Colors";
// import { spacing } from "@/constants/Spacing";
// import { typo } from "@/constants/Typography";
// import { clientesMock } from "@/mocks/clients";
// import { Stack } from "expo-router";
// import { FlatList, StyleSheet, Text, View } from "react-native";

// export default function ClientScreen() {
//   return (
//     <Scrollable center gap={spacing.margin}>
//       <View style={styles.header}>
//         <Stack.Screen options={{ headerShown: false }} />
//         <View style={styles.options}>
//           <BackButton />
//           <Text style={styles.title}>Clientes</Text>
//         </View>

//         <View style={styles.options}>
//           <AddClient />
//         </View>
//       </View>
//       {/* <Text style={styles.textBody}>Não tem nenhum cliente :(</Text> */}
//       <FlatList
//         data={clientesMock}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <ClientCard
//             name={item.name}
//             phoneNumber={item.phoneNumber}
//             value={item.value}
//           />
//         )}
//         contentContainerStyle={{ gap: spacing.margin }}
//       />
//     </Scrollable>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     width: "100%",
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderBottomColor: colors.light.border,
//     marginBottom: spacing.margin,
//     padding: spacing.innerPadding,
//   },

//   options: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: spacing.innerPadding,
//   },

//   textBody: {
//     fontFamily: sen.regular,
//     fontSize: typo.h3,
//   },

//   title: {
//     fontFamily: sen.bold,
//     fontSize: typo.h2,
//   },

//   scrollView: {
//     flex: 1,
//     gap: spacing.margin,
//   },
// });

import { sen } from "@/assets/fonts/custom-font";
import AddClient from "@/components/buttons/add-client";
import BackButton from "@/components/buttons/back-button";
import ClientCard from "@/components/client-card";
import { colors } from "@/constants/Colors";
import { spacing } from "@/constants/Spacing";
import { typo } from "@/constants/Typography";
import { clientesMock } from "@/mocks/clients";
import { Stack } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ClientScreenFlatList() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{ headerShown: false, title: "Clientes (FlatList)" }}
      />
      <View style={styles.header}>
        <View style={styles.options}>
          <BackButton />
          <Text style={styles.title}>Clientes</Text>
        </View>

        <View style={styles.options}>
          <AddClient />
        </View>
      </View>

      <FlatList
        data={clientesMock}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ClientCard
            name={item.name}
            phoneNumber={item.phoneNumber}
            value={item.value}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.textBody}>Não tem nenhum cliente :(</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
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
