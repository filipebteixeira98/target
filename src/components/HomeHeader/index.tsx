import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

import { Separator } from "@/components/Separator";
import { Summary } from "@/components/Summary";

import { colors } from "@/theme/colors";

import { styles } from "./styles";

export type HomeHeaderProps = {
  total: string;
};

type Props = {
  data: HomeHeaderProps;
};

export function HomeHeader({ data }: Props) {
  return (
    <LinearGradient
      colors={[colors.blue[500], colors.blue[800]]}
      style={styles.container}
    >
      <View style={styles.summary}>
        <Text style={styles.label}>Total you own</Text>
        <Text style={styles.total}>{data.total}</Text>
      </View>
      <Separator color={colors.blue[400]} />
      <View>
        <Summary
          data={{ label: "Incoming", value: "$4.000,00" }}
          icon={{ name: "arrow-upward", color: colors.green[500] }}
        />
        <Summary
          isLeft
          data={{ label: "Outcome", value: "-$1.400,00" }}
          icon={{ name: "arrow-downward", color: colors.red[400] }}
        />
      </View>
    </LinearGradient>
  );
}
