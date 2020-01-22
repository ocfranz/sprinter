import React from 'react';
import PropTypes from 'prop-types';

import './Grid.scss';

const Grid = ({className, children}) =>{
    return(
        <div className={`grid-wrapper ${className}`}>
            {children}
        </div>
    );
}
Grid.deafultProps = {
    className : 'grid-wrapper--default'
}
Grid.propTypes = {
    className : PropTypes.string,
    children : PropTypes.element.isRequired
}
export default Grid;