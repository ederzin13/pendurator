import { View, ScrollView, RefreshControl } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type ScrollableProps = {
  children: React.ReactNode;
  center: boolean;
  padding?: number;
  gap?: number;
  onRefresh?: () => void;
};

export default function Scrollable({
  children,
  center,
  padding = 20,
  gap,
  onRefresh,
}: ScrollableProps) {
  const [refreshing, setRefreshing] = React.useState(false);

  const handleRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (onRefresh) {
      await onRefresh();
    }
    setRefreshing(false);
  }, [onRefresh]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          <View
            style={{
              alignItems: center ? "center" : "flex-end",
              padding: padding,
              gap: gap,
            }}
          >
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}