import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Target() {
  return (
    <View>
      <Text>Target</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
