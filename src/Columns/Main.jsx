import React from "react";
import { View, Text, Link } from "@react-pdf/renderer";
import { Header, CandidateName, Designation } from "./Components/Header";
import { Contacts, Contact } from "./Components/Contacts";
import { Section } from "./Components/Section";
import {
  Experience,
  Role,
  Company,
  BulletItem,
  Achievement,
} from "./Components/Experience";
import { Education, Certification, Institution } from "./Components/Education";
import data from "../data";

const Main = () => {
  return (
    <>
      <View
        style={{
          width: "60%",
          height: "100%",
          padding: "30px 10px 30px 30px",
        }}
      >
        <Header>
          <CandidateName value={data.personal.name} />
          <Designation value={data.personal.designation} />
        </Header>

        <Contacts>
          {data.personal.contacts.map((contact, index) => (
            <Contact
              key={index}
              type={contact.type}
              label={contact.label}
              urlPrefix={contact.urlPrefix}
            />
          ))}
        </Contacts>

        <Section header="Summary" style={{ marginTop: "28px" }}>
          <Text style={{ paddingTop: "2px", lineHeight: "12px" }}>
            {data.summary}
          </Text>
        </Section>

        <Section header="Professional Experience" style={{ marginTop: "12px" }}>
          {data.experience.map((exp, index) => (
            <Experience key={index}>
              <Role
                role={exp.role}
                type={exp.type}
                from={exp.from}
                till={exp.till}
              />
              <Company name={exp.company} location={exp.location} />
              <Achievement>
                {exp.achievements.map((achievement, i) => (
                  <BulletItem key={i}>{achievement}</BulletItem>
                ))}
              </Achievement>
            </Experience>
          ))}
        </Section>

        <Section header="Education" style={{ marginTop: "6px" }}>
          {data.education.map((edu, index) => (
            <Education key={index}>
              <Certification
                name={edu.certification}
                from={edu.from}
                till={edu.till}
              />
              <Institution name={edu.institution} location={edu.location} />
            </Education>
          ))}
        </Section>
      </View>
    </>
  );
};

export default Main;
