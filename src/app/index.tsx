import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello, React Native!</Text>
      <Button
        title="Target"
        onPress={() =>
          router.push("./transaction/89670f5e718873499f57d622f6797b5d")
        }
      />
    </View>
  );
}
