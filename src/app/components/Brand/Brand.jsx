import styled from 'styled-components';
import PropTypes from 'prop-types';
const Brand = styled.div`
    height: 100%;
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    font-weight: 900;
    font-size: 30px;
    cursor: pointer;
`;
Brand.defaultProps = {
    onClick : ()=>{ window.location.href = "/home"}
}
Brand.propTypes = {
    onClick : PropTypes.func.isRequired
}
export default Brand;