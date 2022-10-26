import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ type, text, id, onClick }) => {
  return (
    <button type={type} className={css.btn} id={id} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
