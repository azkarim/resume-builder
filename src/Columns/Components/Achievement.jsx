import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { style } from "../../Styles";

const styles = StyleSheet.create({
  achievementContainer: {
    marginBottom: "8px",
  },
  achievementTitle: {
    fontSize: style.bodyFontSize,
    fontWeight: "600",
    marginBottom: "2px",
  },
  achievementDesc: {
    fontSize: style.bodyFontSize,
    lineHeight: "12px",
    color: "#f5f5f5",
  },
});

// Achievement component for the Key Achievements section
export const Achievement = ({ title, desc }) => (
  <View style={styles.achievementContainer}>
    <Text style={styles.achievementTitle}>{title}</Text>
    <Text style={styles.achievementDesc}>{desc}</Text>
  </View>
);
