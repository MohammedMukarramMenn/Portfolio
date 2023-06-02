import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  overflow: hidden;

`;

export const ImgLink = styled.a`
  width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  overflow: hidden;
  &:hover {
    filter: blur(0.25rem);
    transform: scale(1.01);
  }
`;

export const GridContainer = styled.section`
  display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding-top: 3rem;
  padding-bottom: 3rem;
  place-items: center;
  column-gap: 1rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 0rem;
    padding-bottom: 1.5rem;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 0.7em;
  color: #0023ff;
  font-size: 1.8rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: black;
  padding: 0 50px;
  margin-top: 1rem;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
  
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 8px auto;
  border: 0;
  background: #6e07f3;;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: black;
  font-style: 2rem;
  line-height: 30px;
  text-align: left;
  margin-top: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
    text-align: ;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #6e07f3;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: transparent;
  border: 2px solid #6e07f3;
  border-radius: 15px;
  &:hover {
    background: #6e07f3;
    color: white;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: black;
  font-size: 1.5rem;
`;