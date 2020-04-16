import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import FlipMove from 'react-flip-move';
import Block from './utils/Block';
// import PageTitle from './utils/PageTitle';
// import Seperator from './utils/Seperator';
import { down } from 'styled-breakpoints';
import { Icon } from '@iconify/react';
import Star from '@iconify/icons-fa/star';
import SearchPlus from '@iconify/icons-fa/search-plus';
import Link from '@iconify/icons-fa/link';
import { Element } from 'react-scroll';
import { useStaticQuery, graphql } from 'gatsby';
import Lightbox from './Lightbox';
import theme, { themeProvider } from './theme';
import PropTypes from 'prop-types';
import BackgroundImg from 'gatsby-background-image';
import { Row, Col } from 'reactstrap';

function Gallery({ tab, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filteredData = data.filter(item => {
    if (tab === 'All') return true;
    if (tab === item.technology) return true;
    return false;
  });

  const images = filteredData.map(item => item.image.childImageSharp.fluid.src);

  function clickHandler(index) {
    setPhotoIndex(index);
    setIsOpen(true);
  }

  return (
    <Cards>
      <GlobalStyle />
      <Lightbox
        images={images}
        isOpen={isOpen}
        setPhotoIndex={setPhotoIndex}
        photoIndex={photoIndex}
        setIsOpen={setIsOpen}
      />
      <FlipMove className="box">
        {filteredData.map(
          (
            { key = '', image = {}, title = '', description = '', url = '' },
            i
          ) => (
            <Card key={key} fluid={image.childImageSharp.fluid} critical={true}>
              <Overlay>
                <h1>{title}</h1>
                <p>{description}</p>
                <br />
                <div>
                  <div className="icon" onClick={() => clickHandler(i)}>
                    <Icon icon={SearchPlus} />
                  </div>
                  <div className="icon">
                    <a href={url} target="__blank">
                      <Icon icon={Link} />
                    </a>
                  </div>
                </div>
              </Overlay>
            </Card>
          )
        )}
      </FlipMove>
    </Cards>
  );
}

function Portfolio({ image, pageTitle, description, projects }) {
  const [tab, setTab] = useState('All');

  const tabs = [
    ...new Set(projects.map(({ technology = '' }) => technology.toLowerCase())),
  ];

  const filteredData = projects.map(({ technology = '', ...item }, i) => ({
    ...item,
    key: i,
    technology: technology.toLowerCase(),
  }));

  return (
    <Element name="portfolio">
      {/* <Block url={image} overlay={{ color: 'black', opacity: 0, tabs }}> */}
      <Container>
        <Row>
          <Col className="mr-auto ml-auto text-center mb-5" lg="8">
            <h2
              className="title"
              style={{
                fontSize: '1.4em',
                fontStyle: 'bold',
                fontWeight: 900,
              }}
            >
              Some of Our Awesome Projects
            </h2>
            <h4
              className="description"
              style={{ fontSize: '15px', fontWeight: '40' }}
            >
              Projects we are currently managing
            </h4>
          </Col>
        </Row>
        {/* </Container> */}
        <Tabs>
          <Tab
            onClick={() => setTab('All')}
            className={tab === 'All' ? 'active' : ''}
          >
            All
          </Tab>
          {tabs.map(item => (
            <Tab
              onClick={() => setTab(item)}
              className={tab === item ? 'active' : ''}
            >
              {item}
            </Tab>
          ))}
        </Tabs>

        <br />
        <br />
        <Gallery tab={tab} data={filteredData} />
      </Container>
      {/* </Block> */}
    </Element>
  );
}

Portfolio.propTypes = {
  pageTitle: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  projects: PropTypes.arrayOf({
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    url: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    technology: PropTypes.string,
  }),
};

Portfolio.defaultProps = {
  pageTitle: 'my portfolio',
  image: '/img/background3',
  description:
    'description - to update description and title visit Index page layout collection',
  projects: [],
};

const query = graphql`
  query myPortfolio {
    markdownRemark(frontmatter: { templateKey: { eq: "portfolio" } }) {
      frontmatter {
        projects {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          description
          url
          technology
        }
      }
    }
  }
`;

export default function() {
  const data = useStaticQuery(query);
  const {
    markdownRemark: {
      frontmatter: { projects },
    },
  } = data;

  return (
    <ThemeProvider theme={theme}>
      <Portfolio projects={projects} />;
    </ThemeProvider>
  );
}

export const PortfolioTemplate = themeProvider(Portfolio);

// styles
const GlobalStyle = createGlobalStyle`
    .ReactModalPortal{

        [type="button"]{
            box-shadow: none;
        }
        .ReactModal__Overlay{
            z-index: 10000 !important;
        }
    }
`;
const Project = styled.div``;

const Container = styled.div`
  position: relative;
  z-index: 10;
  color: white;
  padding: 0px 20px;
`;

const Description = styled.div`
  text-align: center;
  margin-top: 20px;
  line-height: 1.8em;
  font-size: 15px;
  color: ${({ theme: { colors } }) => colors && colors.white};
`;

const Tabs = styled.div`
  text-align: center;
`;

const Tab = styled.button`
  background: none;
  color: white;
  padding: 8px 12px 8px 12px;
  font-size: 13px;
  line-height: 1.8;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  margin: 2px;
  outline: none;
  box-shadow: none;
  border: 1px solid white;
  &.active {
    border: 1px solid ${({ theme: { colors } }) => colors.green};
    background: #04b962;
  }
  transition: all 0.3s;
`;

const Overlay = styled.div`
  color: white;
  opacity: 0;
  /* transform: translateY(100px); */
  background: rgba(0, 0, 0, 0.8);

  transition: all 0.3s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;

  h1 {
    padding: 0px;
    margin: 0;
    font-size: 1.4em;
    margin-bottom: 15px;
    font-weight: bold;
    line-height: 1.8em;
    letter-spacing: 1px;

    transform: translateY(30px);
    transition: all 0.3s;
  }
  p {
    margin: 0px;
    font-size: 1em;
    line-height: 1.8em;
    margin-bottom: 5px;
    transform: translateY(50px);
    transition: all 0.4s;
  }
  .icon {
    padding: 2px 16px;
    display: inline-block;
    transform: translateY(50px);
    transition: all 0.4s;
    background: #04b962;
    color: #fff;
    height: 50px;
    line-height: 50px;
    width: 50px;
    font-size: 18px;
    border-radius: 100px;
    margin-right: 15px;
    &:hover {
      cursor: pointer;
    }
  }
  a {
    border: none;
    color: inherit;
  }
`;
const Card = styled(BackgroundImg)`
  height: 300px;
  min-width: 300px;
  width: 30%;
  display: inline-block;
  margin: 10px;
  position: relative;
  background-position: center;
  background-size: cover;
  ${down('md')} {
    width: 45%;
  }
  ${down('sm')} {
    width: 100%;
    margin: 10px 0px;
  }

  &:hover {
    ${Overlay} {
      opacity: 1;
      h1 {
        transform: translateY(0px);
      }
      p {
        transform: translateY(0px);
      }
      .icon {
        transform: translateY(0px);
      }
    }
  }
`;

const Cards = styled.div`
  .box {
    display: flex;
    flex-wrap: wrap;
    max-width: 1250px;
    margin: 0 auto;
    padding: 0;
    border: none;

    ${down('sm')} {
      flex-direction: column;
    }
  }
  button {
    box-shadow: none !important;
  }
`;
