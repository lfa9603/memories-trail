import { View, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  onPress: () => void;
  type: "add" | "sparkle";
};

export default function CircleButton({ onPress, type = "add" }: Props) {
  return (
    <View
      style={type === "add" ? styles.CircleButton : styles.SparkleCircleButton}
    >
      <Pressable style={styles.circleButton} onPress={onPress}>
        <Ionicons
          name={type === "add" ? "add" : "sparkles"}
          size={38}
          color="#25292e"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  CircleButton: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
    padding: 3,
  },
  SparkleCircleButton: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#76FF03",
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
