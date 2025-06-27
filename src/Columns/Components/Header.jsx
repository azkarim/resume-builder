import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { style } from "../../Styles";

const styles = StyleSheet.create({
  header: {
    marginBottom: "2px",
  },
  candidateName: {
    fontSize: style.h1,
    textTransform: "uppercase",
    fontWeight: "semibold",
  },
  designation: {
    fontSize: style.h2,
    color: style.colors.secondary,
    padding: "4px 0 4px 0",
  },
});

export const CandidateName = ({ value }) => (
  <Text style={styles.candidateName}>{value}</Text>
);

export const Designation = ({ value }) => (
  <Text style={styles.designation}>{value}</Text>
);

export const Header = ({ children }) => (
  <View style={styles.header}>{children}</View>
);
