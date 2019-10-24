import React from 'react';
import PropTypes from 'prop-types';

export const Text = ({ name }) => (
    <p>Hello {name}</p>
);

Text.propTypes = {
    name: PropTypes.string,
};

Text.defaultProps = {
    name: 'world',
};