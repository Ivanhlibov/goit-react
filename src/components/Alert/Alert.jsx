import PropTypes from 'prop-types';

import {AlertText} from '/Alert.styled';

export function Alert({type}){

    return <p className = "alert">{type}</p>

}
// спочатку з маленької, а потім змвеликою завжди пишеться
Alert.propTypes = {
    type: PropTypes.oneOf(['warning', 'error', 'success'])
};