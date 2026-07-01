import { View } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Target"
        subtitle="Save to reach your financial goal."
      />
      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Target Name"
          placeholder="Ex: Apple Watch, Trip to the beach"
        />
        <Button title="Save" />
      </View>
    </View>
  );
}
