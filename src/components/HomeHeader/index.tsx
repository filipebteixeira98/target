import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

import { Separator } from "@/components/Separator";
import { Summary, type SummaryProps } from "@/components/Summary";

import { colors } from "@/theme/colors";

import { styles } from "./styles";

export type HomeHeaderProps = {
  total: string;
  input: SummaryProps;
  output: SummaryProps;
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
          data={data.input}
          icon={{ name: "arrow-upward", color: colors.green[500] }}
        />
        <Summary
          isLeft
          data={data.output}
          icon={{ name: "arrow-downward", color: colors.red[400] }}
        />
      </View>
    </LinearGradient>
  );
}
