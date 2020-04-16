import React from 'react'
import PropTypes from 'prop-types'
import { AcademicsTemplate } from '../../components/Academics'



const AcademicsPreview = ({ entry, widgetsFor, widgetFor }) => {

    const experience = entry.getIn(['data', 'experience'])
    const education = entry.getIn(['data', 'education'])
    const skills = entry.getIn(['data', 'skills'])

    const updatedEducation = education
        ? education.toJS().map(item => ({ ...item, heading: item.title, subheading: item.institution }))
        : [];

    const updatedExperience = experience
        ? experience.toJS().map(item => ({ ...item, heading: item.company, subheading: item.title }))
        : []

    return (
        <AcademicsTemplate
            education={updatedEducation}
            experience={updatedExperience}
            skills={skills ? skills.toJS() : []}
        />
    )
}

AcademicsPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func
}

export default AcademicsPreview