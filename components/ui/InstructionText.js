import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontFamily: "open-sans",
    fontSize: 24,
  },
})

export default InstructionText
