import React from 'react';
import PropTypes from 'prop-types';

import './UserAvatar.scss';

const UserAvatar = ({className, children}) =>{
    return(
        <div className={` user-avatar ${className}`}>
            <div className="user-avatar__container">
                {children}
            </div>
        </div>
    )
}
UserAvatar.defaultProps = {
    className : 'user-avatar--default'
}
UserAvatar.propTypes = {
    className : PropTypes.string,
    children : PropTypes.oneOfType([ PropTypes.string, PropTypes.element]).isRequired
}
export default UserAvatar;