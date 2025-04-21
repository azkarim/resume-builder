import {
  Page,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  Font,
} from "@react-pdf/renderer";

import "./App.css";

import Main from "./Columns/Main";
import Highlight from "./Columns/Highlight";
import { style } from "./Styles";

const Resume = () => (
  <Document orientation="portrait">
    <Page size="A4" style={styles.page}>
      <Main />
      <Highlight />
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
    fontSize: style.bodyFontSize,
    color: style.bodyFontColor,
    fontFamily: "Helvetica",
  },
});

function App() {
  return (
    <>
      <PDFDownloadLink
        document={<Resume />}
        fileName="resume.pdf"
        style={{
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          borderRadius: "4px",
          textDecoration: "none",
          display: "inline-block",
          cursor: "pointer",
        }}
      >
        {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
      </PDFDownloadLink>
      <PDFViewer
        style={{
          width: "80vw",
          height: "80vh",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Resume />
      </PDFViewer>
    </>
  );
}

export default App;
