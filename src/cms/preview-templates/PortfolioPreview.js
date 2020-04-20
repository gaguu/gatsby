import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioTemplate } from '../../components/Portfolio'
import 'bootstrap/dist/css/bootstrap.min.css'


// this function for converting a normal image url
// from the CMS api to a format which the component accepts
// as the component works with the gatsby image plugin
// not converting to this object throws error
// only for components using gatby-image plugin
function createSupportedObject(url) {
    // debugger;
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