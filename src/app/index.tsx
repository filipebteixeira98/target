import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";

const summary = {
  total: "$ 2,600.00",
  input: { label: "Incoming", value: "$4.000,00" },
  output: { label: "Outcome", value: "-$1.400,00" },
};

const targets = [
  {
    name: "Target 1",
    percentage: "50%",
    current: "$1,300.00",
    target: "$2,600.00",
  },
];

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
      <Target data={targets[0]} />
    </View>
  );
}
