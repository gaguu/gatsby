import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
//importar los scss del template aquí
import "../assets/css/nucleo-icons.css";
import "../assets/scss/blk-design-system-pro-react.scss?v1.0.0";
import "../assets/demo/demo.css";
import "../assets/demo/react-demo.css";


import Footer from './Footer';
import SideBar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'StrokeSoft' },
                { name: 'keywords', content: 'site, web' },
              ]}
            >
              <html lang="en" />
              {/* Global site tag (gtag.js) - Google Analytics */}
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129055289-1"></script>
              <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-129055289-1');
              `}
              </script>
              <script>
              {`
                !(function(p,r,i,v,a,c,y){p['MetomicObject']=a;p[a]=p[a]||function(){
                (p[a].q=p[a].q||[]).push(arguments)},p[a].l=1*new Date();c=r.createElement(i),
                y=r.getElementsByTagName(i)[0];c.async=1;c.src=v+'?d='+r.location.host;y.parentNode.insertBefore(c,y)
                })(window, document, 'script', 'https://consent-manager.metomic.io/embed.js', 'Metomic');
                Metomic('load', { projectId: 'prj:6032bd82-24ad-456b-a7b2-b5af275e0775' });
              `}
              </script>
            </Helmet>
            <div
              className={
                isPreloaded
                  ? 'landing main-body is-preload'
                  : 'landing main-body'
              }
            >
              <div id="page-wrapper">
                <SideBar fullMenu={fullMenu} />
                {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
