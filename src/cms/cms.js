import CMS from 'netlify-cms-app'

// requied when using styled components
import withStyled from "./withStyled";

import PortfolioPreview from './preview-templates/PortfolioPreview'


CMS.registerPreviewTemplate('portfolio', withStyled(PortfolioPreview))