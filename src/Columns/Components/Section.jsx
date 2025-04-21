import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { style } from "../../Styles";

const styles = StyleSheet.create({
  section: {
    marginBottom: "10px",
  },
  sectionHeader: {
    borderBottom: "1px",
    borderColor: "#ccc",
    paddingBottom: "6px",
    marginBottom: "6px",
    fontSize: style.h2,
    textTransform: "uppercase",
  },
  sectionContent: {
    marginTop: "0px",
  },
});

export const Section = ({
  header,
  children,
  style,
  partOfHighlight = false,
}) => (
  <View style={[styles.section, style]}>
    <Text
      style={[styles.sectionHeader, partOfHighlight && { borderColor: "#fff" }]}
    >
      {header}
    </Text>
    <View style={styles.sectionContent}>{children}</View>
  </View>
);
