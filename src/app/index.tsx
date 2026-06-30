import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";

const summary = {
  total: "$ 2,600.00",
  input: { label: "Incoming", value: "$4.000,00" },
  output: { label: "Outcome", value: "-$1.400,00" },
};

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
    </View>
  );
}
