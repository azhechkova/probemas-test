import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const Input = ({ value, onChange, type, ...props }) => (
  <TextField
    value={value}
    variant="outlined"
    size="medium"
    onChange={e => onChange(e.target.value)}
    type={type}
    {...props}
  />
);

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Input;
