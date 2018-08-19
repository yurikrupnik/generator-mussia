import { createElement } from 'react';
import PropTypes from 'prop-types';

const Providers = ({ children, providers }) => providers
    .reduceRight((acc, c) => createElement(c, {}, acc), children);

Providers.propTypes = {
    children: PropTypes.element.isRequired,
    providers: PropTypes.arrayOf(PropTypes.func).isRequired
};

export default Providers;
