import React from 'react';
import PropTypes from 'prop-types';

export const Label = ({ value }) => (
    <label htmlFor="validationServer01">{value}: </label>
)

Label.propTypes = {
    value: PropTypes.string.isRequired,
};