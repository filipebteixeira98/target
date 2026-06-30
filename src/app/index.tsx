import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader
        data={{
          total: "$ 2,600.00",
        }}
      />
    </View>
  );
}
