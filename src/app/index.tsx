import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { List } from "@/components/List";
import { Target } from "@/components/Target";

const summary = {
  total: "$ 2,600.00",
  input: { label: "Incoming", value: "$4.000,00" },
  output: { label: "Outcome", value: "-$1.400,00" },
};

const targets = [
  {
    id: "1",
    name: "Target 1",
    percentage: "50%",
    current: "$1,300.00",
    target: "$2,600.00",
  },
  {
    id: "2",
    name: "Target 2",
    percentage: "25%",
    current: "$650.00",
    target: "$2,600.00",
  },
];

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
      <List
        title="Goals"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Target data={item} />}
        emptyMessage="No goals found."
        containerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  );
}
