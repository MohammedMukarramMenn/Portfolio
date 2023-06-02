import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { Skills } from "./Skills";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      As a developer, I possess extensive experience <b>working with a diverse
      range of technologies</b>. Throughout my journey, I have successfully
      <b> developed and maintained multiple projects </b>utilizing these technologies.
      However, my thirst for knowledge remains insatiable, as I am constantly
      driven to expand my skill set and embrace new learning opportunities.
    </SectionText>
    <List>
      {Skills.map((Skill) => (
        <ListItem key={Skill.slug}>
          <picture>
            <Skill.Component size="3rem" style={{ fill: 'black' }} />
          </picture>
          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>
            <ListParagraph>
              <Skill.Description />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider divider />
  </Section>
);

export default Technologies;
