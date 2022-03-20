import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { FcApproval, FcBarChart, FcSupport} from "react-icons/fc";
import { BiCheckCircle , BiWrench} from "react-icons/bi";
import { RiScales3Line } from "react-icons/ri"

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
      <BiCheckCircle size="3rem"/>
      <br />
      <ListContainer>
        <ListTitle>
          Strong Languages
        </ListTitle>
        <ListParagraph>
          Python
        </ListParagraph>
        <ListParagraph>
          Java
        </ListParagraph>
        <ListParagraph>
          C
        </ListParagraph>
        <ListParagraph>
          JavaScript
        </ListParagraph>
        <ListParagraph>
          OCaml
        </ListParagraph>
      </ListContainer>
    </ListItem>


    <ListItem>
        <RiScales3Line size="3rem"/>
        <br />
        <ListContainer>
          <ListTitle>
          Familiar Languages
          </ListTitle>
          <ListParagraph>
          Rust
        </ListParagraph>
          <ListParagraph>
            Ruby
          </ListParagraph>
          <ListParagraph>
            HTML
          </ListParagraph>
          <ListParagraph>
            CSS
          </ListParagraph>
          <ListParagraph>
            LaTeX    
          </ListParagraph>
      
          <ListParagraph>
            x86 Assembly
          </ListParagraph>
          <ListParagraph>
            Lua
          </ListParagraph>
          <ListParagraph>
            Solidity
          </ListParagraph>
          
        </ListContainer>
      </ListItem>

      <ListItem>
        <BiWrench size="3rem"/>
        <br />
        <ListContainer>
          <ListTitle>
          Tools
          </ListTitle>
          <ListParagraph>
            Git  
          </ListParagraph>
          <ListParagraph>
            Tableu
          </ListParagraph>
          <ListParagraph>
            Jupyter Notebooks
          </ListParagraph>
          <ListParagraph>
            UNIX Environment
          </ListParagraph>
          <ListParagraph>
            MALTAB
          </ListParagraph>
          

        </ListContainer>
      </ListItem>
      
    </List>
    <br/>
    <br/>
    <br/>
    
    <figure><embed src="https://wakatime.com/share/@51b336fc-62d0-4256-8451-147afc95d9e8/16361d00-97fb-48ea-9d8d-4c3d51217afc.svg"></embed></figure>
  </Section>
);

export default Technologies;
