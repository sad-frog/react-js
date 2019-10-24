import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TextField.css';

export const TextField = ({ placeholder }) => {
    const [value, setValue] = useState(
        ''
    );
    const handleChange = event => {
        setValue(event.target.value)
    }
    let className;
    if (value !== '')
        className = "accepted-validation"
    else
        className = "failed-validation"
    return <input
        type="text"
        className={className}
        id="validationServer01"
        placeholder={placeholder}
        value={value}
        onChange={handleChange.bind(this)}
        required
    />
}

TextField.propTypes = {
    placeholder: PropTypes.string,
};

TextField.defaultProps = {
    placeholder: ''
}