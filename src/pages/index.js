import React from 'react';
import Layout from '../components/Layout';
import Who from '../components/Who';
import What from '../components/What';
import Work from '../components/Work';
import Teams from '../components/Teams';
import Projects from '../components/Projects';
import Scroll from '../components/Scroll';
import logo from '../assets/images/logo.png';
import Typical from 'react-typical';
import Formulary from '../components/Formulary'
import Portfolio from '../components/Portfolio'

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img src={logo} alt="" style={{ marginBottom: '7vh' }} />
        </div>
        {/* <p>{config.subHeading}</p> */}
        <div>
          <p style={{ fontSize: '1.1em', fontWeight: 500 }}>
            We specialize in
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                ' mobile development 📱',
                1500,
                ' web development 💻',
                1500,
              ]}
            />
          </p>
        </div>

        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a
                href="/#"
                className="button primary"
                style={{ marginTop: '7vh' }}
              >
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more" style={{ color: '#FFFFFF' }}>
          Learn More
        </a>
      </Scroll>
    </section>
    <section id="one" className="wrapper style1 special">
      <Who />
    </section>

    <section
      id="two"
      className="wrapper alt "
      style={{ backgroundColor: '#38AEEE' }}
    ></section>

    <section className="spotlight " style={{ backgroundColor: '#38AEEE' }}>
      <What />
    </section>

    <section className="spotlight " style={{ backgroundColor: '#38AEEE' }}>
      <Work />
    </section>

    <section>
      <Portfolio />
    </section>

    <section id="two-and-half" className="wrapper style1 special">
      <Teams />
    </section>

    <section id="three" className="wrapper style4 special">
      <div className="inner">
        <header className="major">
          <h2 style={{ fontSize: '1.4em', fontStyle: 'bold', fontWeight: 900 }}>
            OUR SERVICES
          </h2>
          {/* <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p> */}
        </header>

        {/* h3 & p tags' style modified here because icon not showing properly otherwise */}

        <ul className="features">
          <li className="icon fa fa-paper-plane">
            <h3
              style={{
                fontFamily: 'sans-serif',
                fontSize: '1.3em',
                fontWeight: 900,
              }}
            >
              Mobile App development
            </h3>
            <p style={{ fontFamily: 'sans-serif', fontSize: '18px' }}>
              We deliver engaging & user-oriented mobile applications with
              business value. (iOS, Android and React Native)
            </p>
          </li>
          <li className="icon solid fa fa-laptop">
            <h3
              style={{
                fontFamily: 'sans-serif',
                fontSize: '1.3em',
                fontWeight: 900,
              }}
            >
              Web App development
            </h3>
            <p style={{ fontFamily: 'sans-serif', fontSize: '18px' }}>
              We engineer web solutions. Front–end & back–end development. Ruby
              and Rails, ReactJS and Java.
            </p>
          </li>
          <li className="icon solid fa fa-code">
            <h3
              style={{
                fontFamily: 'sans-serif',
                fontSize: '1.3em',
                fontWeight: 900,
              }}
            >
              Wireframing & design
            </h3>
            <p style={{ fontFamily: 'sans-serif', fontSize: '18px' }}>
              Every solution needs a beautiful design! We create intuitive
              interfaces (UI design) and design great user experience on their
              journey (UX design).
            </p>
          </li>
          <li className="icon solid fa fa-headphones-alt">
            <h3
              style={{
                fontFamily: 'sans-serif',
                fontSize: '1.3em',
                fontWeight: 900,
              }}
            >
              IT CONSULTING
            </h3>
            <p style={{ fontFamily: 'sans-serif', fontSize: '18px' }}>
              We help you steer the way to your digital transformation helping
              you choosing the best technology, according to the business
              insights.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="four" className="wrapper style4  special">
      <Formulary />
    </section>
  </Layout>
);

export default IndexPage;
