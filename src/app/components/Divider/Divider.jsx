import React from 'React';
import PropTypes from 'prop-types';
import './Divider.scss';

const Divider = ({className}) =>{
    return(
        <hr class={`hr simple-divider ${className}`}></hr>
    );

}
Divider.defaultProps = {
    className : 'simple-divider--default'
}
Divider.propTypes = {
    className : PropTypes.string
}
export default Divider;