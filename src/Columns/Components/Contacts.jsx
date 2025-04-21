import React from "react";
import { View, Text, Link, StyleSheet } from "@react-pdf/renderer";
import PhoneIcon from "../../Icons/PhoneIcon";
import AtIcon from "../../Icons/AtIcon";
import LinkIcon from "../../Icons/LinkIcon";
import LocationIcon from "../../Icons/LocationIcon";
import { style } from "../../Styles";

const styles = StyleSheet.create({
  contactsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: "4px",
    rowGap: "5px",
  },
  contactItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contactText: {
    fontSize: style.bodyFontSize,
    paddingLeft: "1px",
  },
  linkText: {
    fontSize: style.bodyFontSize,
    paddingLeft: "1px",
    color: "#1565C0",
  },
  link: {
    textDecoration: "none",
  },
});

const getIconByType = (type) => {
  switch (type) {
    case "email":
      return <AtIcon />;
    case "website":
      return <LinkIcon />;
    case "tel":
      return <PhoneIcon />;
    case "location":
      return <LocationIcon />;
    default:
      return null;
  }
};

const getLinkPrefixByType = (type) => {
  switch (type) {
    case "website":
      return "https://";
    case "tel":
      return "tel:";
    default:
      return "";
  }
};

export const Contact = ({ type, label }) => {
  const icon = getIconByType(type);
  const isLink = ["website", "tel"].includes(type);
  const linkPrefix = getLinkPrefixByType(type);

  return (
    <View style={styles.contactItem}>
      {icon}
      {isLink ? (
        <Link src={`${linkPrefix}${label}`} style={styles.link}>
          <Text style={styles.linkText}>{label}</Text>
        </Link>
      ) : (
        <Text style={styles.contactText}>{label}</Text>
      )}
    </View>
  );
};

export const Contacts = ({ children }) => (
  <View style={styles.contactsContainer}>{children}</View>
);
