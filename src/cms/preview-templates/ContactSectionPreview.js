import React from 'react'
import PropTypes from 'prop-types'
import { ContactTemplate } from '../../components/Contact'



const ContactSectionPreview = ({ entry, widgetFor }) => {
    const tags = entry.getIn(['data', 'tags'])
    return (
        <ContactTemplate
            phone={entry.getIn(['data', 'phone'])}
            address={entry.getIn(['data', 'address'])}
            email={entry.getIn(['data', 'email'])}
        />
    )
}

ContactSectionPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default ContactSectionPreview