import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import JeepImg from "../../../assets/jeep.png"

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white

    `}
`

const CarContainer = styled.div`
    width: auto;
    height: 28em;
    margin-left: -50px

    img {
        width: auto;
        height: 100%;
    }

    @media (min-width: ${SCREENS.md}) {
        height: 28em;
    }
    @media (min-width: ${SCREENS.lg}) {
        height: 30em;
    }
    @media (min-width: ${SCREENS["2xl"]}) {
        height: 35em;
        margin-left: 0;
    }
`

const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `} 
`

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`

const InfoText = styled.p`
    ${tw`
        text-gray-500
        text-sm
        md:text-base
        md:max-w-2xl
        font-normal
        mt-4
    `}
`

export function AboutUs() {
    return <AboutUsContainer>
        <CarContainer>
            <img src={JeepImg} alt="" />
        </CarContainer>
        <InfoContainer>
            <Title>Fell The Best Experience With Our Rental Deals</Title>
            <InfoText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aliquid voluptatum, quidem assumenda quod cupiditate repellat neque iure id! Delectus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro debitis obcaecati, deleniti animi veritatis voluptatum dicta a ipsum sint eaque quis quam eum hic error cumque incidunt aliquam. Molestias saepe ipsa optio dolore voluptate vero assumenda placeat suscipit minima iure.voluptatum dicta a ipsum sint eaque quis quam eum hic error cumque incidunt aliquam. Molestias saepe ipsa optio dolore voluptate vero assumenda placeat suscipit minima iure.
            </InfoText>
        </InfoContainer>
    </AboutUsContainer>
}