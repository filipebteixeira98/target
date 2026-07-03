import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="New transaction"
        subtitle="With every amount you save, you get closer to your goal. Make an effort to save and avoid making withdrawals."
      />
      <View style={{ marginTop: 32, gap: 24 }}>
        <CurrencyInput label="Value ($)" value={0} />
        <Input
          label="Reason (optional)"
          placeholder="E.g., Investing in a 110% CDB at XPTO Bank"
        />
        <Button title="Save" />
      </View>
    </View>
  );
}
