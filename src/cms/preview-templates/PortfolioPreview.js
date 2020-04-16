import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioTemplate } from '../../components/Portfolio'


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


const PortfolioPreview = ({ entry, widgetsFor, widgetFor }) => {

    const projects = entry.getIn(['data', 'projects'])

    return (
        <PortfolioTemplate
            projects={projects ? projects.toJS().map(project => ({ ...project, image: createSupportedObject(project.image) })) : []}
        />
    )
}

PortfolioPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func
}

export default PortfolioPreview