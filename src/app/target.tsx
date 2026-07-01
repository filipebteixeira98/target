import { router } from "expo-router";
import { Button, View } from "react-native";

import { PageHeader } from "@/components/PageHeader";

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Button title="Go Back" onPress={() => router.back()} />
      <PageHeader
        title="Target"
        subtitle="Save to reach your financial goal."
      />
    </View>
  );
}
