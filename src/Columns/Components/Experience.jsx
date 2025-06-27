import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { style } from "../../Styles";

const styles = StyleSheet.create({
  experience: {
    marginTop: "4px",
    marginBottom: "4px",
  },
  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "2px",
  },
  roleTitle: {
    fontSize: style.bodyFontSize,
    fontWeight: "600",
  },
  datePeriod: {
    fontSize: style.bodyFontSizeSm,
  },
  companyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "4px",
  },
  companyName: {
    fontSize: style.bodyFontSize,
    color: style.colors.secondary,
    paddingTop: "2px",
  },
  companyLocation: {
    fontSize: style.bodyFontSizeSm,
    paddingTop: "2px",
  },
  achievementContainer: {
    marginTop: "4px",
  },
  bulletContainer: {
    flexDirection: "row",
  },
  bullet: {
    width: "10px",
    fontSize: style.bodyFontSize,
  },
  bulletText: {
    flex: 1,
    lineHeight: "12px",
    fontSize: style.bodyFontSizeSm,
  },
});

// Experience container
export const Experience = ({ children }) => (
  <View style={styles.experience}>{children}</View>
);

// Role component with date period
export const Role = ({ role, type, from, till }) => (
  <View style={styles.roleContainer}>
    <View style={[{ flexDirection: "row" }]}>
      <Text style={styles.roleTitle}>{role}</Text>
      {type && <Text style={{ marginLeft: "2px" }}>{` | ${type}`}</Text>}
    </View>
    <Text style={styles.datePeriod}>
      {from} - {till}
    </Text>
  </View>
);

// Company component with location
export const Company = ({ name, location }) => (
  <View style={styles.companyContainer}>
    <Text style={styles.companyName}>{name}</Text>
    <Text style={styles.companyLocation}>{location}</Text>
  </View>
);

// Container for achievements/bullet points
export const Achievement = ({ children }) => (
  <View style={styles.achievementContainer}>{children}</View>
);

// Individual bullet point item
export const BulletItem = ({ children }) => (
  <View style={styles.bulletContainer}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.bulletText}>{children}</Text>
  </View>
);
