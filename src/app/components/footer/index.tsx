/* eslint-disable jsx-a11y/anchor-is-valid */
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  // min-height: 24em;
  background-color: #1d2124;
  ${tw`
        flex
        flex-col
        min-w-full
        pt-4
        md:pt-12
        items-center
        justify-center
    `}
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        max-w-screen-2xl
        h-full
        w-full
    `}
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        mr-2
        md:mr-12
        pl-10
        pr-10
        md:pl-3
        md:pr-3
    `}
`;

const BottomContainer = styled.div`
    ${tw`
        flex
        w-full
        max-w-screen-2xl
        justify-center
        md:justify-start
        mt-7
        md:mt-1
    `}
`

const CopyrightText = styled.span`
    font-size: 12px;
    ${tw`
        text-gray-200
    `}
`

const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-sm
        leading-5
        mt-2
    `}
`;

const SectionContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        md:w-auto
        mr-2
        md:mr-16
        pl-10
        pr-10
        md:pl-3
        md:pr-3
        mt-6
        md:mt-0
    `}
`;

const LinksContainer = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col
    `}
`;

const ListItem = styled.li`
  ${tw`
        mb-3
    `}
  & > a {
    ${tw`
            text-xs
            text-white
            transition-all
            hover:text-gray-300
        `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
        text-xl
        font-bold
        text-white
        mb-3
    `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-green-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `}
`

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Yourcar is a Car renting and selling company used located in many
            countries accross the world which has high quality cars and top
            rated service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksContainer>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksContainer>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksContainer>
        </SectionContainer>
        <SectionContainer>
            <HeaderTitle>Call Now</HeaderTitle>
            <HorizontalContainer>
                <RedIcon>
                    <FontAwesomeIcon icon={faPhoneAlt}/>
                </RedIcon>
                <SmallText>+91 555-234-7485</SmallText>
            </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
            <HeaderTitle>E-Mail</HeaderTitle>
            <HorizontalContainer>
                <RedIcon>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </RedIcon>
                <SmallText>info@yourcar.com</SmallText>
            </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
          <CopyrightText>Copyright &copy; {new Date().getFullYear()} by Aikaso. All rights reserved.</CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
