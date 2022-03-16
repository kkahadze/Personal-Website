import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { FcApproval, FcBarChart, FcSupport} from "react-icons/fc";

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of languages and technologies.
    </SectionText>
    <List>
      <ListItem>
        <FcApproval size="3rem"/>
        <br />
        <ListContainer>
          <ListTitle>
            Strong Languages
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Rust
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FcBarChart size="3rem"/>
        <br />
        <ListContainer>
          <ListTitle>
          Familiar Languages
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Rust
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FcSupport size="3rem"/>
        <br />
        <ListContainer>
          <ListTitle>
          Tools
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Rust
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
