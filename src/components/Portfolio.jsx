import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Row, Col, Container } from 'reactstrap';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from '@iconify/react';
import FlipMove from 'react-flip-move';
import SearchPlus from '@iconify/icons-fa/search-plus';
import Link from '@iconify/icons-fa/link';
import PropTypes from 'prop-types';
import ReactImageLightbox from 'react-image-lightbox';
import Img from 'gatsby-image';
import 'react-image-lightbox/style.css';

const theme = {
  background: 'none',
  colors: {
    primary: '#38AEEE',
  },
};

// This is the component responsibe for rendering all the projects
// including the heading and subheading in teh section
function Portfolio({ projects }) {
  // sets state for the tab
  // The default Tab will be set to all
  const [tab, setTab] = useState('All');

  // this code categorizes different technologies present in the data
  // into an array, something like ['reactjs', 'react native' ...]
  const tabs = [
    ...new Set(projects.map(({ technology = '' }) => technology.toLowerCase())),
  ];
  // Filters the data such that it has a key
  // key is required by the react-flip-move component in order to work properly
  // and making the technology field lowercase so it matches the format in which
  // tabs array fields are
  const filteredData = projects.map(({ technology = '', ...item }, i) => ({
    ...item,
    key: i,
    technology: technology.toLowerCase(),
  }));

  return (
    <Block className="py-5">
      <StyledContainer>
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
      </StyledContainer>
    </Block>
  );
}

Portfolio.propTypes = {
  projects: PropTypes.arrayOf({
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    url: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    technology: PropTypes.string,
  }),
};

Portfolio.defaultProps = {
  projects: [],
};

// Component responsible for handling all the transitions and rendering of cards
// This component relies on react-flip-move package to make all this
// animations possible
function Gallery({ tab, data }) {
  // State for the lightbox
  const [isOpen, setIsOpen] = useState(false);
  // State to track the photo to be shown in the lightbox
  const [photoIndex, setPhotoIndex] = useState(0);

  // Filters the passed in data arrray
  // It remove the entries where the technolog doesn't match the tab value
  const filteredData = data.filter(item => {
    if (tab === 'All') return true;
    if (tab === item.technology) return true;
    return false;
  });

  // gets the url from the image object passed
  // when querying an image from the markdown, it is a file object
  // and passing into the transformer plugins create it as an object
  // so in that case we need to get the src out from the
  // so that we can pass that into our lightbox component
  const images = filteredData.map(item => item.image.childImageSharp.fluid.src);

  // when the expand button is clicked
  // which displays the lightbox
  // this function will be call which will set the photo index
  // and will open the lightbox
  function clickHandler(index) {
    setPhotoIndex(index);
    setIsOpen(true);
  }

  return (
    <div>
      <GlobalStyle />
      <Lightbox
        images={images}
        isOpen={isOpen}
        setPhotoIndex={setPhotoIndex}
        photoIndex={photoIndex}
        setIsOpen={setIsOpen}
      />
      <FlipMove className="row">
        {filteredData.map(
          (
            { key = '', image = {}, title = '', description = '', url = '' },
            i
          ) => (
            <Card key={key} className="col col-sm-12 col-md-6 col-lg-4 my-3">
              <div className="cardContainer">
                <Img
                  fluid={image.childImageSharp.fluid}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                  }}
                />
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
              </div>
            </Card>
          )
        )}
      </FlipMove>
    </div>
  );
}

Gallery.propTypes = {
  tab: PropTypes.string,
  data: PropTypes.arrayOf({
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    url: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    technology: PropTypes.string,
  }),
};

Gallery.defaultProps = {
  tab: 'All',
  data: [],
};

function Lightbox({ images, isOpen, photoIndex, setIsOpen, setPhotoIndex }) {
  return (
    isOpen && (
      <ReactImageLightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + images.length - 1) % images.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % images.length)
        }
      />
    )
  );
}

Portfolio.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  isOpen: PropTypes.bool,
  photoIndex: PropTypes.number,
  setIsOpen: PropTypes.func,
  setPhotoIndex: PropTypes.func,
};

Portfolio.defaultProps = {
  images: [],
  isOpen: false,
  photoIndex: 0,
  setIsOpen: () => {},
  setPhotoIndex: () => {},
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

// the default function export
// gets the data using useStaticQuery and calls the Portfolio component
// passing in the required data
export default function() {
  const data = useStaticQuery(query);
  const {
    markdownRemark: {
      frontmatter: { projects },
    },
  } = data;

  return (
    <ThemeProvider theme={theme}>
      <Portfolio projects={projects} />
    </ThemeProvider>
  );
}

// This export is used for netlify CMS preview
// it sets up the component accordingly such that it
// works well for the CMS preview
export const PortfolioTemplate = props => (
  <ThemeProvider theme={{ ...theme, background: 'rgba(0,0,0,0.6)' }}>
    <Portfolio {...props} />
  </ThemeProvider>
);

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

const Block = styled.div`
  background: ${props => props.theme.background};
`;

const StyledContainer = styled(Container)`
  position: relative;
  z-index: 10;
  color: white;
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
    border: 1px solid ${({ theme: { colors } }) => colors.primary};
    background: ${({ theme: { colors } }) => colors.primary};
  }
  transition: all 0.3s;
`;

const Overlay = styled.div`
  color: white;
  opacity: 0;
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
  padding: 20px 30px;
  text-align: center;

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
    background: ${({ theme: { colors } }) => colors.primary};
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

const Card = styled.div`
  height: 250px;
  box-sizing: border-box;
  .cardContainer {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border-radius: 0.3rem;
    overflow: hidden;
    min-width: 300px;
    display: inline-block;
    display: flex;
    position: relative;
    align-items: center;
    background: ${({ theme: { colors } }) => colors.primary};
    justify-content: center;

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
  }
`;
