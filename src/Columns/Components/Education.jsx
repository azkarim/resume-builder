import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { style } from "../../Styles";

const styles = StyleSheet.create({
  education: {
    marginTop: "4px",
    marginBottom: "4px",
  },
  certificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "4px",
  },
  certificationName: {
    fontSize: style.bodyFontSize,
    fontWeight: "600",
  },
  datePeriod: {
    fontSize: style.bodyFontSizeSm,
  },
  institutionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "4px",
  },
  institutionName: {
    fontSize: style.bodyFontSize,
    color: style.colors.secondary,
  },
  institutionLocation: {
    fontSize: style.bodyFontSizeSm,
  },
});

// Education container
export const Education = ({ children }) => (
  <View style={styles.education}>{children}</View>
);

// Certification component with date period
export const Certification = ({ name, from, till }) => (
  <View style={styles.certificationContainer}>
    <Text style={styles.certificationName}>{name}</Text>
    <Text style={styles.datePeriod}>
      {from} - {till}
    </Text>
  </View>
);

// Institution component with location
export const Institution = ({ name, location }) => (
  <View style={styles.institutionContainer}>
    <Text style={styles.institutionName}>{name}</Text>
    <Text style={styles.institutionLocation}>{location}</Text>
  </View>
);
