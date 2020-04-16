import React from 'react'
import PropTypes from 'prop-types'
import { HomeTemplate } from './../../components/Home'
import { AboutTemplate } from './../../components/About'
import { FooterTemplate } from './../../components/Footer'
import { WorkTogetherTemplate } from './../../components/WorkTogether'
import { MyServicesTemplate } from './../../components/Services'
import { PortfolioTemplate } from './../../components/Portfolio'
import { AchievementsTemplate } from './../../components/Achievements'


const AcademicsPreview = ({ entry, widgetsFor, widgetFor, getAsset }) => {


  const homeEntry = entry.getIn(['data', 'sections', 'home']);
  const homeData = homeEntry ? homeEntry.toJS() : {};

  const aboutEntry = entry.getIn(['data', 'sections', 'about']);
  const aboutData = aboutEntry ? aboutEntry.toJS() : {};

  const copyrightData = entry.getIn(['data', 'sections', 'copyright', 'text']);

  const workTogetherEntry = entry.getIn(['data', 'sections', 'workTogether']);
  const workTogetherData = workTogetherEntry ? workTogetherEntry.toJS() : {};

  const myServicesEntry = entry.getIn(['data', 'sections', 'myServices']);
  const myServicesData = myServicesEntry ? myServicesEntry.toJS() : {};

  const portfolioEntry = entry.getIn(['data', 'sections', 'portfolioGallery']);
  const portfolioData = portfolioEntry ? portfolioEntry.toJS() : {};

  const achievementsEntry = entry.getIn(['data', 'sections', 'achievements']);
  const achievementsData = achievementsEntry ? achievementsEntry.toJS() : {};

  console.log(getAsset(workTogetherData.image))
  console.log(aboutData)

  function createSupportedObject(url) {
    return {
      childImageSharp: {
        fluid: {
          src: url,
          srcSet: url,
          aspectRatio: 1
        }
      }
    }
  }
  return (
    <>
      <HomeTemplate {...homeData} />
      <AboutTemplate {...aboutData} image={createSupportedObject(aboutData.image)} />
      <WorkTogetherTemplate {...workTogetherData} />
      <MyServicesTemplate  {...myServicesData} />
      <PortfolioTemplate {...portfolioData} />
      <AchievementsTemplate {...achievementsData} />
      <FooterTemplate copyright={copyrightData} recentWork={{ image: createSupportedObject('') }} />
    </>
  )
}

AcademicsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func
}

export default AcademicsPreview