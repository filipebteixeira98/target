import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

import { List } from "@/components/List";
import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";
import { Transaction, type TransactionProps } from "@/components/Transaction";

import { TransactionTypes } from "@/utils/TransactionTypes";

const details = {
  current: "$ 1,200",
  target: "$ 2,000",
  percentage: 60,
};

const transactions: TransactionProps[] = [
  {
    id: "1",
    value: "$ 1,200",
    date: "2023-06-01",
    description: "Salary",
    type: TransactionTypes.Input,
  },
  {
    id: "2",
    value: "$ 800",
    date: "2023-06-15",
    description: "Groceries",
    type: TransactionTypes.Output,
  },
];

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{
          icon: "edit",
          onPress: () => {},
        }}
      />
      <Progress data={details} />
      <List
        title="Transactions"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
      />
    </View>
  );
}
