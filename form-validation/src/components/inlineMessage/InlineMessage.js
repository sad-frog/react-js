import React from 'react';
import PropTypes from 'prop-types';

export const InlineMessage = ({ value, className }) => (
    <div className={className}>
        {value}
    </div>
);

InlineMessage.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
};

InlineMessage.defaultProps = {
    value: '',
    className: '',
};