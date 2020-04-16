import React from 'react'
import PropTypes from 'prop-types'
import { FooterTemplate } from './../../components/Footer'

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

const RecentWorkPreview = ({ entry, widgetsFor, widgetFor }) => {

    const recentWorkData = entry.getIn(['data', 'project']).toJS()
    recentWorkData.image = createSupportedObject(recentWorkData.image)

    return (
        <FooterTemplate recentWork={recentWorkData} />
    )
}

RecentWorkPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func
}

export default RecentWorkPreview